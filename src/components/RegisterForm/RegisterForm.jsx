import { useMemo, useState } from "react";
import "./RegisterForm.css";

// Chave do armazenamento local dos cadastros.
const STORAGE_KEY = "inscricoesMinaTech";

// Estado inicial com os campos solicitados nos requisitos do projeto.
const initialFormData = {
  perfil: "aluna",
  nomeCompleto: "",
  idade: "",
  escola: "",
  serie: "",
  cidade: "",
  telefone: "",
  email: "",
  responsavelNome: "",
  responsavelTelefone: "",
  responsavelEmail: "",
  areaInteresse: "",
  disponibilidade: "",
  motivacao: "",
  areaAtuacao: "",
  experiencia: "",
  instituicao: "",
  cargo: "",
  tipoApoio: "",
  site: "",
  mensagem: "",
  listaEspera: false,
  aceitePrivacidade: false,
  aceiteImagem: false,
};

// Tipos de cadastro previstos para o público do projeto.
const perfis = [
  {
    value: "aluna",
    label: "Aluna",
    description: "Inscrição de candidata para a Jornada MinaTech.",
  },
  {
    value: "voluntaria",
    label: "Voluntária/Mentora",
    description: "Cadastro de interesse para aulas, mentorias e apoio.",
  },
  {
    value: "parceira",
    label: "Parceira",
    description: "Contato de empresa ou instituição apoiadora.",
  },
];

// Remove caracteres não numéricos para validar campos de telefone.
function onlyDigits(value) {
  return value.replace(/\D/g, "");
}

// Validação simples para evitar e-mails incompletos.
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Busca os cadastros salvos no navegador, usado como banco local.
function getSavedRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function RegisterForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  const selectedProfile = useMemo(
    () => perfis.find((perfil) => perfil.value === formData.perfil),
    [formData.perfil],
  );

  // Responsável legal é obrigatório para participantes menores de idade.
  const isMinorStudent =
    formData.perfil === "aluna" &&
    formData.idade !== "" &&
    Number(formData.idade) < 18;

  // Atualiza o campo alterado e limpa o erro daquele campo.
  function handleChange(event) {
    const { name, type, checked, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setFeedback(null);
  }

  // Ao trocar o perfil, mantemos apenas os dados gerais de contato.
  function handleProfileChange(profile) {
    setFormData((currentData) => ({
      ...initialFormData,
      nomeCompleto: currentData.nomeCompleto,
      cidade: currentData.cidade,
      telefone: currentData.telefone,
      email: currentData.email,
      listaEspera: currentData.listaEspera,
      aceitePrivacidade: currentData.aceitePrivacidade,
      aceiteImagem: currentData.aceiteImagem,
      perfil: profile,
    }));
    setErrors({});
    setFeedback(null);
  }

  // Verifica os campos obrigatórios conforme o tipo de cadastro.
  function validate() {
    const newErrors = {};
    const requiredFields = {
      nomeCompleto: "Informe o nome completo.",
      cidade: "Informe a cidade.",
      telefone: "Informe um telefone para contato.",
      email: "Informe um e-mail válido.",
    };

    Object.entries(requiredFields).forEach(([field, message]) => {
      if (!String(formData[field]).trim()) {
        newErrors[field] = message;
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Digite um e-mail em formato válido.";
    }

    if (formData.telefone && onlyDigits(formData.telefone).length < 10) {
      newErrors.telefone = "Digite DDD e telefone.";
    }

    if (formData.perfil === "aluna") {
      if (!formData.idade) {
        newErrors.idade = "Informe a idade.";
      } else if (Number(formData.idade) < 13 || Number(formData.idade) > 18) {
        newErrors.idade = "A Jornada MinaTech é voltada para meninas de 13 a 18 anos.";
      }

      if (!formData.escola.trim()) {
        newErrors.escola = "Informe a escola.";
      }

      if (!formData.serie.trim()) {
        newErrors.serie = "Informe a série/ano escolar.";
      }

      if (!formData.areaInteresse.trim()) {
        newErrors.areaInteresse = "Escolha uma área de interesse.";
      }

      if (!formData.motivacao.trim()) {
        newErrors.motivacao = "Conte brevemente por que deseja participar.";
      }

      if (isMinorStudent) {
        if (!formData.responsavelNome.trim()) {
          newErrors.responsavelNome = "Informe o nome do responsável legal.";
        }

        if (!formData.responsavelTelefone.trim()) {
          newErrors.responsavelTelefone = "Informe o telefone do responsável.";
        } else if (onlyDigits(formData.responsavelTelefone).length < 10) {
          newErrors.responsavelTelefone = "Digite DDD e telefone do responsável.";
        }

        if (!formData.responsavelEmail.trim()) {
          newErrors.responsavelEmail = "Informe o e-mail do responsável.";
        } else if (!isValidEmail(formData.responsavelEmail)) {
          newErrors.responsavelEmail = "Digite um e-mail válido para o responsável.";
        }
      }
    }

    if (formData.perfil === "voluntaria") {
      if (!formData.areaAtuacao.trim()) {
        newErrors.areaAtuacao = "Informe sua área de atuação.";
      }

      if (!formData.disponibilidade.trim()) {
        newErrors.disponibilidade = "Informe sua disponibilidade.";
      }

      if (!formData.experiencia.trim()) {
        newErrors.experiencia = "Conte brevemente sua experiência.";
      }
    }

    if (formData.perfil === "parceira") {
      if (!formData.instituicao.trim()) {
        newErrors.instituicao = "Informe a empresa ou instituição.";
      }

      if (!formData.cargo.trim()) {
        newErrors.cargo = "Informe seu cargo ou vínculo.";
      }

      if (!formData.tipoApoio.trim()) {
        newErrors.tipoApoio = "Escolha uma forma de apoio.";
      }
    }

    if (!formData.aceitePrivacidade) {
      newErrors.aceitePrivacidade = "É necessário aceitar a política de privacidade.";
    }

    return newErrors;
  }

  // Salva o cadastro no localStorage e gera um protocolo de confirmação.
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFeedback({
        type: "error",
        message: "Confira os campos destacados antes de enviar.",
      });
      return;
    }

    const protocolo = `MT-${Date.now().toString(36).toUpperCase()}`;
    const novaInscricao = {
      id: Date.now(),
      protocolo,
      status: "Cadastro de interesse recebido",
      enviadoEm: new Date().toISOString(),
      ...formData,
    };

    const inscricoesSalvas = getSavedRegistrations();
    const novaLista = [...inscricoesSalvas, novaInscricao];

    // Nesta versão, o navegador representa o banco de dados do sistema.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista));
    window.dispatchEvent(new Event("inscricaoAtualizada"));

    setFeedback({
      type: "success",
      message: `Cadastro enviado com sucesso. Protocolo: ${protocolo}.`,
    });
    setFormData({ ...initialFormData, perfil: formData.perfil });
    setErrors({});
  }

  // Exibe a mensagem de erro abaixo do campo correspondente.
  function renderError(name) {
    return errors[name] ? <span className="field-error">{errors[name]}</span> : null;
  }

  // Aplica destaque visual quando o campo possui erro.
  function inputClass(name) {
    return errors[name] ? "field-control field-control-error" : "field-control";
  }

  return (
    <section id="cadastro" className="container-fluid register-section">
      <div className="container-xxl py-5">
        <div className="register-heading text-center">
          <span className="register-status">Inscrições abertas para cadastro de interesse</span>
          <h1>Formulário MinaTech</h1>
          <p>
            Selecione o tipo de cadastro e preencha as informações necessárias
            para a equipe entrar em contato.
          </p>
        </div>

        <div className="register-layout">
          <aside className="register-info">
            <h2>Critérios de participação</h2>
            <ul>
              <li>Ser menina de 13 a 18 anos.</li>
              <li>Estudar em escola pública.</li>
              <li>Ter interesse em tecnologia, engenharia, ciência ou inovação.</li>
              <li>Ter autorização do responsável legal quando menor de idade.</li>
            </ul>
            <p>
              Caso as vagas sejam preenchidas, o cadastro pode ser mantido em
              lista de espera para próximas turmas ou atividades.
            </p>
          </aside>

          <div className="register-card">
            <div className="profile-tabs" role="tablist" aria-label="Tipo de cadastro">
              {perfis.map((perfil) => (
                <button
                  className={`profile-tab ${
                    formData.perfil === perfil.value ? "profile-tab-active" : ""
                  }`}
                  key={perfil.value}
                  onClick={() => handleProfileChange(perfil.value)}
                  type="button"
                >
                  <strong>{perfil.label}</strong>
                  <span>{perfil.description}</span>
                </button>
              ))}
            </div>

            <form className="register-form" onSubmit={handleSubmit} noValidate>
              <div className="form-section-title">
                <h2>{selectedProfile.label}</h2>
                <p>{selectedProfile.description}</p>
              </div>

              <div className="form-grid">
                <label className="form-field">
                  Nome completo *
                  <input
                    className={inputClass("nomeCompleto")}
                    name="nomeCompleto"
                    onChange={handleChange}
                    type="text"
                    value={formData.nomeCompleto}
                  />
                  {renderError("nomeCompleto")}
                </label>

                <label className="form-field">
                  E-mail *
                  <input
                    className={inputClass("email")}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={formData.email}
                  />
                  {renderError("email")}
                </label>

                <label className="form-field">
                  Telefone *
                  <input
                    className={inputClass("telefone")}
                    name="telefone"
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    type="tel"
                    value={formData.telefone}
                  />
                  {renderError("telefone")}
                </label>

                <label className="form-field">
                  Cidade *
                  <input
                    className={inputClass("cidade")}
                    name="cidade"
                    onChange={handleChange}
                    type="text"
                    value={formData.cidade}
                  />
                  {renderError("cidade")}
                </label>

                {formData.perfil === "aluna" && (
                  <>
                    <label className="form-field">
                      Idade *
                      <input
                        className={inputClass("idade")}
                        max="18"
                        min="13"
                        name="idade"
                        onChange={handleChange}
                        type="number"
                        value={formData.idade}
                      />
                      {renderError("idade")}
                    </label>

                    <label className="form-field">
                      Escola pública *
                      <input
                        className={inputClass("escola")}
                        name="escola"
                        onChange={handleChange}
                        type="text"
                        value={formData.escola}
                      />
                      {renderError("escola")}
                    </label>

                    <label className="form-field">
                      Série/ano escolar *
                      <input
                        className={inputClass("serie")}
                        name="serie"
                        onChange={handleChange}
                        placeholder="Ex: 1º ano do Ensino Médio"
                        type="text"
                        value={formData.serie}
                      />
                      {renderError("serie")}
                    </label>

                    <label className="form-field">
                      Área de maior interesse *
                      <select
                        className={inputClass("areaInteresse")}
                        name="areaInteresse"
                        onChange={handleChange}
                        value={formData.areaInteresse}
                      >
                        <option value="">Selecione</option>
                        <option>Tecnologia e programação</option>
                        <option>Engenharia</option>
                        <option>Ciências exatas</option>
                        <option>Robótica e inovação</option>
                        <option>Ainda estou descobrindo</option>
                      </select>
                      {renderError("areaInteresse")}
                    </label>
                  </>
                )}

                {formData.perfil === "voluntaria" && (
                  <>
                    <label className="form-field">
                      Área de atuação *
                      <input
                        className={inputClass("areaAtuacao")}
                        name="areaAtuacao"
                        onChange={handleChange}
                        placeholder="Ex: tecnologia, educação, RH, design"
                        type="text"
                        value={formData.areaAtuacao}
                      />
                      {renderError("areaAtuacao")}
                    </label>

                    <label className="form-field">
                      Como deseja contribuir?
                      <select
                        className="field-control"
                        name="tipoApoio"
                        onChange={handleChange}
                        value={formData.tipoApoio}
                      >
                        <option value="">Selecione</option>
                        <option>Mentoria</option>
                        <option>Aulas de exatas</option>
                        <option>Palestras</option>
                        <option>Organização de eventos</option>
                        <option>Divulgação</option>
                      </select>
                    </label>

                    <label className="form-field form-field-full">
                      Disponibilidade *
                      <input
                        className={inputClass("disponibilidade")}
                        name="disponibilidade"
                        onChange={handleChange}
                        placeholder="Ex: sábados pela manhã, encontros mensais"
                        type="text"
                        value={formData.disponibilidade}
                      />
                      {renderError("disponibilidade")}
                    </label>
                  </>
                )}

                {formData.perfil === "parceira" && (
                  <>
                    <label className="form-field">
                      Empresa ou instituição *
                      <input
                        className={inputClass("instituicao")}
                        name="instituicao"
                        onChange={handleChange}
                        type="text"
                        value={formData.instituicao}
                      />
                      {renderError("instituicao")}
                    </label>

                    <label className="form-field">
                      Cargo ou vínculo *
                      <input
                        className={inputClass("cargo")}
                        name="cargo"
                        onChange={handleChange}
                        type="text"
                        value={formData.cargo}
                      />
                      {renderError("cargo")}
                    </label>

                    <label className="form-field">
                      Tipo de apoio *
                      <select
                        className={inputClass("tipoApoio")}
                        name="tipoApoio"
                        onChange={handleChange}
                        value={formData.tipoApoio}
                      >
                        <option value="">Selecione</option>
                        <option>Patrocínio</option>
                        <option>Doação de equipamentos ou materiais</option>
                        <option>Visitas técnicas</option>
                        <option>Palestras ou mentorias</option>
                        <option>Divulgação institucional</option>
                      </select>
                      {renderError("tipoApoio")}
                    </label>

                    <label className="form-field">
                      Site ou rede social
                      <input
                        className="field-control"
                        name="site"
                        onChange={handleChange}
                        placeholder="https://"
                        type="url"
                        value={formData.site}
                      />
                    </label>
                  </>
                )}
              </div>

              {isMinorStudent && (
                <div className="responsible-box">
                  <h3>Dados do responsável legal</h3>
                  <div className="form-grid">
                    <label className="form-field">
                      Nome do responsável *
                      <input
                        className={inputClass("responsavelNome")}
                        name="responsavelNome"
                        onChange={handleChange}
                        type="text"
                        value={formData.responsavelNome}
                      />
                      {renderError("responsavelNome")}
                    </label>

                    <label className="form-field">
                      Telefone do responsável *
                      <input
                        className={inputClass("responsavelTelefone")}
                        name="responsavelTelefone"
                        onChange={handleChange}
                        type="tel"
                        value={formData.responsavelTelefone}
                      />
                      {renderError("responsavelTelefone")}
                    </label>

                    <label className="form-field form-field-full">
                      E-mail do responsável *
                      <input
                        className={inputClass("responsavelEmail")}
                        name="responsavelEmail"
                        onChange={handleChange}
                        type="email"
                        value={formData.responsavelEmail}
                      />
                      {renderError("responsavelEmail")}
                    </label>
                  </div>
                </div>
              )}

              <label className="form-field form-field-full">
                {formData.perfil === "aluna"
                  ? "Por que você quer participar? *"
                  : "Mensagem para a equipe"}
                <textarea
                  className={inputClass(
                    formData.perfil === "aluna" ? "motivacao" : "mensagem",
                  )}
                  name={formData.perfil === "aluna" ? "motivacao" : "mensagem"}
                  onChange={handleChange}
                  rows="4"
                  value={
                    formData.perfil === "aluna"
                      ? formData.motivacao
                      : formData.mensagem
                  }
                ></textarea>
                {formData.perfil === "aluna"
                  ? renderError("motivacao")
                  : renderError("mensagem")}
              </label>

              {formData.perfil === "voluntaria" && (
                <label className="form-field form-field-full">
                  Experiência com educação, tecnologia ou mentoria *
                  <textarea
                    className={inputClass("experiencia")}
                    name="experiencia"
                    onChange={handleChange}
                    rows="3"
                    value={formData.experiencia}
                  ></textarea>
                  {renderError("experiencia")}
                </label>
              )}

              <div className="consent-box">
                <label className="check-field">
                  <input
                    checked={formData.listaEspera}
                    name="listaEspera"
                    onChange={handleChange}
                    type="checkbox"
                  />
                  Aceito ficar na lista de espera caso as vagas estejam preenchidas.
                </label>

                <label className="check-field">
                  <input
                    checked={formData.aceiteImagem}
                    name="aceiteImagem"
                    onChange={handleChange}
                    type="checkbox"
                  />
                  Autorizo contato futuro sobre uso de imagem em registros das atividades.
                </label>

                <label
                  className={`check-field ${
                    errors.aceitePrivacidade ? "check-field-error" : ""
                  }`}
                >
                  <input
                    checked={formData.aceitePrivacidade}
                    name="aceitePrivacidade"
                    onChange={handleChange}
                    type="checkbox"
                  />
                  Li e aceito a política de privacidade do projeto MinaTech. *
                </label>
                {renderError("aceitePrivacidade")}

                <details className="privacy-details">
                  <summary>Ver política de privacidade resumida</summary>
                  <p>
                    Os dados enviados serão usados apenas para organizar
                    inscrições, lista de espera, contato com responsáveis,
                    voluntariado, parcerias e comunicações sobre a Jornada
                    MinaTech. As informações ficam armazenadas localmente nesta
                    versão do projeto e a estrutura permite integração futura
                    com planilha, e-mail ou backend.
                  </p>
                </details>
              </div>

              {feedback && (
                <div className={`form-feedback form-feedback-${feedback.type}`}>
                  {feedback.message}
                </div>
              )}

              <button className="headerButton register-submit" type="submit">
                Enviar cadastro
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
