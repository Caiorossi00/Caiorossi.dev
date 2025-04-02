import React from "react";
import "../../assets/scss/ProjectNavbar.scss";
import logo from "../../assets/images/logo.png";

const ProjectNavbar = ({ setActivePage }) => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
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
          <button onClick={() => setActivePage("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => setActivePage("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default ProjectNavbar;
