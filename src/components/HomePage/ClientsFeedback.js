import React from "react";
import "../../assets/scss/ClientsFeedback.scss";
import cayoRoberto from "../../assets/images/cayoRoberto.jpeg";
import luanaMelo from "../../assets/images/luanaMelo.jpeg";

const feedbacks = [
  {
    name: "Cayo Roberto",
    project: "Tropicana Laços",
    feedback:
      "Fiquei extremamente satisfeito com o trabalho! A entrega superou minhas expectativas tanto no prazo quanto na qualidade final. O profissional soube ouvir exatamente o que eu precisava e transformou minha ideia em realidade. O site desenvolvido atendeu perfeitamente à necessidade dos meus clientes, proporcionando um acesso rápido e prático ao catálogo de produtos, o que me destacou da concorrência que ainda depende muito do WhatsApp para vendas. Além disso, trouxe mais segurança para meus clientes. Com certeza, recomendo! Profissional dedicado, pontual e que entrega um resultado excelente.",
    image: cayoRoberto,
  },
  {
    name: "Luana Melo",
    project: "Nails",
    feedback:
      "Trabalhar com você foi uma experiência excelente! Sua rapidez, prestatividade e disponibilidade para esclarecer dúvidas fizeram toda a diferença no processo. A entrega ágil me permitiu testar tudo com calma antes de finalizar a documentação do meu projeto. O site foi essencial para a entrega da minha faculdade e também contribuiu para expandir minha visão sobre a área da tecnologia. Sem dúvidas, recomendo seus serviços! O trabalho foi de altíssima qualidade, entregue no prazo e com um suporte impecável.",
    image: luanaMelo,
  },
];

const ClientsFeedback = () => {
  return (
    <div className="clientsFeedback">
      <h1>Palavras gentis dos meus clientes</h1>

      <div className="container-clientsFeedback">
        {feedbacks.map((client, index) => (
          <div key={index} className="feedback-item">
            <div className="CF-stars">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="feedback-text">{client.feedback}</p>

            <div className="CF-data">
              <img src={client.image} alt={client.name} />
              <div>
                <h1>{client.name}</h1>
                <p className="CF-projectName">{client.project}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsFeedback;
