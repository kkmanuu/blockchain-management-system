import React, { createContext, useState, useEffect, useContext } from "react";
import { User } from "../types";
import { getMe } from "../api/authApi";

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (token: string, userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

// Create a context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  isLoading: true,
});

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component that wraps around parts of the app that need authentication
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null); // User state
  const [isLoading, setIsLoading] = useState(true); // Loading state while fetching user data

  // Check if token exists in localStorage and fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getMe()
        .then((userData) => {
          setUser(userData); // Set user if token is valid
        })
        .catch(() => {
          localStorage.removeItem("token"); // Clear invalid token
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false); // Done loading
        });
    } else {
      setIsLoading(false); // No token found, done loading
    }
  }, []);

  // Function to handle login
  const login = (token: string, userData: User) => {
    localStorage.setItem("token", token); // Save token to localStorage
    setUser(userData); // Set user data
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token"); // Remove token
    setUser(null); // Clear user data
  };

  // Provide authentication values and functions to children components
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
