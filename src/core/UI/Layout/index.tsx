import { Layout } from "antd";
import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Layout>
  );
};
