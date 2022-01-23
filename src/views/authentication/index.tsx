import { useAuth } from "context/authContext";
import React, { useState } from "react";
import ProjectList from "views/project-list";

export const AuthedPage = () => {
  const { logoutUser } = useAuth();
  return (
    <>
      <ProjectList />
      <button onClick={() => logoutUser()}>退出</button>
    </>
  );
};
