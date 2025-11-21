import { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { ProfilePage } from "./pages/ProfilePage";
import { Header } from "./components/Header";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";

function AppContent() {
  const { isAuthenticated } = useAuth();

  // Auth Views
  const [authView, setAuthView] = useState<
    "register" | "login" | "forgot"
  >("register");

  // In-App Navigation after login
  const [currentPage, setCurrentPage] = useState<"dashboard" | "profile">(
    "dashboard"
  );

  // -----------------------------------------
  // BEFORE LOGIN (Show Register/Login/Forgot)
  // -----------------------------------------
  if (!isAuthenticated) {
    switch (authView) {
      case "register":
        return (
          <RegisterPage
            onSwitchToLogin={() => setAuthView("login")}
          />
        );

      case "login":
        return (
          <LoginPage
            onSwitchToRegister={() => setAuthView("register")}
            onForgotPassword={() => setAuthView("forgot")}
            onLoginSuccess={() => setCurrentPage("dashboard")}
          />
        );

      case "forgot":
        return (
          <ForgotPasswordPage
            onBackToLogin={() => setAuthView("login")}
          />
        );
    }
  }

  // -----------------------------------------
  // AFTER LOGIN (Show Dashboard / Profile)
  // -----------------------------------------
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      {currentPage === "dashboard" ? (
        <Dashboard />
      ) : (
        <ProfilePage />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}
