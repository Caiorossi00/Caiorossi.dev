import experiences from "../../assets/data/experiences";
import "../../assets/scss/Experiences.scss";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experiências</h2>

      <div className="experience-content">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <img src={exp.image} alt={exp.title} className="experience-image" />
            <div>
              <div className="experience-title-and-period">
                <h3>{exp.title}</h3>
                <small>{exp.period}</small>
              </div>
              <p className="role">{exp.role}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
