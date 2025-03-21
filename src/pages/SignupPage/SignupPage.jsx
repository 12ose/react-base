import React, { useState } from "react";
import { Form, Input, Button, Card, Steps, Typography, Layout } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSignup } from "./SignupActions";

const { Step } = Steps;
const { Title } = Typography;
const { Content } = Layout;

const SignupPage = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState();
  const signupUser = useSignup();

  const steps = [
    {
      title: "Personal Info",
      fields: ["firstName", "lastName", "organization"],
    },
    {
      title: "Contact Details",
      fields: ["email", "phone"],
    },
    {
      title: "Security",
      fields: ["password", "confirmPassword"],
    },
  ];

  const next = async () => {
    try {
      const values = await form.validateFields(steps[currentStep].fields);
      setFormValues((prev) => ({ ...prev, ...values }));
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const prev = () => setCurrentStep(currentStep - 1);

  const onFinish = async (values) => {
    const allValues = { ...formValues, ...values };
    console.log("Received values:", allValues);
    signupUser(allValues);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: 500,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            borderRadius: 8,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Title level={2}>Create Account</Title>
            <p>Sign up to get started with ContactEasy</p>
          </div>

          <Steps current={currentStep} style={{ marginBottom: 24 }}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>

          <Form
            form={form}
            name="signup"
            onFinish={onFinish}
            layout="vertical"
            style={{ minHeight: 300 }}
          >
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="First Name"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Last Name"
                    size="large"
                  />
                </Form.Item>
                <Form.Item name="organization">
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Organization Name (Optional)"
                    size="large"
                  />
                </Form.Item>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="Email"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number!",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="Phone Number"
                    size="large"
                  />
                </Form.Item>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("Passwords do not match!");
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Confirm Password"
                    size="large"
                  />
                </Form.Item>
              </motion.div>
            )}

            <div style={{ marginTop: 24 }}>
              {currentStep > 0 && (
                <Button style={{ marginRight: 8 }} onClick={prev} size="large">
                  Previous
                </Button>
              )}
              {currentStep < steps.length - 1 && (
                <Button type="primary" onClick={next} size="large">
                  Next
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button type="primary" htmlType="submit" size="large">
                  Sign Up
                </Button>
              )}
            </div>
          </Form>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Card>
      </motion.div>
    </Content>
  );
};

export default SignupPage;
