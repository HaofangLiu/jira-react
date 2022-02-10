import { useAuth } from "context/authContext";
import React, { FormEvent } from "react";
import { Button, Form, Input } from "antd";

export const LoginComp = () => {
  // const url = process.env.REACT_APP_API_URL;
  const { loginUser, user } = useAuth();

  const handleSubmit = (value: { username: string; password: string }) => {
    loginUser(value);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "please input" }]}
      >
        <Input placeholder="Username" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "please input" }]}
      >
        <Input placeholder="password" type="text" id="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
