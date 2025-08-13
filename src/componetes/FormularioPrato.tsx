import React, { useState } from "react";
import "../estilos/FormularioPrato.css";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


const FormularioPrato: React.FC = () => {
  const [prato, setPrato] = useState({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "", 
    valor: 0,
  });

  async function requestPost() {
    console.log("Dados do prato:", prato);
    const request = await api.post("/pratos", {
      nome: prato.nome,
      cozinha: prato.cozinha,
      valor: prato.valor,
      imagem: prato.imagem,
      descricao_resumida: prato.descricao_resumida,
      descricao_detalhada: prato.descricao_detalhada,
    });
    const data = request.data;
    setPrato({
      nome: "",
      cozinha: "",
      descricao_resumida: "",
      descricao_detalhada: "",
      imagem: "",
      valor: 0,
    });
  }

  const navigate = useNavigate();


  return (
    <div className="form-container">
      <h1>Cadastro de Pratos</h1>
      <p>Bem-vindo ao sistema de cadastro de pratos!</p>

      <input
        type="text"
        name="nome"
        placeholder="Digite o nome do prato"
        value={prato.nome}
        onChange={(e) => setPrato({ ...prato, nome: e.target.value })}
      />

      <input
        type="text"
        name="cozinha"
        placeholder="Digite o tipo de cozinha do prato"
        value={prato.cozinha}
        onChange={(e) => setPrato({ ...prato, cozinha: e.target.value })}
      />

      <input
        type="text"
        name="descricao_resumida"
        placeholder="Digite a descrição resumida do prato"
        value={prato.descricao_resumida}
        onChange={(e) =>
          setPrato({ ...prato, descricao_resumida: e.target.value })
        }
      />

      <input
        type="text"
        name="descricao_detalhada"
        placeholder="Digite a descrição detalhada do prato"
        value={prato.descricao_detalhada}
        onChange={(e) =>
          setPrato({ ...prato, descricao_detalhada: e.target.value })
        }
      />
      <input
        type="text"
        name="imagem"
        placeholder="Digite a URL da imagem do prato"
        value={prato.imagem}
        onChange={(e) =>
          setPrato({ ...prato, imagem: e.target.value })
        }
      />

      <input
        type="text"
        name="valor"
        placeholder="Digite o valor do prato"
        value={prato.valor}
        onChange={(e) => setPrato({ ...prato, valor: parseFloat(e.target.value) || 0 })}
      />

      <button type="button" onClick={async () => { 
        await requestPost(); 
        navigate("/"); 
      }}>
        Cadastrar Prato
      </button>
    </div>
  );
};

export default FormularioPrato;
