import React from "react";
import "../../assets/scss/intro.scss";

const Intro = () => {
  return (
    <div id="intro-homepage">
      <h1>Olá, me chamo Caio Rossi.</h1>
      <p>
        A passionate web designer with a knack for turning ideas into visually
        stunning, user-friendly websites.
      </p>

      <div className="location">
        <i class="fa-solid fa-location-dot"></i>
        <p>Jaguarão, RS, Brasil.</p>
      </div>
    </div>
  );
};

export default Intro;
