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

  console.log("history", history.location);
  return (
    <Header style={{ background: "white" }}>
      <Menu mode="horizontal">
        <Menu.Item key="groovy" icon={<HomeOutlined />}>
          Groovy
        </Menu.Item>
        <Menu.Item key="cool" icon={<AppstoreOutlined />}>
          Cool
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
