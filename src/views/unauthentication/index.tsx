import React, { useState } from "react";
import { LoginComp } from "views/login";
import { RegisterComp } from "views/register";
import styled from "@emotion/styled";
import { Card, Divider } from "antd";

export const UserLoginOrReigster = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <ShadowCard>
        {isLogin ? <h2>登录</h2> : <h2>注册</h2>}
        {isLogin ? <LoginComp /> : <RegisterComp />}
        <Divider></Divider>
        <a onClick={handleClick}>切换</a>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
