import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  MessageOutlined,
  BookOutlined 
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Navbar.css";

const items = [
  {
    label: <Link to="/">About</Link>,
    key: "about",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/projects">Projects</Link>,
    key: "projects",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
    icon: <MessageOutlined />,
  },
  {
    label: <Link to="/education">Education</Link>,
    key: "contact",
    icon: <BookOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("about");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="navbar">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={window.innerWidth <= 800 ? "horizontal" : "inline"}
        items={items}
      />
    </div>
  );
};

export default Navbar;
