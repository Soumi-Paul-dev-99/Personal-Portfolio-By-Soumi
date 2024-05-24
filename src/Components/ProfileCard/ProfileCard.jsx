import { Button, Flex } from "antd";
import React from "react";
import "./ProfileCard.css";
import { FaDownload } from "react-icons/fa6";
import UserInfo from "../userInfo/UserInfo";
import Skills from "../Skills/Skills";
import SocialMedia from "../SocialMedia/SocialMedia";
import Resume from "../../assets/Resume.pdf";
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
        <a href={Resume}> Download CV</a>
      </Button>
    </Flex>
  );
};

export default ProfileCard;
