import { Button, Form, Input } from "antd";
import { useAuth } from "context/authContext";
import React, { FormEvent } from "react";

export const RegisterComp = () => {
  // const url = process.env.REACT_APP_API_URL;
  const { registerUser, user } = useAuth();

  const handleSubmit = (value: { username: string; password: string }) => {
    registerUser(value);
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
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
