import React from "react";
import "./UserInfo.css";
import { userData } from "../../data/userData";
import { Flex, Typography } from "antd";

const { Title, Text } = Typography;

const UserInfo = () => {
  console.log(userData);
  return (
    <Flex align="center" vertical gap={20}>
      <img src={userData.profile} alt={ userData.name} className="user-image" />

      <Flex align="center" vertical>
        <Title level={1} strong type="secondary">{userData.name}</Title>
        <Text type="secondary">{userData.role }</Text>
      </Flex>
    </Flex>
  );
};

export default UserInfo;
