import React, { FC, useContext } from "react";
import "../estilos/CardPrato.css";
import { AuthContext } from "../context/authContext";

interface CardPratoProps {
  nome: string;
  cozinha: string;
  descricaoCurta: string;
  imagem: string;
  
}

const CardPrato: FC<CardPratoProps> = (props) => {
  const authContext = useContext(AuthContext); 

  if (!authContext) {
    throw new Error("AuthContext não está disponível");
  }

  const { usuario, verificarLogin } = authContext;

  return (
    <div className="prato-card">
      {usuario?.role === "Gerente" && (
        <div className="menu-container">
          <button className="menu-button" onClick={() => {}}>
            &#x22EE;
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">
              Editar
            </a>
            <a href="#" className="dropdown-item">
              Deletar
            </a>
            <a href="#" className="dropdown-item">
              Ver Detalhes
            </a>
          </div>
        </div>
      )}
      <img src={props.imagem} alt="Feijoada brasileira" />
      <h2 className="nome-prato">{props.nome}</h2>
      <p className="cozinha-prato">{props.cozinha}</p>
      <p className="descricao-curta-prato">{props.descricaoCurta}</p>
      <a href="#" className="btn">
        Ver Detalhes
      </a>
    </div>
  );
};

export default CardPrato;
