import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout, Menu, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const PublicTopbar = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  // Hide the topbar when scrolling down, show when near the top
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 100], [0, -100]);

  return (
    <motion.div
      style={{
        position: "fixed",
        zIndex: 10,
        width: "100%",
        opacity,
        y,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Header
        style={{
          background: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <MailOutlined
              style={{
                fontSize: "28px",
                color: "#e94560",
                marginRight: "12px",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#fff",
                textShadow: "0 0 10px rgba(233, 69, 96, 0.5)",
              }}
            >
              12ose
            </span>
          </motion.div>

          {/* Navigation Menu */}
          <Menu
            mode="horizontal"
            style={{
              border: "none",
              background: "transparent",
              color: "#a6b1e1",
              fontSize: "16px",
            }}
          >
            {[
              { key: "home", label: "Home", path: "/" },
              { key: "features", label: "Features", path: "/features" },
              { key: "pricing", label: "Pricing", path: "/pricing" },
              { key: "docs", label: "Docs", path: "/docs" },
            ].map((item) => (
              <Menu.Item
                key={item.key}
                onClick={() => navigate(item.path)}
                style={{
                  color: "#a6b1e1",
                  margin: "0 20px",
                  transition: "all 0.3s",
                }}
                className="menu-item"
              >
                <motion.div whileHover={{ color: "#e94560", scale: 1.1 }}>
                  {item.label}
                </motion.div>
              </Menu.Item>
            ))}
          </Menu>

          {/* Buttons Section */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                style={{
                  marginRight: "15px",
                  color: "#e94560",
                  borderColor: "#e94560",
                  background: "transparent",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                style={{
                  background: "#e94560",
                  border: "none",
                  borderRadius: "20px",
                  padding: "0 25px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </Header>
    </motion.div>
  );
};

export default PublicTopbar;

// Optional CSS for hover effects on Menu items
const styles = `
  .menu-item:hover {
    background: rgba(233, 69, 96, 0.1) !important;
  }
`;

// Add this style tag to your app or component if using a CSS-in-JS solution
<style>{styles}</style>;
