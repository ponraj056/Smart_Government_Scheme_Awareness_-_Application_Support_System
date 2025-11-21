import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const ForgotPasswordPage = ({ onBackToLogin, onCodeSent }) => {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSendCode = async () => {
    setError("");

    try {
      if (!email.includes("@")) {
        throw new Error("Please enter a valid email");
      }

      await requestPasswordReset(email);
      onCodeSent(email); // pass email to reset screen

    } catch (err) {
      setError(err instanceof Error ? err.message : "Error sending code");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your registered email"
          className="w-full border p-3 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          onClick={handleSendCode}
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold"
        >
          Send Reset Code
        </button>

        <button
          onClick={onBackToLogin}
          className="w-full mt-4 text-blue-600 hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};
