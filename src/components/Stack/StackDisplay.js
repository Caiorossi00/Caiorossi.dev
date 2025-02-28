import React, { useState } from "react";
import stackItens from "../../assets/data/stack";
import "../../assets/scss/stackDisplay.scss";

const categories = ["Frontend", "Backend", "Design", "Ferramentas"];

const StackDisplay = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="stack-container">
      {/* Abas de categoria */}
      <div className="stack-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Itens filtrados pela categoria ativa */}
      <div className="stack-items">
        {stackItens
          .filter((item) => item.category === activeCategory)
          .map((item) => (
            <div key={item.id} className="stack-item">
              <div className="stack-icon-and-name">
                <i className={item.icon}></i>
                <h3>{item.name}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StackDisplay;
