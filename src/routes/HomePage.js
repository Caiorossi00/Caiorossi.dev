import React from "react";
import Intro from "../components/Intro";
import LatestProjects from "../components/HomePage/LatestProjects";
import ClientsFeedback from "../components/HomePage/ClientsFeedback";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import "../assets/scss/HomePage.scss";

const HomePage = () => {
  return (
    <div id="HomePage">
      <Intro />
      <LatestProjects />
      <ClientsFeedback />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default HomePage;
