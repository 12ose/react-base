import React from "react";
import { Outlet } from "react-router-dom";
import PublicTopbar from "../../bits/topbar/PublicTopbar";
import { Layout } from "antd";
import AppFooter from "../../bits/footer/Footer";

const { Content } = Layout;

const PublicLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <PublicTopbar />
      <Content style={{ paddingTop: "64px" }}>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default PublicLayout;
