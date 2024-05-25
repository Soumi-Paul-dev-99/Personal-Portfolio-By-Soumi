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
      {/* <FaFacebook className="user-icon" />
      <FaInstagram className="user-icon" />
      <FaGithub className="user-icon" />
      <FaWhatsapp className="user-icon" /> */}

      <a
        href="https://www.facebook.com/soumi.paul.mamon98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="user-icon" />
      </a>
      <a
        href="https://www.instagram.com/soumipaul221298"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="user-icon" />
      </a>
      <a
        href="https://github.com/Soumi-Paul-dev-99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="user-icon" />
      </a>
      <a
        href="http://api.whatsapp.com/send?phone=+919330719639"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="user-icon" />
      </a>
    </Flex>
  );
};

export default SocialMedia;
