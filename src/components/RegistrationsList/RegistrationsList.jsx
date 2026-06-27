import { useEffect, useState } from "react";
import "./RegistrationsList.css";

function RegistrationsList() {
  const [inscricoes, setInscricoes] = useState([]);

  // Carrega os registros do banco local usado na simulação.
  function carregarInscricoes() {
    const dadosSalvos =
      JSON.parse(localStorage.getItem("inscricoesMinaTech")) || [];

    setInscricoes(dadosSalvos);
  }

  // Remove todos os cadastros salvos no navegador.
  function limparInscricoes() {
    localStorage.removeItem("inscricoesMinaTech");
    setInscricoes([]);
  }

  useEffect(() => {
    carregarInscricoes();

    // Mantém a lista atualizada após o envio do formulário.
    window.addEventListener("inscricaoAtualizada", carregarInscricoes);

    return () => {
      window.removeEventListener("inscricaoAtualizada", carregarInscricoes);
    };
  }, []);

  return (
    <section className="registrations-section">
      <div className="container">
        <div className="registrations-header">
          <div>
            <span className="section-subtitle">Registros salvos</span>

            <h2 className="section-title">Lista de inscrições</h2>

            <p className="section-description">
              Esta área exibe os cadastros salvos no banco de dados local usando
              localStorage.
            </p>
          </div>

          <button className="btn-clear" onClick={limparInscricoes}>
            Limpar dados
          </button>
        </div>

        {inscricoes.length === 0 ? (
          <div className="empty-state">Nenhuma inscrição cadastrada ainda.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover registrations-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Perfil</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>Cidade</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {inscricoes.map((inscricao) => (
                  <tr key={inscricao.id}>
                    <td>{inscricao.nomeCompleto || inscricao.nome}</td>
                    <td>{inscricao.perfil || inscricao.tipo}</td>
                    <td>{inscricao.email}</td>
                    <td>{inscricao.telefone}</td>
                    <td>{inscricao.cidade}</td>
                    <td>{inscricao.status || "Cadastro recebido"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default RegistrationsList;
