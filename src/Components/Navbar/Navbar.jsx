// import React, { useState } from "react";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   MessageOutlined,
//   BookOutlined,
// } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import { Menu } from "antd";
// import "./Navbar.css";

// const items = [
//   {
//     label: <Link to="/">About</Link>,
//     key: "about",
//     icon: <MailOutlined />,
//   },
//   {
//     label: <Link to="/projects">Projects</Link>,
//     key: "projects",
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: <Link to="/education">Education</Link>,
//     key: "education",
//     icon: <BookOutlined />,
//   },
//   {
//     label: <Link to="/contact">Contact</Link>,
//     key: "contact",
//     icon: <MessageOutlined />,
//   },
// ];
// const Navbar = () => {
//   const [current, setCurrent] = useState("about");
//   const onClick = (e) => {
//     console.log("click ", e);
//     setCurrent(e.key);
//   };
//   return (
//     <div className="navbar">
//       <Menu
//         onClick={onClick}
//         selectedKeys={[current]}
//         mode={window.innerWidth <= 800 ? "horizontal" : "inline"}
//         items={items}
//       />
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  MessageOutlined,
  BookOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu, Drawer, Button } from "antd";
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
    label: <Link to="/education">Education</Link>,
    key: "education",
    icon: <BookOutlined />,
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
    icon: <MessageOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("about");
  const [visible, setVisible] = useState(false);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setVisible(false); // Close drawer when a menu item is clicked
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="navbar">
      <div className="menu-button">
        <Button type="secondary" strong bold onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={window.innerWidth <= 800 ? "horizontal" : "inline"}
        items={items}
        className="desktop-menu"
      />
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        visible={visible}
        className="mobile-menu"
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;
