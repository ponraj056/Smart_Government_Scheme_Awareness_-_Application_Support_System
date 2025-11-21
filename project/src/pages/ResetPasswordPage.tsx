import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const ResetPasswordPage = ({ email, onSuccess }) => {
  const { resetPassword } = useAuth();

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    try {
      if (newPassword.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      await resetPassword(email, code, newPassword);
      alert("Password reset successfully!");
      onSuccess(); // return to login

    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <input
          type="text"
          placeholder="Enter reset code"
          className="w-full border p-3 rounded mb-3"
          onChange={(e) => setCode(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter new password"
          className="w-full border p-3 rounded mb-3"
          onChange={(e) => setNewPassword(e.target.value)}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          onClick={handleReset}
          className="w-full bg-green-600 text-white p-3 rounded font-semibold"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};
