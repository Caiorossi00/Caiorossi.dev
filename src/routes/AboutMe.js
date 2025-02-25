import React from "react";
import Intro from "../components/Intro";
import Education from "../components/AboutMe/Education";
import Experiences from "../components/AboutMe/Experiences";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import "../assets/scss/AboutMe.scss";

const AboutMe = () => {
  return (
    <div id="AboutMe">
      <Intro />
      <Education />
      <Experiences />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default AboutMe;
