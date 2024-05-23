import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import "./Contact.css";
import { Button, Flex, Form, Input } from "antd";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <>
      <PageTitle PageTitle="Let's Connect" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex align="center" justify="center">
          <Form Layout="vertical" className="contact-form">
            <Form.Item Label="Your name">
              <Input size="large" placeholder="Enter Your name" />
            </Form.Item>
            <Form.Item Label="Your email">
              <Input size="large" placeholder="Enter Your email" />
            </Form.Item>
            <Form.Item Label="Your message">
              <Input.TextArea
                style={{ height: "100px" }}
                size="large"
                placeholder="Type something if you want to connect..."
              />
            </Form.Item>
            <Button icon={<FiSend />} type="primary" size="larges">
              Send Message
            </Button>
          </Form>
        </Flex>
      </motion.div>
    </>
  );
};

export default Contact;
