import React from "react";
import "./Footer.css";
import { useDarkMode } from "../DarkModeContext";

function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`footer-section ${isDarkMode ? "dark-mode" : ""}`}>
      <p className="footer-text">© made by Gikai Andrews</p>
    </div>
  );
}

export default Footer;
