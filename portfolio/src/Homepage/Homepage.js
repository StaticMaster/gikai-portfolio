import React from "react";
import "./Homepage.css";
import kai from "../images/main-pfp.jpg";
import Typewriter from "typewriter-effect";

function Homepage() {
  return (
    <div className="homepage-section" id="home">
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
