import { Button, Flex } from "antd";
import React from "react";
import "./ProfileCard.css";
import { FaDownload } from "react-icons/fa6";
import UserInfo from "../userInfo/UserInfo";
import Skills from "../Skills/Skills";
import SocialMedia from "../SocialMedia/SocialMedia";

const ProfileCard = () => {
  return (
    <Flex align="center" vertical gap={10} className="profile-card">
      <UserInfo />
      <Skills />
      <SocialMedia />

      <Button
        icon={<FaDownload />}
        size="large"
        type="primary"
        className="user-btn"
      >
        Download CV
      </Button>
    </Flex>
  );
};

export default ProfileCard;
