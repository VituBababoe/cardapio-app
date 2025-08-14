import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../estilos/DetalhesPrato.css";
import api from "../api/api"

interface DetalhesPratoInterface {
    nome?: String,
    cozinha?: String,
    descricao_resumida?: String,
    descricao_detalhada?: String,
    valor?: number
    imagem?: any,
    id?: number
}

const DetalhesPrato: React.FC = () => {

  const [ prato, setpratos ] = useState<DetalhesPratoInterface>(
      {
        "id": 0,
        "nome": "",
        "cozinha": "",
        "descricao_detalhada": "",
        "descricao_resumida": "",
        "imagem": "",
        "valor": 0.00
      }
  )

  const { id } = useParams();

  useEffect(
    () => {

      async function requestData() {
        const request = await api.get(`/pratos/${id}`)
        const data = request.data
        console.log(data)
        setpratos(data)
      }
      
      if (id) {
      requestData()
      }

    }, [id]
    
  )


  return (
  <div className="detalhes-prato">
    <div className="detalhes-prato-card">
      <div className="detahes-prato-card-sup">
        <div className="detalhes">
          <h1>{prato.nome}</h1>
          <p>
            <strong>Cozinha: </strong>{prato.cozinha}
          </p>
          <p>
            <strong>Valor: R$:</strong>{prato.valor}
          </p>
        </div>
      </div>
      <div className="descricao">
        <p>
          <strong>Descrição da sua experiência Gastronômica: </strong>{prato.descricao_detalhada}
        </p>
      </div>
      <Link to="/" className="">
        <button onClick={() => {}}>Voltar</button>
      </Link>
    </div>
  </div>
  );
}

export default DetalhesPrato;