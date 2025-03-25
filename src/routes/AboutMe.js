import React from "react";
import Intro from "../components/Intro";
import Education from "../components/AboutMe/Education";
import Experiences from "../components/AboutMe/Experiences";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import "../assets/scss/AboutMe.scss";
import DetailsAboutMe from "../components/AboutMe/DetailsAboutMe";

const AboutMe = () => {
  return (
    <div id="AboutMe">
      <Intro />
      <DetailsAboutMe />
      <Education />
      <Experiences />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default AboutMe;
