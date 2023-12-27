import React, { useState } from "react";
import "./NavMenu.css";
// import { FaHouse } from "react-icons/fa6";
// import { GrProjects } from "react-icons/gr";
// import { IoCodeSlashOutline } from "react-icons/io5";
// import { IoMdPerson } from "react-icons/io";
import { useDarkMode } from "../DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {isDarkMode, toggleDarkMode} = useDarkMode();

  return (
    <nav className={isDarkMode ? 'navbar dark-mode': 'navbar'}>
      {/* <input type="checkbox" id="darkmode-toggle" checked={isDarkMode} onChange={toggleDarkMode}/>
      <label htmlFor="darkmode-toggle"></label> */}
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
          {/* <FaHouse className="navbar-icon" /> */}
          <a href="#home">Home</a>
        </div>
        <div className="navbar-title">
          {/* <GrProjects className="navbar-icon" /> */}
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar-title">
          {/* <IoCodeSlashOutline className="navbar-icon" /> */}
          <a href="#skills">Skills</a>
        </div>
        <div className="navbar-title">
          {/* <IoMdPerson className="navbar-icon" /> */}
          <a href="#about">About Me</a>
        </div>
        <input type="checkbox" id="darkmode-toggle" checked={isDarkMode} onChange={toggleDarkMode}/>
      <label htmlFor="darkmode-toggle">Dark Mode</label>
      </div>
    </nav>
  );
};

export default Navbar;
