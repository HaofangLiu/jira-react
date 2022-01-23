import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, UserLogin, authContext } from "model/ProjectListModel";
import { login, register, logout, getToken } from "context/auth-provider";
import { http } from "utils/http";
import { useMount } from "utils";

const AuthContext = createContext<authContext | undefined>(undefined);

AuthContext.displayName = "AuthContext";

const setupUserOnRefresh = async () => {
  let user = null;
  const token = getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

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

  useMount(() => {
    setupUserOnRefresh().then((data) => {
      setUser(data);
    });
  });

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
