import React from "react";
import "../../assets/scss/ProjectNavbar.scss";

const ProjectNavbar = ({ setActivePage }) => {
  return (
    <nav className="navbar">
      <div>
        <h1>Logo</h1>
      </div>
      <ul>
        <li>
          <button onClick={() => setActivePage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setActivePage("about")}>About Me</button>
        </li>
        <li>
          <button onClick={() => setActivePage("stack")}>Stack</button>
        </li>
        <li>
          <button onClick={() => setActivePage("project")}>Project</button>
        </li>
        <li>
          <button onClick={() => setActivePage("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectNavbar;
