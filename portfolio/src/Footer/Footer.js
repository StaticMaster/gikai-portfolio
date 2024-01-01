import React from "react";
import "./Footer.css";
import { useDarkMode } from "../DarkModeContext";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`footer-section ${isDarkMode ? "dark-mode" : ""}`}>
      <p className="footer-text">© made by Gikai Andrews</p>
      <div className="footer-socials">
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
    </div>
  );
}

export default Footer;
