import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/scss/sidebar.scss";

const Sidebar = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActivePage(tab);
  };

  return (
    <aside id="sidebar">
      <div className="sidebar-profile">
        <a
          href="https://www.instagram.com/caiorossi.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logo} alt="Caio Rossi" />
        </a>
        <a href="https://wa.me/5553984158694" target="_blank" rel="noreferrer">
          <button>
            <span>•</span>Disponível Agora
          </button>
        </a>
      </div>

      <ul className="sidebar-menu">
        <button
          className={`sidebar-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleTabClick("home")}
        >
          <i className="fa-solid fa-house"></i> Home
        </button>
        <button
          className={`sidebar-item ${activeTab === "about" ? "active" : ""}`}
          onClick={() => handleTabClick("about")}
        >
          <i className="fa-solid fa-circle-user"></i> Sobre Mim
        </button>
        <button
          className={`sidebar-item ${activeTab === "project" ? "active" : ""}`}
          onClick={() => handleTabClick("project")}
        >
          <i className="fa-solid fa-briefcase"></i> Projetos
        </button>
        <button
          className={`sidebar-item ${activeTab === "stack" ? "active" : ""}`}
          onClick={() => handleTabClick("stack")}
        >
          <i className="fa-solid fa-layer-group"></i> Stack
        </button>
        <button
          className={`sidebar-item ${activeTab === "contact" ? "active" : ""}`}
          onClick={() => handleTabClick("contact")}
        >
          <i className="fa-solid fa-address-card"></i> Contato
        </button>
      </ul>

      <div className="sidebar-icons">
        <a
          href="https://www.instagram.com/caiorossi.dev"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/caio-rossi-dev"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/caiorossi00"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
