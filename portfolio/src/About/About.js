import React from "react";
import "./About.css";
import aboutme from "../images/about-me.jpg";
import { useDarkMode } from "../DarkModeContext";


function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`about-section ${isDarkMode ? "dark-mode" : ""}`}
      id="about"
    >
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <img src={aboutme} alt="about-me-pic" className="about-me-img" />
        <p className="about-text">
          Miami-born coder Gikai discovered his passion for computer science
          through his uncle's mentorship, evolving into a skilled web developer
          during a transformative internship. Beyond coding, Gikai embraces a
          vibrant life with hobbies like video games, photography, and
          longboarding, weaving a dynamic narrative that balances tech prowess
          with a love for diverse experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
