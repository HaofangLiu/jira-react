import { useAuth } from "context/authContext";
import { logout } from "context/auth-provider";
import qs from "qs";
const url = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: object;
  token?: string;
}

export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET", // default, can be overide in customConfig
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${url}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await logout();
      window.location.reload();
      return Promise.reject("登录已经过期请重新登录");
    }
    const data = res.json();
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();
  // [endpoint, customConfig]:[string, Config]
  return (...[endpoint, customConfig]: Parameters<typeof http>) =>
    http(endpoint, { ...customConfig, token: user?.token });
};
