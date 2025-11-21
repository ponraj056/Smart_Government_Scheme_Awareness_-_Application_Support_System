import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  password: string;
  fullName: string;
  username: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  register: (
    email: string,
    password: string,
    fullName: string,
    username: string
  ) => Promise<void>;
  login: (identifier: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!user;

  // -------------------------------
  // REGISTER FUNCTION
  // -------------------------------
  const register = async (
    email: string,
    password: string,
    fullName: string,
    username: string
  ) => {
    return new Promise<void>((resolve, reject) => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        return reject(new Error("Email already registered"));
      }

      if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
        return reject(new Error("Username already taken"));
      }

      if (
        password.length < 6 ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[^A-Za-z0-9]/.test(password)
      ) {
        return reject(new Error("Password is not strong enough"));
      }

      const newUser: User = { email, password, fullName, username };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      resolve();
    });
  };

  // -------------------------------
  // LOGIN FUNCTION
  // -------------------------------
  const login = async (identifier: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      const foundUser = users.find(
        (u) =>
          u.email.toLowerCase() === identifier.toLowerCase() ||
          u.username.toLowerCase() === identifier.toLowerCase()
      );

      if (!foundUser) return reject(new Error("User not found"));

      if (foundUser.password !== password)
        return reject(new Error("Password incorrect"));

      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));

      resolve();
    });
  };

  // -------------------------------
  // UPDATE PROFILE (FIXED 🔥)
  // -------------------------------
  const updateProfile = async (data: Partial<User>) => {
    return new Promise<void>((resolve) => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      if (!user) return resolve();

      // Update the user in users array
      const updatedUsers = users.map((u) =>
        u.email === user.email ? { ...u, ...data } : u
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      const updatedUser = { ...user, ...data };

      // Update current user
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      resolve();
    });
  };

  // -------------------------------
  // LOGOUT
  // -------------------------------
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        register,
        login,
        logout,
        updateProfile, // ← NOW AVAILABLE
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
