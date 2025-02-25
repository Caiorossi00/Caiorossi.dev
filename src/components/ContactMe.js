import React from "react";
import "../assets/scss/ContactMe.scss";

const ContactMe = () => {
  return (
    <div className="contactMe">
      <h1>Entre em contato</h1>
      <div className="contactMeBtns">
        <a
          href="https://www.instagram.com/caiorossi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="CM-instagram"
        >
          <p>Instagram</p>
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/5553984158694"
          target="_blank"
          rel="noopener noreferrer"
          className="CM-whatsapp"
        >
          <p>Whatsapp</p>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
