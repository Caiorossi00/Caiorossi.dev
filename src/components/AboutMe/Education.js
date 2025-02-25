import React, { useState } from "react";
import educations from "../../assets/data/education";
import "../../assets/scss/Education.scss";

function Education() {
  const [activeTab, setActiveTab] = useState("faculdades");

  return (
    <div className="education-container">
      <h2>Formação</h2>
      <div className="tabs">
        {Object.keys(educations).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="education-list">
        {educations[activeTab].map((exp) => (
          <div key={exp.id} className="education-item">
            {exp.image && (
              <img
                src={exp.image}
                alt={exp.title}
                className="education-image"
              />
            )}
            <div>
              <div className="education-title-and-period">
                <h3>{exp.title}</h3>
                <small>{exp.period}</small>
              </div>
              <p className="institution">{exp.institution}</p>
              {exp.description && (
                <p className="description">{exp.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
