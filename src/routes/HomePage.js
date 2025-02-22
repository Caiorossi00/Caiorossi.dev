import React from "react";
import Intro from "../components/HomePage/Intro";
import LatestProjects from "../components/HomePage/LatestProjects";
import "../assets/scss/HomePage.scss";
import ClientsFeedback from "../components/HomePage/ClientsFeedback";
import ContactMe from "../components/HomePage/ContactMe";
import Footer from "../components/Footer";

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
