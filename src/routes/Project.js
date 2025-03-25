import React, { useState } from "react";
import "../assets/scss/Project.scss";
import ProjectNavbar from "../components/Project/ProjectNavbar";

const Project = ({ setActivePage }) => {
  // Recebendo a função
  const [isStarExpanded, setIsStarExpanded] = useState(false);

  const toggleStarExpansion = () => {
    setIsStarExpanded((prevState) => !prevState);
  };

  return (
    <div id="project-details">
      <ProjectNavbar setActivePage={setActivePage} /> {/* Passando a função */}
      <div className="project-details">
        <h1>Nome Projeto</h1>

        <div className="container-infos-project">
          <div className="description">
            <h4>Description</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="technical-details">
            <div>
              <h5>Client</h5>
              <p className="p-details">Caio Rossi</p>
            </div>
            <div>
              <h5>Ano</h5>
              <p className="p-details">2024</p>
            </div>
            <div>
              <h5>Categoria</h5>
              <p className="p-details">Landing Page</p>
            </div>
            <div>
              <h5>Tecnologias</h5>
              <p className="p-details">
                <div className="icons-project-details">
                  <i className="devicon-react-original colored"></i>
                  <i className="devicon-sass-original colored"></i>
                  <i className="devicon-postgresql-plain colored"></i>
                </div>
              </p>
            </div>
            <div className="star-section">
              <h5 className="star-toggle" onClick={toggleStarExpansion}>
                STAR
                <span
                  className={`star-arrow ${isStarExpanded ? "expanded" : ""}`}
                >
                  ▼
                </span>
              </h5>
              {isStarExpanded && (
                <div className="star-details">
                  <h6>Situação</h6>
                  <p className="star-text">Em andamento</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
