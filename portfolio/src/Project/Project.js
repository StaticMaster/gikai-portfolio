import React from "react";
import "./Project.css";
import tivid from "../videos/ti-website.mp4";

function Project() {
  return (
    <div id="projects">
      <h2 className="project-heading">Projects</h2>
      <div className="project-grid">
        <div className="project-section">
          <p className="project-title">Legend of Ti Portfolio</p>
          <video autoPlay loop muted className="video-preview">
            <source src={tivid} type="video/mp4"></source>
          </video>
          <a
            href="https://github.com/StaticMaster/LOT-web"
            className="github-links"
          >
            <button className="github-button">Github</button>
          </a>
        </div>
        <div className="project-section">
          <p className="project-title">MotivateMe</p>
          <video autoPlay loop muted className="video-preview">
            <source src={tivid} type="video/mp4"></source>
          </video>
          <div className="buttons">
            <a href="https://github.com/StaticMaster/LOT-web">
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
            <source src={tivid} type="video/mp4"></source>
          </video>
          <a
            href="https://github.com/StaticMaster/owlsgaming-web"
            className="github-links"
          >
            <button className="github-button">Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
