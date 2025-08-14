import React from "react";
import pratoImg from "../assets/imagem_adicionar_prato.jpg"
import { Link } from "react-router-dom";
import "../estilos/CardNovoPrato.css"

const CadNovoPrato = () => {
    return (
        <Link to="/cadastro-prato" className="prato-card">

            <div className="card-adicionar">
              <button className="botao-adicionar">
                <img src={pratoImg} alt="" />
                <p className="texto">Adicionar</p>
              </button>
            </div>
        </Link>
    );
}

export default CadNovoPrato;