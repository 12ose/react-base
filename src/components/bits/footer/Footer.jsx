import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ background: "#001529", color: "#fff", padding: "40px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <h3>12ose</h3>
            <p>Lorem Ipsum Harry Hermione Dolores :p</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4>Product</h4>
            <p>Features</p>
            <p>Pricing</p>
            <p>Documentation</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Contact</p>
            <p>Blog</p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4>Legal</h4>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px",
          }}
        >
          © 2025 12ose. All rights reserved.
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
