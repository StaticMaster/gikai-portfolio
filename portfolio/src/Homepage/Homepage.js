import React from "react";
import "./Homepage.css";
import kai from "../images/main-pfp.jpg";
import Typewriter from "typewriter-effect";
import { useDarkMode } from "../DarkModeContext";
import {SocialIcon} from 'react-social-icons'

function Homepage() {
  const { isDarkMode } = useDarkMode();
  // const Homepage = ({ isDarkMode }) => {
  //   const handleDownload = () => {
  //     const documentUrl = '../images/G.A-Resume.pdf';
  
  //     const link = document.createElement('a');
  //     link.href = documentUrl;
  
  //     link.download = 'G.A Resume';
  
  //     document.body.appendChild(link);
  //     link.click();
  
  //     document.body.removeChild(link);
  //   };
  return (
    <div
      className={`homepage-section ${isDarkMode ? "dark-mode" : ""}`}
      id="home"
    >
      <div className="header-section">
        <img src={kai} alt="kai-pfp" className="pfp"></img>
        <h2 className="name-title">Hi, I'm Gikai</h2>{" "}
        <Typewriter
          options={{
            strings: ["Aspiring Front-End Developer", "College Student"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 500,
          }}
        />
        <div className="social-icon-section">
          <SocialIcon url="https://www.linkedin.com/in/gikai-andrews-8331581ab/" bgColor="grey"  className="linkedin-icon"/>
          <SocialIcon url="https://github.com/StaticMaster" className="github-icon" bgColor="grey"/>
        </div>
        <div className="download-button-section">
          <a href="../videos/G.A-Resume.pdf" download="G.A Resume">
            <button className="download-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}


export default Homepage;
