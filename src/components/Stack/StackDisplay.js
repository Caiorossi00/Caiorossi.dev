import React, { useState } from "react";
import stackItens from "../../assets/data/stack";
import "../../assets/scss/stackDisplay.scss";

const categories = ["Frontend", "Backend", "Design", "Ferramentas"];

const levelToStars = (level) => {
  const stars = {
    Avançado: "★★★★★",
    Intermediário: "★★★☆☆",
    Iniciante: "★★☆☆☆",
  };
  return stars[level] || "☆☆☆☆☆";
};

const StackDisplay = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div className="stack-container">
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

      <div className="stack-items">
        {stackItens
          .filter((item) => item.category === activeCategory)
          .map((item) => (
            <div key={item.id} className="stack-item">
              <div className="item-left-itens">
                <i className={item.icon}></i>
                <div className="stack-icon-and-description">
                  <h3>{item.name}</h3> <p>{item.description}</p>
                </div>
              </div>
              <div className="stack-stars">{levelToStars(item.level)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StackDisplay;
