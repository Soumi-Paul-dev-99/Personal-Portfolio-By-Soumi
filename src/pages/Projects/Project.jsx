import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { motion } from "framer-motion";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { userData } from "../../data/userData";
import "./Projects.css";

import {
  Avatar,
  Card,
  Divider,
  Flex,
  Progress,
  Tag,
  Tooltip,
  Typography,
} from "antd";

const { Title, Text } = Typography;
const Project = () => {
  const { projects } = userData;
  return (
    <>
      <PageTitle PageTitle="Projects" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="projects"
      >
        {projects.map((project, index) => (
          <Card
            hoverable
            key={index}
            style={{ background: project.bg, flex: 1 }}
          >
            <Flex gap={10} vertical>
              <Flex align="center" justify="space-between">
                <Text type="secondary">{project.startDate}</Text>
                <CiMenuKebab />
              </Flex>
            </Flex>
            <Flex vertical align="center">
              <Title level={1}>{project.title}</Title>
              <Text>{project.description}</Text>
            </Flex>

            <Flex vertical>
              <Text>Progress</Text>
              <Progress percent={project.progress} status="active" />

              <Divider />
              <Flex align="center" gap={10} justify="space-between">
                <Avatar.Group
                  maxCount={4}
                  maxPopoverTrigger="click"
                  size="large"
                  maxStyle={{
                    color: "#f5ba00",
                    backgroundColor: "fde3cf",
                    cursor: "pointer",
                  }}
                >
                  <Tooltip title={userData.name} placement="top">
                    <Avatar src={userData.profile} />
                  </Tooltip>
                  <Tooltip title="User 2" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?t=st=1716381689~exp=1716385289~hmac=11b627e1e2ee00432c322a6f781d38de111f1c49bb1a552265d6adad4b24ff7f&w=740" />
                  </Tooltip>
                  <Tooltip title="User 3" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/beautiful-smiling-woman-with-long-hair-standing-against-blue-background_662251-521.jpg?w=740&t=st=1716381741~exp=1716382341~hmac=9898088d0e742b38b886aa25ba769b62c408ffa8db73991883c5f73797ca41b1" />
                  </Tooltip>
                  <Tooltip title="User 4" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?w=740&t=st=1716381849~exp=1716382449~hmac=67203dd675cdbdaa74af68cbaa4160e5792d9eb060f55185140dc29f7740f8a4" />
                  </Tooltip>
                  <Tooltip title="User 5" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?t=st=1716381897~exp=1716385497~hmac=c0058e5f5645376f0eac71ddb0134227cab28c2b543143e808f065ba60eb94f8&w=360" />
                  </Tooltip>
                  <Tooltip title="User 6" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?t=st=1716381936~exp=1716385536~hmac=767cedc5d5560b1e24f3a5cea40e547151ddd052594702dc9728820690f894b3&w=360" />
                  </Tooltip>
                  <Tooltip title="User 6" placement="top">
                    <Avatar src="https://img.freepik.com/free-photo/portrait-smiling-young-man-sunglasses_1268-21888.jpg?t=st=1716381975~exp=1716385575~hmac=8db574c0aad7beb212cb749f7a799a2e2c16a254a48d0d5374fb42b126f50f94&w=360" />
                  </Tooltip>
                </Avatar.Group>
                <Tag color={project.color}>{project.time}</Tag>
              </Flex>
            </Flex>
          </Card>
        ))}
      </motion.div>
    </>
  );
};

export default Project;
