import {
  createClient
} from "/build/_shared/chunk-PF235JI7.js";
import {
  createHotContext
} from "/build/_shared/chunk-V7SAXF47.js";

// app/utils/supabase.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\supabase.ts"
  );
  import.meta.hot.lastModified = "1757753877154.3481";
}
var getEnv = () => {
  if (typeof window !== "undefined" && window.ENV) {
    return {
      SUPABASE_URL: window.ENV.SUPABASE_URL,
      SUPABASE_ANON_KEY: window.ENV.SUPABASE_ANON_KEY
    };
  }
  return {
    SUPABASE_URL: process.env.SUPABASE_URL || "",
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || ""
  };
};
var { SUPABASE_URL, SUPABASE_ANON_KEY } = getEnv();
var supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
var signInWithGoogle = async () => {
  console.log("=== SIGN IN WITH GOOGLE ===");
  console.log("Supabase client:", !!supabase);
  console.log("Environment check:", {
    SUPABASE_URL: getEnv().SUPABASE_URL ? "Set" : "Missing",
    SUPABASE_ANON_KEY: getEnv().SUPABASE_ANON_KEY ? "Set" : "Missing"
  });
  try {
    const result = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: typeof window !== "undefined" ? window.location.origin + "/auth/callback" : void 0
      }
    });
    console.log("OAuth signIn result:", result);
    return result;
  } catch (error) {
    console.error("OAuth signIn error:", error);
    throw error;
  }
};
var checkUserRole = async (email) => {
  console.log("=== CHECKING USER ROLE ===");
  console.log("Email to check:", email);
  console.log("Supabase client:", !!supabase);
  try {
    const { data: testData, error: testError } = await supabase.from("allowed_emails").select("count", { count: "exact", head: true });
    console.log("Database connectivity test:", { testData, testError });
    const { data, error } = await supabase.from("allowed_emails").select("email, role, status").eq("email", email).eq("status", "active").single();
    console.log("Database query result:", { data, error });
    console.log("Query details:", {
      table: "allowed_emails",
      email,
      status: "active",
      queryType: "single"
    });
    if (error) {
      console.error("Database error details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      const { data: allData, error: allError } = await supabase.from("allowed_emails").select("email, role, status").eq("email", email);
      console.log("Fallback query (without single):", { allData, allError });
    }
    if (error || !data) {
      console.log("User not found in allowed_emails or query error");
      return {
        isAllowed: false,
        role: null,
        error: error?.message || "Email not found in allowed list"
      };
    }
    console.log("User found and allowed:", data);
    return { isAllowed: true, role: data.role, error: null };
  } catch (err) {
    console.error("Unexpected error in checkUserRole:", err);
    return {
      isAllowed: false,
      role: null,
      error: "Database connection error"
    };
  }
};

export {
  supabase,
  signInWithGoogle,
  checkUserRole
};
//# sourceMappingURL=/build/_shared/chunk-H2DG6BCE.js.map
