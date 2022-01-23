import React, { useState } from "react";
import { LoginComp } from "views/login";
import { RegisterComp } from "views/register";

export const UserLoginOrReigster = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? <LoginComp /> : <RegisterComp />}
      <button onClick={handleClick}>切换</button>
    </>
  );
};
