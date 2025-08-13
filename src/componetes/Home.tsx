import React, { useContext, useEffect, useState } from "react";
import "../estilos/Home.css";
import CardNovoPrato from "../componetes/CardNovoPrato";
import API from "../api/api"
import userNoneImage from "../assets/user-none-image.png";

import CardPrato from "./CardPrato";
import { AuthContext, AuthProvider } from "../context/authContext";
import UserArea from "./UserArea";

function Home() {

  const [ pratos, setpratos ] = useState(
    [
      {
        "id": 0,
        "nome": "",
        "cozinha": "",
        "descricao_resumida": "",
        "valor": 0
      }
    ]
  )

  useEffect(
    () => {
      async function requestData() {
        const request = await API.get('/pratos')
        const data = request.data
        setpratos(data)
      }
      
      requestData()
    }, []
    
  )

  return (
    <div className="home">
      <AuthProvider>
        <UserArea />
      </AuthProvider>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <CadNovoPrato />
        <AuthProvider>
          {pratos.length &&
            pratos.map((pratos, index) => (
              <CardPrato
                key={index}
                id={pratos.id}
                nome={pratos.nome}
                cozinha={pratos.cozinha}
                descricao={pratos.descricao_resumida}
              />
          ))}
        </AuthProvider>
      </div>
    </div>
  );
}

export default Home;