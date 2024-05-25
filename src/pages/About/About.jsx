import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { Flex, Typography } from "antd";
import { userData } from "../../data/userData";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import "./About.css";
import Skills from "../../Components/Skills/Skills";
import { motion } from "framer-motion";
import { FaGlobe, FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
const { Title, Text, Paragraph } = Typography;
const About = () => {
  const { education } = userData;
  return (
    <>
      <PageTitle PageTitle="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex gap={20} vertical>
          <Flex
            gap={20}
            align="center"
            className="gray-bg padding-10 user-personal"
          >
            <img
              src={userData.profile}
              alt={userData.name}
              className="user-image"
            />

            <Flex vertical gap={30}>
              <Flex gap={10} vertical className="user-details">
                <Title level={1} strong type="secondary">
                  {userData.name}
                </Title>
                <Text strong type="secondary">
                  {userData.role}
                </Text>
              </Flex>
              <SocialMedia about={true} />
            </Flex>
          </Flex>
          <Flex gap={10} className="about-details">
            <Flex vertical gap={10} className="gray-bg padding-10">
              <Skills />

              <Flex className="padding-10" vertical gap={10}>
                <Flex align="center" gap={10}>
                  <FaPhone className="about-icon" />
                  <Text>{userData.phone}</Text>
                </Flex>

                <Flex align="center" gap={10}>
                  <FaMessage className="about-icon" />
                  <Text>{userData.email}</Text>
                </Flex>

                <Flex align="center" gap={10}>
                  <FaLocationDot className="about-icon" />
                  <Text>{userData.address}</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex vertical gap={10} className="gray-bg padding-10">
              <Text type="secondary" strong>
                About
              </Text>
              <Paragraph>{userData.about}</Paragraph>
            </Flex>
          </Flex>
          <Flex vertical className="gray-bg padding-10">
            <Text type="secondary" strong>
              Education
            </Text>
            <Flex vertical className="padding-1">
              {education.map((edu, index) => (
                <Flex
                  key={index}
                  gap={1}
                  align="center"
                  justify="space-between"
                  wrap="wrap"
                >
                  <Flex gap={10}>
                    <Text strong>{edu.collage}</Text>
                    <Text type="secondary">{edu.degreee}</Text>
                    <Text type="secondary" strong italic>
                      {edu.durations}
                    </Text>
                    <Text type="secondary" strong italic>
                      {edu.Marks}
                    </Text>
                  </Flex>
                  <br />
                  {/* <Flex gap={10} >
                  <Text strong>{edu.school}</Text>
                  <Text type="secondary">{edu.board}</Text>
                  <Text type="secondary">{edu.degree}</Text>
                  <Text type="secondary" strong italic>
                    {edu.duration}
                  </Text>
                  <Text type="secondary" strong italic>
                    {edu.marks}
                  </Text>
                </Flex> */}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};

export default About;
