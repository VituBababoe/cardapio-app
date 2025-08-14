import React, { useEffect } from "react";
import "../estilos/FormularioPrato.css"; // Importando o CSS específico para o componente
import api from "../api/api"; // Importando a instância do axios
import { useNavigate, useParams } from "react-router-dom";

interface FormularioPratoProps {

  isEditing?: boolean;
}

const FormularioPrato = ({ isEditing = false }: FormularioPratoProps) => {

const navigate = useNavigate()

  const [prato, setPrato] = React.useState({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    imagem: "",
    valor: 0,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Enviando...");
    try {
      const response = await api.post("/pratos", prato);
      console.log("Prato cadastrado com sucesso:", response.data);
      // Aqui você pode adicionar lógica para limpar o formulário ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error("Erro ao cadastrar prato:", error);
      // Aqui você pode adicionar lógica para exibir uma mensagem de erro
    }
  };

  const { id } = useParams<{ id: string }>();
  console.log("ID do prato:", id);
  useEffect(() => {
    if (isEditing) {
      // Se for edição, buscar os dados do prato
      const fetchPrato = async (id: number) => {
        try {
          const response = await api.get(`/pratos/${id}`);
          setPrato(response.data);
        } catch (error) {
          console.error("Erro ao buscar prato:", error);
        }
      };
      fetchPrato(Number(id));
    }
  }, [isEditing, id]);

  const EditarPrato = async () => {
    try {
      const response = await api.put(`/pratos/${id}`, {
        nome: prato.nome,
        cozinha: prato.cozinha,
        descricao_resumida: prato.descricao_resumida,
        descricao_detalhada: prato.descricao_detalhada,
        imagem: prato.imagem,
        valor: prato.valor
      });
    } catch (error) {
      console.error("Erro ao editar prato:", error);
      
    }
  };
  const CadastrarPrato = async () => {
    const response = await api.post("/pratos", {
      nome: prato.nome,
      cozinha: prato.cozinha,
      descricao_resumida: prato.descricao_resumida,
      descricao_detalhada: prato.descricao_detalhada,
      imagem: prato.imagem,
      valor: prato.valor
    })
  }


  return (
    <>
      <div className="form-container">
        <h1>Cadastro de Pratos</h1>
        <p>Bem-vindo ao sistema de cadastro de pratos!</p>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome do prato"
          onChange={(e) => setPrato({ ...prato, nome: e.target.value })}
          value={prato.nome}
        />
        <input
          type="text"
          name="cozinha"
          placeholder="Digite o tipo de cozinha do prato"
          onChange={(e) => setPrato({ ...prato, cozinha: e.target.value })}
          value={prato.cozinha}
        />
        <input
          type="text"
          name="descricao-resumida"
          placeholder="Digite a descrição resumida do prato"
          onChange={(e) => setPrato({ ...prato, descricao_resumida: e.target.value })}
          value={prato.descricao_resumida}
        />
        <input
          type="text"
          name="descricao-detalhada"
          placeholder="Digite a descrição detalhada do prato"
          onChange={(e) => setPrato({ ...prato, descricao_detalhada: e.target.value })}
          value={prato.descricao_detalhada}
        />
        <input
          type="text"
          name="imagem"
          placeholder="Digite a url da imagem do prato"
          onChange={(e) => setPrato({ ...prato, imagem: e.target.value })}
          value={prato.imagem}
        />
        <input
          type="text"
          name="valor"
          placeholder="Digite o valor do prato"
          onChange={(e) => {
            const valorDigitado = e.target.value;
            setPrato({
              ...prato,
              valor: valorDigitado === "" ? 0 : parseFloat(valorDigitado),
            });
          }}
          value={prato.valor}
        />
        {isEditing && (
          <button
            type="button"
            onClick={async () => {
              await EditarPrato();
              navigate(`/`); // Uncomment and fix if you have navigate and props.id available
            }}
          >
            Editar Prato
          </button>
        )}
        {!isEditing && (
          <button
            type="button"
            onClick={async () => {
              await CadastrarPrato();
              navigate(`/`);
            }}
          >
            Cadastrar Prato
          </button>
        )}
      </div>
    </>
  );
};

export default FormularioPrato;
