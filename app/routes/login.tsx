import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { signInWithGoogle, supabase } from "~/utils/supabase";

export const meta: MetaFunction = () => {
  return [
    { title: "Login - EduHub" },
    { name: "description", content: "Login to your EduHub account with Gmail" },
  ];
};

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for error messages from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get('error');
    
    if (errorParam) {
      switch (errorParam) {
        case 'not_allowed':
          setError('Your email is not authorized to access this application. Please contact your administrator.');
          break;
        case 'no_email':
          setError('No email address found in your Google account. Please try again.');
          break;
        case 'auth_failed':
          setError('Authentication failed. Please try again.');
          break;
        case 'session_failed':
          setError('Failed to establish session. Please try again.');
          break;
        case 'unexpected_error':
          setError('An unexpected error occurred. Please try again.');
          break;
        default:
          setError('An error occurred during login. Please try again.');
      }
    }
  }, []);

  const handleGoogleLogin = async () => {
    console.log('=== GOOGLE LOGIN CLICKED ===');
    console.log('Current URL:', window.location.href);
    console.log('User Agent:', navigator.userAgent);
    
    setIsLoading(true);
    setError(null);

    try {
      console.log('Calling signInWithGoogle...');
      
      // Test if supabase is working first
      const { data: testSession, error: testError } = await supabase.auth.getSession();
      console.log('Current session test:', { testSession, testError });
      
      const result = await signInWithGoogle();
      console.log('Google OAuth result:', result);
      
      if (result.error) {
        console.error('OAuth error details:', {
          message: result.error.message,
          status: result.error.status
        });
        setError(`OAuth Error: ${result.error.message}`);
      } else {
        console.log('OAuth initiated successfully');
        console.log('Should redirect to Google now...');
        
        // Add a timeout to check if redirect happened
        setTimeout(() => {
          console.log('Still on login page after 3 seconds - redirect may have failed');
          if (window.location.pathname === '/login') {
            setError('OAuth redirect failed. Please check your browser settings.');
            setIsLoading(false);
          }
        }, 3000);
      }
    } catch (err) {
      console.error('Exception during Google login:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(`Login failed: ${errorMessage}`);
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">EduHub</h1>
          <p className="text-gray-600">Your Academic Companion</p>
          <p className="text-sm text-gray-500 mt-2">Sign in with your authorized Gmail account</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Welcome Back
          </h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Sign in to access your dashboard. You'll be redirected based on your account type.
            </p>
          </div>
          
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Connecting to Google...</span>
              </div>
            ) : (
              <>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-lg">Continue with Gmail</span>
              </>
            )}
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Only authorized email addresses can access this application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}