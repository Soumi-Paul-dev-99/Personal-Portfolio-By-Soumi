import { Flex, Tag, Typography } from "antd";
import React from "react";
import { userData } from "../../data/userData";
const { Text } = Typography;

const Skills = () => {
  const { skills } = userData;
  return (
    <Flex gap={10} vertical className="gray-bg padding-26">
      <Text type="secondary">Skills</Text>
      <Flex wrap="wrap">
        {skills.map((skill, index) => (
          <Tag key={index} color="blue">
            {skill}
          </Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
