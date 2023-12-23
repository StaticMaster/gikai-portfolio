import React, { useState } from "react";
import "./NavMenu.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* <div className="logo">Your Logo</div> */}
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home" className="navbar-title">Home</a>
        <a href="#about" className="navbar-title">Projects</a>
        <a href="#services" className="navbar-title">Skills</a>
        {/* <a href="#services" className="navbar-title">About Me</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
