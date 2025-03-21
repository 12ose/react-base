import React from "react";
import { Form, Input, Button, Card, Typography, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

const LoginPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you would typically handle the login logic
    // e.g., send request to your authentication API
  };

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "64px 24px 24px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderRadius: 8,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={2}>Login</Title>
          <p>Welcome back! Please enter your credentials</p>
        </div>

        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              size="large"
              style={{ borderRadius: 4 }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
              style={{ borderRadius: 4 }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              style={{ borderRadius: 4 }}
            >
              Log In
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <a href="#">Forgot password?</a>
            <br />
            <span>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </span>
          </div>
        </Form>
      </Card>
    </Content>
  );
};

export default LoginPage;
