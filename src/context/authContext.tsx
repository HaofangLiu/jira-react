import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, UserLogin, authContext } from "model/ProjectListModel";
import { login, register, logout } from "context/auth-provider";

const AuthContext = createContext<authContext | undefined>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const loginUser = (useObj: UserLogin) => {
    login(useObj).then((user) => setUser(user));
  };

  const registerUser = (useObj: UserLogin) => {
    register(useObj).then((user) => setUser(user));
  };

  const logoutUser = () => {
    logout().then(() => setUser(null));
  };

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, loginUser, registerUser, logoutUser }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在AuthProvider中使用");
  }
  return context;
};
