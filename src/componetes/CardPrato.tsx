import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/CardPrato.css";
import api from "../api/api";
import { AuthContext } from "../context/authContext";

interface CardPratoProps {
  nome: String;
  cozinha: String;
  descricao: String;
  foto?: any;
  id: number;
}

const CardPrato: React.FC<CardPratoProps> = ({
  nome,
  cozinha,
  descricao,
  foto,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  async function deleteData() {
    await api.delete(`/pratos/${id}`);
  }

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("Erro: AuthContext não está definido.");
  }

  const { usuario, verificarLogin } = authContext;

  return (
    <div className="prato-card">
      {usuario?.role === "Gerente" && (
        <div className="options">
          <button className="open" onClick={toggleVisibility}> ... </button>
          {isVisible && (
            <div className="optionbar">
              <Link to={`/detalhes-prato/${id}`}>
                <button className="option">Detalhes</button>
              </Link>
              <button className="option" onClick={deleteData}>
                Remover
              </button>
              <Link to={`/editar-prato/${id}`}>
                <button className="option">Editar</button>
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="foto-prato">
        <img src={foto} alt=" " />
      </div>
      <h2 className="nome-prato">{nome}</h2>
      <p className="cozinha-prato">{cozinha}</p>
      <p className="descricao-curta-prato">{descricao}</p>
      <Link to={`/detalhes-prato/${id}`} className="prato-card">
        Ver Detalhes
      </Link>
    </div>
  );
};

export default CardPrato;