import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Mail, Lock, Eye, EyeOff, LogIn, AtSign } from "lucide-react";

interface LoginPageProps {
  onSwitchToRegister: () => void;
  onForgotPassword: () => void;
  onLoginSuccess: () => void;
}

// Password Hint
const getPasswordHint = (password: string) => {
  let hints = [];
  if (password.length < 6) hints.push("At least 6 characters");
  if (!/[A-Z]/.test(password)) hints.push("1 uppercase letter");
  if (!/[0-9]/.test(password)) hints.push("1 number");
  if (!/[^A-Za-z0-9]/.test(password)) hints.push("1 special character");
  return hints;
};

export const LoginPage = ({
  onSwitchToRegister,
  onForgotPassword,
  onLoginSuccess,
}: LoginPageProps) => {

  const { login } = useAuth();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordHints = getPasswordHint(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(identifier, password);  // CHECK EMAIL + PASSWORD
      onLoginSuccess();                   // GO TO DASHBOARD
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex justify-center items-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email or Username */}
          <div>
            <label className="text-sm font-medium">Email / Username</label>
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full border rounded-lg pl-12 pr-4 py-3"
                placeholder="Enter email or username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded-lg pl-12 pr-12 py-3"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>

            {/* Password Hints */}
            {password && (
              <ul className="text-sm mt-2">
                {passwordHints.length === 0 ? (
                  <li className="text-green-600 font-semibold">Strong password ✔</li>
                ) : (
                  passwordHints.map((h, i) => (
                    <li key={i} className="text-red-600">• {h}</li>
                  ))
                )}
              </ul>
            )}
          </div>

          <p
            onClick={onForgotPassword}
            className="text-right text-blue-600 text-sm cursor-pointer"
          >
            Forgot Password?
          </p>

          {error && (
            <p className="bg-red-50 border border-red-300 text-red-600 p-2 rounded">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-6">
          New user?{" "}
          <span
            onClick={onSwitchToRegister}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
