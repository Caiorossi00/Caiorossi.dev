import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/scss/sidebar.scss";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <aside id="sidebar">
        <div className="sidebar-profile">
          <a
            href="https://www.instagram.com/caiorossi.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="Caio Rossi" />
          </a>
          <a
            href="https://wa.me/5553984158694"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <span>•</span>Disponível Agora
            </button>
          </a>
        </div>
      </aside>

      <ul className="sidebar-menu">
        <div className="sidebar-item">
          <i class="fa-solid fa-house"></i> <p>Home</p>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-circle-user"></i> <p>Sobre Mim</p>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-briefcase"></i> <p>Projetos</p>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-layer-group"></i> <p>Stack</p>
        </div>
        <div className="sidebar-item">
          <i class="fa-solid fa-address-card"></i> <p>Contato</p>
        </div>
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
