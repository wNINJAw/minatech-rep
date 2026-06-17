import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
    escola: "",
    cidade: "",
    tipo: "Aluna",
    mensagem: ""
  });

  const [mensagemSucesso, setMensagemSucesso] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const inscricoesSalvas =
      JSON.parse(localStorage.getItem("inscricoesMinaTech")) || [];

    const novaInscricao = {
      id: Date.now(),
      ...formData
    };

    const novaLista = [...inscricoesSalvas, novaInscricao];

    localStorage.setItem("inscricoesMinaTech", JSON.stringify(novaLista));

    setMensagemSucesso("Cadastro realizado com sucesso!");

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      idade: "",
      escola: "",
      cidade: "",
      tipo: "Aluna",
      mensagem: ""
    });

    window.dispatchEvent(new Event("inscricaoAtualizada"));
  }

  return (
    <section id="cadastro" className="register-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Banco de dados local</span>

          <h2 className="section-title">Cadastro de participantes</h2>

          <p className="section-description">
            Preencha o formulário para registrar alunas, voluntárias ou parceiras
            interessadas no MinaTech. Os dados são salvos no localStorage,
            simulando um banco de dados no navegador.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <label>Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Digite seu nome"
              />
            </div>

            <div className="col-md-6">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="col-md-4">
              <label>Telefone</label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="col-md-4">
              <label>Idade</label>
              <input
                type="number"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                required
                placeholder="Ex: 16"
              />
            </div>

            <div className="col-md-4">
              <label>Tipo de participação</label>
              <select name="tipo" value={formData.tipo} onChange={handleChange}>
                <option>Aluna</option>
                <option>Voluntária</option>
                <option>Parceira</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Escola ou instituição</label>
              <input
                type="text"
                name="escola"
                value={formData.escola}
                onChange={handleChange}
                required
                placeholder="Nome da escola ou instituição"
              />
            </div>

            <div className="col-md-6">
              <label>Cidade</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                placeholder="Digite sua cidade"
              />
            </div>

            <div className="col-12">
              <label>Mensagem</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                placeholder="Conte brevemente seu interesse no projeto"
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-minatech mt-4">
            Salvar cadastro
          </button>

          {mensagemSucesso && <p className="success-message">{mensagemSucesso}</p>}
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;