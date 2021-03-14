import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
  return (
    <Header style={{ background: "white" }}>
      <Menu mode="horizontal">
        <Menu.Item
          key="home"
          icon={<HomeOutlined />}
          onClick={() => history.push("/")}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="about"
          icon={<AppstoreOutlined />}
          onClick={() => history.push("/about")}
        >
          About
        </Menu.Item>
        <Menu.Item
          key="Contact"
          icon={<SettingOutlined />}
          onClick={() => history.push("/contact")}
        >
          Contact
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
