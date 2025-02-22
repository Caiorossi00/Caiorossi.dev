import React from "react";
import Intro from "../components/HomePage/Intro";
import "../assets/scss/HomePage.scss";
import LatestProjects from "../components/HomePage/LatestProjects/LatestProjects";

const HomePage = () => {
  return (
    <div id="HomePage">
      <Intro />
      <LatestProjects />
    </div>
  );
};

export default HomePage;
