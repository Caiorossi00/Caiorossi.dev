import React from "react";
import Intro from "../components/HomePage/Intro";
import LatestProjects from "../components/HomePage/LatestProjects";
import "../assets/scss/HomePage.scss";
import ClientsFeedback from "../components/HomePage/ClientsFeedback";

const HomePage = () => {
  return (
    <div id="HomePage">
      <Intro />
      <LatestProjects />
      <ClientsFeedback />
    </div>
  );
};

export default HomePage;
