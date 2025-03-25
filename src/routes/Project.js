import React, { useState } from "react";
import "../assets/scss/Project.scss";
import ProjectNavbar from "../components/Project/ProjectNavbar";

const projectData = {
  name: "Nome Projeto",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  technicalDetails: [
    { label: "Client", value: "Caio Rossi" },
    { label: "Ano", value: "2024" },
    { label: "Categoria", value: "Landing Page" },
    {
      label: "Tecnologias",
      value: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Sass", icon: "devicon-sass-original colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      ],
    },
  ],
  starDetails: [
    {
      title: "Situação",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1554668048-5055c5654bbc?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554668048-5055c5654bbc?q=80&w=2070&auto=format&fit=crop",
  ],
};

const Project = ({ setActivePage }) => {
  const [isStarExpanded, setIsStarExpanded] = useState(false);
  const toggleStarExpansion = () => setIsStarExpanded(!isStarExpanded);

  return (
    <div id="project-details">
      <ProjectNavbar setActivePage={setActivePage} />
      <div className="project-details">
        <h1>{projectData.name}</h1>

        <div className="container-infos-project">
          <div className="description">
            <h4>Description</h4>
            <p>{projectData.description}</p>
          </div>

          <div className="technical-details">
            {projectData.technicalDetails.map((detail, index) => (
              <div key={index}>
                <h5>{detail.label}</h5>
                <p className="p-details">
                  {Array.isArray(detail.value) ? (
                    <div className="icons-project-details">
                      {detail.value.map((tech, i) => (
                        <i key={i} className={tech.icon}></i>
                      ))}
                    </div>
                  ) : (
                    detail.value
                  )}
                </p>
              </div>
            ))}

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
                  {projectData.starDetails.map((detail, index) => (
                    <div key={index}>
                      <h6>{detail.title}:</h6>
                      <p className="star-text">{detail.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container-pics-project">
          <h1>Imagens</h1>
          <div className="first-row-project">
            {projectData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagem ${index + 1}`}
                className={index === 0 ? "first-img" : "second-img"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
