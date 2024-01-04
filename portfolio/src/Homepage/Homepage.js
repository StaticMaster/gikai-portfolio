import React from "react";
import "./Homepage.css";
import kai from "../images/main-pfp.jpg";
import Typewriter from "typewriter-effect";
import { useDarkMode } from "../DarkModeContext";
import { SocialIcon } from "react-social-icons";

const Homepage = () => {
  const { isDarkMode } = useDarkMode();

  const onButtonClick = () => {
    const pdfUrl = "G.A-Resume.pdf"; // Replace with the actual PDF URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Gikai Andrews Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          <SocialIcon
            url="https://www.linkedin.com/in/gikai-andrews-8331581ab/"
            bgColor="grey"
            className="linkedin-icon"
          />
          <SocialIcon
            url="https://github.com/StaticMaster"
            className="github-icon"
            bgColor="grey"
          />
        </div>
        <div className="download-button-section">
            <button className="download-button" onClick={onButtonClick}>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
