import React, { useEffect } from "react";
import "../assets/css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);

  return (
    <div className="container-home">
      <div className="inner-home" data-aos="fade-down">
        <div className="left-home" data-aos="fade-right">
          <div className="text-left-home">
            <h1>Caio Rossi</h1>
            <p>Web developer, Designer</p>
          </div>
        </div>
        <div className="right-home" data-aos="fade-left">
          <ul>
            <hr />
            <li data-aos="fade-up">Sobre mim</li>
            <hr />
            <li data-aos="fade-up">Portfolio</li>
            <hr />
            <li data-aos="fade-up">Habilidades</li>
            <hr />
            <li data-aos="fade-up">Estudo e certificações</li>
            <hr />
            <li data-aos="fade-up">Minha vida fora do trabalho</li>
            <hr />
            <li data-aos="fade-up">Contatos</li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
