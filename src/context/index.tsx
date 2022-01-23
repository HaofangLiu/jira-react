import React, { ReactNode } from "react";
import { AuthProvider } from "./authContext";
export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
