import React from "react";
import "./Project.css";
import tivid from "../videos/ti-website.mp4";
import motivateme from "../videos/motivateme.mp4";
import owlsgaming from "../videos/owlsgamingclub.mp4";
import ridemate from "../images/ridemate.png";
import { useDarkMode } from "../DarkModeContext";

function Project() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`project-container ${isDarkMode ? "dark-mode" : ""}`}
      id="projects"
    >
      {" "}
      <h2 className="project-heading">Projects</h2>
      <div className="project-grid">
        <div className="project-section">
          <p className="project-title">Legend of Ti Portfolio</p>
          <video autoPlay loop muted className="video-preview">
            <source src={tivid} type="video/mp4"></source>
          </video>
          <div className="buttons">
            <a
              href="https://github.com/StaticMaster/LOT-web"
              className="github-links"
            >
              <button className="github-button">Github</button>
            </a>
          </div>
        </div>
        <div className="project-section">
          <p className="project-title">MotivateMe</p>
          <video autoPlay loop muted className="video-preview">
            <source src={motivateme} type="video/mp4"></source>
          </video>
          <div className="buttons">
            <a href="https://github.com/Course-Hero-3/MotivateMe">
              <button className="github-button">Github</button>
            </a>
            <a href="https://motivateme-v8.surge.sh/">
              <button className="github-button">Website</button>
            </a>
          </div>
        </div>
        <div className="project-section">
          <p className="project-title">Owls Gaming Club Website</p>
          <video autoPlay loop muted className="video-preview">
            <source src={owlsgaming} type="video/mp4"></source>
          </video>
          <div className="buttons">
            <a
              href="https://github.com/StaticMaster/owlsgaming-web"
              className="github-links"
            >
              <button className="github-button">Github</button>
            </a>
          </div>
        </div>
        <div className="project-section">
          <p className="project-title">Ridemate - Rideshare App</p>
          <img
            src={ridemate}
            alt="ridemate-screenshot"
            className="video-preview"
          />
          {/* <video autoPlay loop muted className="video-preview">
            <source src={ridemate} type="video/mp4"></source>
          </video> */}
          <div className="buttons">
            <a
              href="https://github.com/StaticMaster/ridemate-main"
              className="github-links"
            >
              <button className="github-button">Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
