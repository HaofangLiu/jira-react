import { useAuth } from "context/authContext";
import React, { FormEvent } from "react";

export const RegisterComp = () => {
  // const url = process.env.REACT_APP_API_URL;
  const { registerUser, user } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    registerUser({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{user ? <div>{user?.name}</div> : null}</div>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id="password" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
