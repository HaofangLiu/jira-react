import styled from "@emotion/styled";
import { useAuth } from "context/authContext";
import React, { useState } from "react";
import ProjectList from "views/project-list";

export const AuthedPage = () => {
  const { logoutUser } = useAuth();
  return (
    <>
      <PageHeader />
      <Main>
        <ProjectList />
      </Main>
      <button onClick={() => logoutUser()}>退出</button>
    </>
  );
};

const PageHeader = styled.header`
  height: 6rem;
`;
const Main = styled.main`
  height: (100vh-6rem);
`;
