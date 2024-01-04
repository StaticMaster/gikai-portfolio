import React, { useState } from "react";
import "./NavMenu.css";
import { useDarkMode } from "../DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={isDarkMode ? "navbar dark-mode" : "navbar"}>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <div className="navbar-title">
          <a href="#home">Home</a>
        </div>
        <div className="navbar-title"> 
          <a href="#about">About Me</a>
        </div>
        <div className="navbar-title">
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar-title">
         <a href="#skills">Skills</a>
        </div>
        <div className="dark-mode-switch">
      <button
        className={`dark-mode-button ${isDarkMode ? 'dark-mode' : ''}`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
