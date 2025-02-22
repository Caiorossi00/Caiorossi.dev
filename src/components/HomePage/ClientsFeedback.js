import React from "react";
import "../../assets/scss/ClientsFeedback.scss";

const ClientsFeedback = () => {
  return (
    <div className="clientsFeedback">
      <h1>Palavras gentis dos meus clientes</h1>

      <div className="container-clientsFeedback">
        <div className="feedback-item">
          <div className="CF-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="feedback-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="CF-data">
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Client"
            />

            <div>
              <h1>Cayo Roberto</h1>
              <p className="CF-projectName">Tropicana Laços</p>
            </div>
          </div>
        </div>
        <div className="feedback-item">
          <div className="CF-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="feedback-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="CF-data">
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Client"
            />

            <div>
              <h1>Cayo Roberto</h1>
              <p className="CF-projectName">Tropicana Laços</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
