import { Flex } from "antd";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import "./Socialmedia.css";
const SocialMedia = ({ about }) => {
  return (
    <Flex
      gap={10}
      align="center"
      justify="center"
      className={`gray-bg ${about ? "" : "padding-10"}`}
    >
      <FaFacebook className="user-icon" />
      <FaInstagram className="user-icon" />
      <FaGithub className="user-icon" />
      <FaWhatsapp className="user-icon" />
    </Flex>
  );
};

export default SocialMedia;
