import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { UserPlus, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

// ---------- Password strength functions ----------
const getPasswordStrength = (password: string) => {
  let score = 0;

  if (password.length >= 6) score++;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
};

const getStrengthLabel = (score: number) => {
  switch (score) {
    case 1:
      return "Weak";
    case 2:
      return "Medium";
    case 3:
      return "Strong";
    case 4:
    case 5:
      return "Very Strong";
    default:
      return "";
  }
};

const getStrengthColor = (score: number) => {
  switch (score) {
    case 1:
      return "bg-red-500";
    case 2:
      return "bg-yellow-500";
    case 3:
      return "bg-green-500";
    case 4:
    case 5:
      return "bg-blue-600";
    default:
      return "bg-gray-300";
  }
};

interface RegisterPageProps {
  onSwitchToLogin: () => void;
}

export const RegisterPage = ({ onSwitchToLogin }: RegisterPageProps) => {
  const { register } = useAuth();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");      // ⭐ FIXED
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const strengthScore = getPasswordStrength(password);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // ⭐ FIXED — correct required validation
      if (!fullName || !username || !email || !password || !confirmPassword) {
        throw new Error("All fields are required");
      }

      // Email Format Check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) throw new Error("Invalid email address");

      // Confirm Password Match
      if (password !== confirmPassword) throw new Error("Passwords do not match");

      // Strong Password (score >= 3)
      if (strengthScore < 3) throw new Error("Please create a stronger password");

      setLoading(true);

      // ⭐ FIXED — correct argument order
      await register(email, password, fullName, username);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Register</h1>
          <p className="text-gray-600">{t("appName")}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-12 pr-12 py-3 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>

            {/* Strength Meter */}
            {password && (
              <div className="mt-3">
                <div className="flex justify-between text-sm">
                  <span>Strength:</span>
                  <span className={`font-semibold ${
                    strengthScore <= 1
                      ? "text-red-600"
                      : strengthScore === 2
                      ? "text-yellow-600"
                      : strengthScore === 3
                      ? "text-green-600"
                      : "text-blue-600"
                    }`}>
                    {getStrengthLabel(strengthScore)}
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 ${getStrengthColor(strengthScore)}`}
                    style={{ width: `${(strengthScore / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3 border rounded-lg"
                placeholder="Re-enter your password"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-600 p-3 rounded">
              {error}
            </div>
          )}

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Switch To Login */}
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <span
            onClick={onSwitchToLogin}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Login Here
          </span>
        </p>
      </div>
    </div>
  );
};
