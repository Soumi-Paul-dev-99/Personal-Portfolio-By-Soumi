import React from "react";
import { Flex } from "antd";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Main from "./Components/Main/Main";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
function App() {
  return (
    <Flex gap={20} className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<About />} />
          <Route path="/projects" element={<h1>{<Project />}</h1>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>

      <ProfileCard />
    </Flex>
  );
}

export default App;
