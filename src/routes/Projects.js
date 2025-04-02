import React from "react";
import ".././assets/scss/Projects.scss";
import projectData from "../assets/data/projectData";

const Projects = () => {
  return (
    <div id="Projects">
      <h1>Some of my work</h1>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.images[0]}
              alt={project.name}
              className="project-img"
            />

            <div className="project-info">
              <div className="project-details">
                <p>
                  {
                    project.technicalDetails.find(
                      (detail) => detail.label === "Categoria"
                    )?.value
                  }
                </p>
                <h2>{project.name}</h2>
              </div>

              <div>
                <i class="fa-solid fa-right-from-bracket"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
