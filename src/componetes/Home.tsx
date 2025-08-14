import React, { useContext, useEffect, useState } from "react";
import "../estilos/Home.css";
import CardNovoPrato from "./CardNovoPrato";
import api from "../api/api"

import CardPrato from "./CardPrato";
import { AuthContext } from "../context/authContext";

function Home() {

  const [ pratos, setpratos ] = useState(
    [
      {
        "id": 0,
        "nome": "",
        "cozinha": "",
        "descricao_detalhada": "",
        "descricao_resumida": "",
        "imagem": "",
        "valor": 0
      }
    ]
  )

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext não está disponível");
  }

  const { usuario } = authContext;

  useEffect(
    () => {

      async function requestData() {
        const request = await api.get('/pratos')
        const data = request.data
        console.log(data)
        setpratos(data)
      }
      
      requestData()
    }, [pratos]
    
  )

  return (
    <div className="home">
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <CardNovoPrato />
        {pratos.length &&
          pratos.map((pratos, index) => (
            <CardPrato
              key={index}
              id={pratos.id}
              usuario={usuario}
              nome={pratos.nome}
              cozinha={pratos.cozinha}
              imagem={pratos.imagem}
              descricao_resumida={pratos.descricao_resumida}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;