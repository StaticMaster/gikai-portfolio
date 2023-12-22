import React from "react";
import "./Homepage.css";
import kai from "../images/main-pfp.jpg";
import Typewriter from 'typewriter-effect';

function Homepage() {
  return (
    <div className="homepage-section">
      <div className="header-section">
        <img src={kai} alt="kai-pfp" className="pfp"></img>
        <h2 className="name-title">Hi, I'm Gikai</h2>{" "}
        <Typewriter
                    options={{
                      strings: ["Aspiring Front-End Developer", "College Student",],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 500,
                    }}
                  />
        {/* <h2 className="heading">
          {" "}
          I am an aspiring Front-End Developer and College Student
        </h2> */}
      </div>
    </div>
  );
}

export default Homepage;
