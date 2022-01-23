import { User, UserLogin } from "../model/ProjectListModel";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

const url = process.env.REACT_APP_API_URL;

export const login = async (data: UserLogin) => {
  const res = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Network response was not OK");
  }
  const result_1 = await res.json();
  return handleUserResponse(result_1.user);
};

export const register = async (data: UserLogin) => {
  const res = await fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Network response was not OK");
  }
  const result_1 = await res.json();
  return handleUserResponse(result_1.user);
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
