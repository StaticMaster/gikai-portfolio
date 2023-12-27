import React from "react";
import "./Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { useDarkMode } from "../DarkModeContext";

function Skills() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`skills ${isDarkMode ? "dark-mode" : ""}`} id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-section">
        <FaHtml5 className="skill-icon" />
        <FaCss3Alt className="skill-icon" />
        <IoLogoJavascript className="skill-icon" />
        <FaReact className="skill-icon" />
        <FaBootstrap className="skill-icon" />
        <FaNodeJs className="skill-icon" />
        <SiChakraui className="skill-icon" />
        <FaGithub className="skill-icon" />
        <IoLogoFirebase className="skill-icon" />
      </div>
    </div>
  );
}

export default Skills;
