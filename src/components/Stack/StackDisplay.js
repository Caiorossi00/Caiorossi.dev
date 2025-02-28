import React from "react";
import stackItens from "../../assets/data/stack";
import "../../assets/scss/stackDisplay.scss";

const StackDisplay = () => {
  return (
    <div className="stack-container">
      {stackItens.map((item) => (
        <div key={item.id} className="stack-item">
          <div className="stack-icon-and-name">
            <i className={item.icon}></i>
            <h3>{item.name}</h3>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StackDisplay;
