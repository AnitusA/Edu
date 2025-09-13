import {
  signInWithGoogle,
  supabase
} from "/build/_shared/chunk-H2DG6BCE.js";
import "/build/_shared/chunk-PF235JI7.js";
import "/build/_shared/chunk-PH7FC7E6.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1757765369856.7563";
}
var meta = () => {
  return [{
    title: "Login - EduHub"
  }, {
    name: "description",
    content: "Login to your EduHub account with Gmail"
  }];
};
function Login() {
  _s();
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get("error");
    if (errorParam) {
      switch (errorParam) {
        case "not_allowed":
          setError("Your email is not authorized to access this application. Please contact your administrator.");
          break;
        case "no_email":
          setError("No email address found in your Google account. Please try again.");
          break;
        case "auth_failed":
          setError("Authentication failed. Please try again.");
          break;
        case "session_failed":
          setError("Failed to establish session. Please try again.");
          break;
        case "unexpected_error":
          setError("An unexpected error occurred. Please try again.");
          break;
        default:
          setError("An error occurred during login. Please try again.");
      }
    }
  }, []);
  const handleGoogleLogin = async () => {
    console.log("=== GOOGLE LOGIN CLICKED ===");
    console.log("Current URL:", window.location.href);
    console.log("User Agent:", navigator.userAgent);
    setIsLoading(true);
    setError(null);
    try {
      console.log("Calling signInWithGoogle...");
      const {
        data: testSession,
        error: testError
      } = await supabase.auth.getSession();
      console.log("Current session test:", {
        testSession,
        testError
      });
      const result = await signInWithGoogle();
      console.log("Google OAuth result:", result);
      if (result.error) {
        console.error("OAuth error details:", {
          message: result.error.message,
          status: result.error.status
        });
        setError(`OAuth Error: ${result.error.message}`);
      } else {
        console.log("OAuth initiated successfully");
        console.log("Should redirect to Google now...");
        setTimeout(() => {
          console.log("Still on login page after 3 seconds - redirect may have failed");
          if (window.location.pathname === "/login") {
            setError("OAuth redirect failed. Please check your browser settings.");
            setIsLoading(false);
          }
        }, 3e3);
      }
    } catch (err) {
      console.error("Exception during Google login:", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(`Login failed: ${errorMessage}`);
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-900 mb-2", children: "EduHub" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Your Academic Companion" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mt-2", children: "Sign in with your authorized Gmail account" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-xl p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-center text-gray-900 mb-6", children: "Welcome Back" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-red-600", children: error }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 123,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 122,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Sign in to access your dashboard. You'll be redirected based on your account type." }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleGoogleLogin, disabled: isLoading, className: "w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Connecting to Google..." }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 133,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fill: "white", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fill: "white", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 139,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fill: "white", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 140,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fill: "white", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg", children: "Continue with Gmail" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 136,
        columnNumber: 24
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: "By signing in, you agree to our Terms of Service and Privacy Policy" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-400 mt-2", children: "Only authorized email addresses can access this application" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 151,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(Login, "e4kBt7QYx/QZ/pIdB4oHDuoMTZc=");
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-676E3VKI.js.map
