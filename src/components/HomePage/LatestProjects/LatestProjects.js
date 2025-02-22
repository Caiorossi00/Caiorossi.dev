import React from "react";
import "../../../assets/scss/LatestProjects.scss";

const LatestProjects = () => {
  return (
    <div className="LatestProjects">
      <h1>Projetos Recentes</h1>

      <div className="container-latestProjects">
        <div className="latestProject-item">
          <img
            src="https://images.unsplash.com/photo-1579792773782-79ddd1c4e6c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8"
            alt="Project"
          />
          <p>Web Design</p>
          <div className="LP-item-goto">
            <h1 className="LP-project-name">Nome do Projeto</h1>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <p className="LP-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="latestProject-item">
          <img
            src="https://images.unsplash.com/photo-1579792773782-79ddd1c4e6c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8"
            alt="Project"
          />
          <p>Web Design</p>
          <div className="LP-item-goto">
            <h1 className="LP-project-name">Nome do Projeto</h1>
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <p className="LP-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <button className="LP-seeMore">
        Mais Projetos <i class="fa-regular fa-eye"></i>
      </button>
    </div>
  );
};

export default LatestProjects;
