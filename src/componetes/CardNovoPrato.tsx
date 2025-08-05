import React, { useContext } from "react";
import adicionarPrato from "../assets/imagem_adicionar_prato.jpg";
import { Link } from "react-router-dom";
import "../estilos/CardNovoPrato.css";
import { AuthContext } from "../context/authContext";

const CardNovoPrato = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext não está disponível");
  }

  const { usuario, verificarLogin } = authContext;

  return (
    <div>
    { usuario?.role === "Gerente" && (
    <Link to="/cadastro-prato" className="link-card">
        <div className="prato-card">
          <img src={adicionarPrato} alt="Imagem do prato" />
          <h2>Clique aqui para adicionar um novo prato</h2>
        </div>
      </Link>
    )}
      </div>
  );
};

export default CardNovoPrato;
