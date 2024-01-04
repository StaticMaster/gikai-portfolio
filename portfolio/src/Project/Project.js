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
          <div className="video-section">
          <video autoPlay loop muted className="video-preview">
            <source src={tivid} type="video/mp4"></source>
          </video>
          </div>
          <div className="info-section">
            <p className="info-text">
              Co-founded and spearheaded the development of 'LegendOfTi,' a
              bespoke portfolio website designed to showcase an individual
              creator's work, amplify their social media footprint, and offer
              direct links to sponsors and partners. Conceptualized and crafted
              a tailored platform, integrating social media feeds, and
              highlighting collaborations for a personalized online presence.
            </p>
            <p className="technology-text">
              Technologies Used: HTML, CSS, JavaScript, React, GetBootstrap
            </p>
          </div>
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
          <div className="video-section">
          <video autoPlay loop muted className="video-preview">
            <source src={motivateme} type="video/mp4"></source>
          </video>
          </div>
          <div className="info-section">
            <p className="info-text">
              Developed a web application called MotivateMe to track a student's
              assignments, exams, and quizzes. Application stored data in a
              Postgres database, packaged in a Docker container, and deployed
              via Heroku. Incorporated a cross posting to Twitter and Instagram.
            </p>
            <p className="technology-text">
              Technologies Used: HTML, CSS, JavaScript, React, Chakra-UI,
              GetBootstrap, React-Icons{" "}
            </p>
          </div>
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
          <div className="video-section">
            <video autoPlay loop muted className="video-preview">
              <source src={owlsgaming} type="video/mp4"></source>
            </video>
          </div>
          <div className="info-section">
            <p className="info-text">
              Designed and developed a dynamic esports team website to showcase
              achievements and enhance our gaming community presence. Created
              dedicated sections for each game, offering performance details and
              schedules, while ensuring user-friendly navigation and mobile
              responsiveness for optimal accessibility.
            </p>
            <p className="technology-text">
              Technologies Used: HTML, CSS, JavaScript, React
            </p>
          </div>
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
          <div className="video-section">
          <img
            src={ridemate}
            alt="ridemate-screenshot"
            className="video-preview"
          />
          </div>
          <div className="info-section">
            <p className="info-text">
              Co-founded 'Ridemate,' a web-based ride-sharing platform for
              college students, serving as Scrum Master and leading development
              teams. Personalized the user experience, implemented key features,
              and maintained high standards through code reviews and quality
              assurance.
            </p>
            <p className="technology-text">
              Technologies Used: HTML, CSS, JavaScript, React, Firebase, Mapbox
            </p>
          </div>
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
