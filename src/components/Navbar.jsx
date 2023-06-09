import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const items = [];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  const handleScreenSize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(
    () => (setScreenSize < 768 ? setScreenSize(false) : setScreenSize(true)),
    [screenSize]
  );

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> Cryptoverse </Link>
        </Typography.Title>
        <Button
          shape="round"
          icon={<MenuOutlined />}
          size="large"
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        />
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>

          <Menu.Item key="news" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

