import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout, Button, Typography, Card, Row, Col } from "antd";
import {
  SmileOutlined,
  HeartOutlined,
  FireOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  ExperimentOutlined,
  StarOutlined,
  GiftOutlined,
  CloudOutlined,
  BulbOutlined,
  EyeOutlined,
  CrownOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
const bounce = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const pulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: { repeat: Infinity, duration: 1.5 },
  },
};

const HomePage = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]); // Background stars
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Clouds and gifts
  const y3 = useTransform(scrollY, [0, 700], [0, -50]); // Rockets and crowns
  const y4 = useTransform(scrollY, [0, 1000], [50, -200]); // New parallax layer for rose petals

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        background: "#1a1a2e",
        color: "#fff",
      }}
    >
      {/* Hero Section with Parallax */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ y: y1, position: "absolute", top: "-20%", opacity: 0.2 }}
        >
          <StarOutlined style={{ fontSize: "300px", color: "#e94560" }} />
        </motion.div>
        <motion.div
          style={{ y: y4, position: "absolute", left: "10%", opacity: 0.1 }}
        >
          <span style={{ fontSize: "150px" }}>🌹</span>{" "}
          {/* Parallax rose petals */}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.2 }}
          style={{ zIndex: 1 }}
        >
          <Title
            style={{
              fontSize: "80px",
              color: "#e94560",
              textShadow: "0 0 20px rgba(233, 69, 96, 0.5)",
            }}
          >
            Cosmic Odyssey Begins 🌌
          </Title>
          <Paragraph
            style={{
              fontSize: "22px",
              maxWidth: "800px",
              color: "#a6b1e1",
            }}
          >
            Embark on a stellar journey—under construction but already out of
            this world!
            <span style={{ opacity: 0.3 }}>12ose</span>{" "}
            {/* Hidden Easter egg */}
          </Paragraph>
          <motion.div style={{ marginTop: "30px" }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                type="primary"
                size="large"
                style={{
                  background: "#e94560",
                  border: "none",
                  marginRight: "20px",
                  borderRadius: "30px",
                  padding: "0 30px",
                }}
              >
                Join the Voyage
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="large"
                style={{
                  borderRadius: "30px",
                  color: "#e94560",
                  borderColor: "#e94560",
                }}
              >
                Peek Into the Void
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div
        style={{
          padding: "100px 20px",
          maxWidth: "1300px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Row gutter={[40, 40]}>
          {[
            {
              icon: (
                <SmileOutlined style={{ fontSize: "50px", color: "#f4a261" }} />
              ),
              title: "Galactic Joy",
              text: "Laughter echoes across the stars! 🌟",
            },
            {
              icon: (
                <HeartOutlined style={{ fontSize: "50px", color: "#e94560" }} />
              ),
              title: "Cosmic Love",
              text: "Feel the heartbeat of the universe. ❤️",
            },
            {
              icon: (
                <FireOutlined style={{ fontSize: "50px", color: "#f94144" }} />
              ),
              title: "Supernova Speed",
              text: "Blazing through space-time! 🔥",
            },
            {
              icon: (
                <ThunderboltOutlined
                  style={{ fontSize: "50px", color: "#90be6d" }}
                />
              ),
              title: "Electric Vibes",
              text: "Sparks of creativity ignite here! ⚡",
            },
          ].map((item, index) => (
            <Col xs={24} md={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={bounce}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  hoverable
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {item.icon}
                  <Title level={3} style={{ color: "#fff", margin: "20px 0" }}>
                    {item.title}
                  </Title>
                  <Paragraph style={{ color: "#a6b1e1" }}>
                    {strdup(item.text)}
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Parallax Nebula Section */}
      <div
        style={{
          padding: "120px 20px",
          textAlign: "center",
          position: "relative",
          background: "linear-gradient(180deg, #16213e 0%, #0f3460 100%)",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ y: y2, position: "absolute", top: "5%", opacity: 0.3 }}
        >
          <CloudOutlined style={{ fontSize: "250px", color: "#a6b1e1" }} />
        </motion.div>
        <motion.div
          style={{ y: y4, position: "absolute", right: "5%", opacity: 0.15 }}
        >
          <span style={{ fontSize: "120px" }}>🌹</span>{" "}
          {/* Parallax rose petals */}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 1.2 }}
          style={{ zIndex: 1 }}
        >
          <Title style={{ color: "#fff", fontSize: "60px" }}>
            Nebula Dreams ☁️
          </Title>
          <Paragraph
            style={{
              color: "#a6b1e1",
              fontSize: "20px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Float through a cosmic wonderland where every scroll unveils magic!
          </Paragraph>
          <motion.div variants={pulse} initial="hidden" whileInView="visible">
            <ThunderboltOutlined
              style={{ fontSize: "60px", color: "#90be6d", marginTop: "20px" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Rocket Launch Section */}
      <div
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #f94144 0%, #e94560 100%)",
          position: "relative",
        }}
      >
        <motion.div
          style={{ y: y3, position: "absolute", bottom: "-10%", opacity: 0.2 }}
        >
          <RocketOutlined style={{ fontSize: "200px", color: "#fff" }} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomIn}
          transition={{ duration: 1 }}
          style={{ zIndex: 1 }}
        >
          <RocketOutlined style={{ fontSize: "80px", color: "#fff" }} />
          <Title style={{ color: "#fff", fontSize: "60px" }}>
            Stellar Launch 🚀
          </Title>
          <Paragraph style={{ color: "#fff", fontSize: "20px" }}>
            Countdown to an epic digital explosion—stay tuned!
          </Paragraph>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div
        style={{
          padding: "120px 20px",
          maxWidth: "1300px",
          margin: "0 auto",
          textAlign: "center",
          background: "#1a1a2e",
        }}
      >
        <motion.div
          style={{ y: y4, position: "absolute", left: "20%", opacity: 0.1 }}
        >
          <span style={{ fontSize: "100px" }}>🌹</span>{" "}
          {/* Parallax rose petals */}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideIn}
          transition={{ duration: 1 }}
          style={{ zIndex: 1 }}
        >
          <EyeOutlined style={{ fontSize: "70px", color: "#f4a261" }} />
          <Title style={{ color: "#fff", fontSize: "50px" }}>
            Vision of the Cosmos 👁️
          </Title>
          <Paragraph
            style={{
              color: "#a6b1e1",
              fontSize: "18px",
              maxWidth: "800px",
              margin: "20px auto",
            }}
          >
            Peer into the future of web design—a universe of endless
            possibilities awaits.
          </Paragraph>
          <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
            <Col xs={24} md={12}>
              <motion.div variants={bounce} transition={{ duration: 0.6 }}>
                <Card
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  <Paragraph style={{ color: "#fff" }}>
                    Infinite Creativity
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <motion.div
                variants={bounce}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  <Paragraph style={{ color: "#fff" }}>
                    Boundless Exploration
                  </Paragraph>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>

      {/* Surprise Section */}
      <div
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #43aa8b 0%, #90be6d 100%)",
          position: "relative",
        }}
      >
        <motion.div
          style={{ y: y2, position: "absolute", top: "0%", opacity: 0.2 }}
        >
          <GiftOutlined style={{ fontSize: "250px", color: "#fff" }} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          style={{ zIndex: 1 }}
        >
          <GiftOutlined style={{ fontSize: "80px", color: "#fff" }} />
          <Title style={{ color: "#fff", fontSize: "60px" }}>
            Cosmic Surprises 🎁
          </Title>
          <Paragraph style={{ color: "#fff", fontSize: "20px" }}>
            Unwrap the mysteries of the universe—more wonders incoming!
          </Paragraph>
        </motion.div>
      </div>

      {/* Final Call-to-Action Section */}
      <div
        style={{
          padding: "150px 20px",
          textAlign: "center",
          background: "linear-gradient(180deg, #0f3460 0%, #1a1a2e 100%)",
          position: "relative",
        }}
      >
        <motion.div
          style={{ y: y3, position: "absolute", bottom: "-20%", opacity: 0.15 }}
        >
          <CrownOutlined style={{ fontSize: "300px", color: "#e94560" }} />
        </motion.div>
        <motion.div
          style={{ y: y4, position: "absolute", right: "15%", opacity: 0.1 }}
        >
          <span style={{ fontSize: "130px" }}>🌹</span>{" "}
          {/* Parallax rose petals */}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomIn}
          transition={{ duration: 1.2 }}
          style={{ zIndex: 1 }}
        >
          <BulbOutlined style={{ fontSize: "80px", color: "#f4a261" }} />
          <Title style={{ color: "#fff", fontSize: "60px" }}>
            Be the Cosmic Pioneer 🌟
          </Title>
          <Paragraph
            style={{
              color: "#a6b1e1",
              fontSize: "20px",
              maxWidth: "800px",
              margin: "20px auto",
            }}
          >
            Join us in shaping the future—one stellar click at a time.
          </Paragraph>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              type="primary"
              size="large"
              style={{
                background: "#e94560",
                border: "none",
                borderRadius: "30px",
                padding: "0 40px",
                fontSize: "18px",
              }}
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper function to fix typo in original code
const strdup = (text) => text;

export default HomePage;
