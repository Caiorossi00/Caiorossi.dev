import React from "react";
import Intro from "../components/HomePage/Intro";
import LatestProjects from "../components/HomePage/LatestProjects";
import "../assets/scss/HomePage.scss";

const HomePage = () => {
  return (
    <div id="HomePage">
      <Intro />
      <LatestProjects />
    </div>
  );
};

export default HomePage;
