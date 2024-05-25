import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <>
      {/* <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2> */}
      <PageTitle PageTitle="Educational Details" />
      <motion.div
        className=" education "
        id="education"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <hr />

        <VerticalTimeline color="green">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F1E5D1", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid #987070" }}
            date="08/2022 - 01/2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              React Js Frontend Development Course
            </h3>
            &nbsp;
            <h4 className="vertical-timeline-element-subtitle">
              Ejobindia Trainning Institute
            </h4>
            &nbsp;
            <h6> Sector V, Bidhannagar, Kolkata, West Bengal 700091</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#DBB5B5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #987070" }}
            date="2018 - 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Supreme Knowledge Foundation Group Of Institutions
            </h4>
            &nbsp;
            <h6>Mankundu, Chandannagar, West Bengal 712139</h6>
            <p>Computer Science And Engineering</p>
            <p>CGPA : 8.49</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F1E5D1", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #987070" }}
            date="2016 - 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bagati Ramgopal Ghosh High School
            </h4>
            &nbsp;
            <h6>Bagati Kantapukur Rd Mogra,West Bengal 712148</h6>
            <p>Pure Science</p>
            <p>Grade : 68.2 %</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#DBB5B5", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #987070" }}
            date="2014 - 2015"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary Education
            </h3>
            &nbsp;
            <h4 className="vertical-timeline-element-subtitle">
              Digsui Sadhana Banga Vidyalaya
            </h4>
            <h6>, Digsui, West Bengal 712148</h6>
            <p>Grade : 73.71 %</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Education;
