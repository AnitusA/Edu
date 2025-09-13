import {
  checkUserRole,
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

// app/routes/auth.callback.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\auth.callback.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\auth.callback.tsx"
  );
  import.meta.hot.lastModified = "1757752669262.416";
}
function AuthCallback() {
  _s();
  (0, import_react.useEffect)(() => {
    const handleAuthCallback = async () => {
      try {
        console.log("=== AUTH CALLBACK STARTED ===");
        console.log("Current URL:", window.location.href);
        console.log("Hash:", window.location.hash);
        console.log("Search:", window.location.search);
        const {
          data,
          error
        } = await supabase.auth.getSession();
        console.log("Session data:", data);
        console.log("Session error:", error);
        if (error) {
          console.error("Auth session error:", error);
          window.location.href = "/login?error=auth_failed";
          return;
        }
        if (data.session?.user) {
          const user = data.session.user;
          const userEmail = user.email;
          console.log("User found:", {
            email: userEmail,
            user
          });
          if (!userEmail) {
            console.error("No email found in session");
            window.location.href = "/login?error=no_email";
            return;
          }
          console.log("Checking user role for:", userEmail);
          const roleCheck = await checkUserRole(userEmail);
          console.log("Role check result:", roleCheck);
          if (!roleCheck.isAllowed) {
            console.error("Email not allowed:", roleCheck.error);
            await supabase.auth.signOut();
            window.location.href = "/login?error=not_allowed";
            return;
          }
          console.log("User role verified:", roleCheck.role);
          sessionStorage.setItem("isAuthenticated", "true");
          sessionStorage.setItem("userEmail", userEmail);
          sessionStorage.setItem("userType", roleCheck.role || "student");
          sessionStorage.setItem("userName", user.user_metadata?.full_name || userEmail.split("@")[0] || "User");
          console.log("Session storage set successfully");
          const redirectPath = roleCheck.role === "staff" ? "/admin/dashboard" : "/student/dashboard";
          console.log("Redirecting to:", redirectPath);
          setTimeout(() => {
            console.log("Executing redirect now...");
            window.location.replace(redirectPath);
          }, 500);
          return;
        } else {
          console.log("No session found, redirecting to login");
          window.location.href = "/login";
        }
      } catch (err) {
        console.error("Unexpected error during auth callback:", err);
        window.location.href = "/login?error=unexpected_error";
      }
    };
    setTimeout(() => {
      handleAuthCallback();
    }, 100);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" }, void 0, false, {
      fileName: "app/routes/auth.callback.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Signing you in..." }, void 0, false, {
      fileName: "app/routes/auth.callback.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Please wait while we complete your Gmail authentication." }, void 0, false, {
      fileName: "app/routes/auth.callback.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.callback.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.callback.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s(AuthCallback, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AuthCallback;
var _c;
$RefreshReg$(_c, "AuthCallback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AuthCallback as default
};
//# sourceMappingURL=/build/routes/auth.callback-V37YM7B5.js.map
