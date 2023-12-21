import React from "react";
import "./Homepage.css";
import kai from "../images/main-pfp.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";

function Homepage() {
  return (
    <div className="homepage-section">
      <div className="header-section">
        <h3 className="text-center">Hi, I'm Gikai</h3>
        <h2 className="text-center heading">
          {" "}
          I am an aspiring Front-End Developer and College Student
        </h2>
        {/* <img src={kai} alt="kai-pfp" className="pfp img-fluid float-end"></img> */}
      </div>
    </div>
  );
}

export default Homepage;
