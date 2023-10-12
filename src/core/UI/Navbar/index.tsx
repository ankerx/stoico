import { SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
const items: MenuProps["items"] = [
  {
    label: "Menu",
    key: "Menu",

    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link to="/">News</Link>,
            key: "news",
          },
          {
            label: <Link to="/headlines">Top headlines</Link>,
            key: "headlines",
          },
        ],
      },
    ],
  },
];

export const Navbar = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState("news");

  const onMenuItemClick: MenuProps["onClick"] = (e) => {
    setCurrentMenuItem(e.key);
  };
  return (
    <Header className={styles.header}>
      <Title className={styles.title}>NewsHub</Title>

      <Menu
        mode="horizontal"
        items={items}
        onClick={onMenuItemClick}
        selectedKeys={[currentMenuItem]}
      />
    </Header>
  );
};
