import React, { useContext } from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import CardPrato from "./CardPrato";
import CardNovoPrato from "./CardNovoPrato";
import { AuthContext, AuthProvider } from "../context/authContext";

function Home() {
  const [prato, setPrato] = React.useState({
    nome: "Feijoada",
    cozinha: "Brasileira",
    descricaoCurta:
      "Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.",
    imagem:
    "https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=",  
  });


  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <AuthProvider>
          <CardNovoPrato />
        </AuthProvider>
        <AuthProvider>
          <CardPrato
            nome={prato.nome}
            cozinha={prato.cozinha}
            descricaoCurta={prato.descricaoCurta}
            imagem={prato.imagem}
          />
        </AuthProvider >
        <AuthProvider>
          <CardPrato
            nome={prato.nome}
            cozinha={prato.cozinha}
            descricaoCurta={prato.descricaoCurta}
            imagem={prato.imagem}
          />
        </AuthProvider >
        <AuthProvider>
          <CardPrato
            nome={prato.nome}
            cozinha={prato.cozinha}
            descricaoCurta={prato.descricaoCurta}
            imagem={prato.imagem}
          />
        </AuthProvider >
        <AuthProvider>
          <CardPrato
            nome={prato.nome}
            cozinha={prato.cozinha}
            descricaoCurta={prato.descricaoCurta}
            imagem={prato.imagem}
          />
        </AuthProvider >
      </div>
    </div>
  );
}

export default Home;
