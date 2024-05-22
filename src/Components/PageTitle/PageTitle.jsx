import React from "react";
import "./PageTitle.css";
import { Flex, Typography } from "antd";

const { Title } = Typography;
const PageTitle = ({ PageTitle }) => {
  return (
    <Flex
      align="center"
      justify="center"
      className="gray-bg padding-10 page-title-container"
    >
      <Title Level={3} strong type="secondary" className="page-title">
        {PageTitle}
      </Title>
    </Flex>
  );
};

export default PageTitle;
