import { logout } from "../context/auth-provider";
export interface User {
  id: number;
  name: string;
  email?: string;
  title?: string;
  organization?: string;
  token?: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface List {
  id: number;
  name: string;
  personId: number;
  organization: string;
}

export interface paramsInterface {
  name: string;
  personId: string;
}

export interface authContext {
  user: User | null;
  registerUser: Function;
  loginUser: Function;
  logoutUser: Function;
}
