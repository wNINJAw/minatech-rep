import { useMemo, useState } from "react";
import "./FAQ.css";

// Perguntas organizadas por tema para facilitar leitura e manutenção.
const groups = [
  {
    title: "Participação e inscrição",
    id: "accordionParticipacao",
    items: [
      {
        key: "idade",
        question: "Quem pode participar da Jornada MinaTech?",
        answer:
          "A Jornada MinaTech é voltada principalmente para meninas de 13 a 18 anos, estudantes de escolas públicas, com interesse em tecnologia, engenharia, ciências exatas, inovação ou áreas STEAM.",
      },
      {
        key: "dados-inscricao",
        question: "Quais dados são solicitados no formulário de inscrição?",
        answer:
          "O formulário solicita nome completo, idade, escola, série ou ano escolar, cidade, telefone, e-mail, área de interesse e uma breve motivação. Para menores de idade, também são solicitados nome, telefone e e-mail do responsável legal.",
      },
      {
        key: "responsavel",
        question: "Por que o cadastro pede dados do responsável legal?",
        answer:
          "Como o programa atende adolescentes, os dados do responsável são necessários para contato, autorização e acompanhamento das participantes menores de 18 anos.",
      },
      {
        key: "confirmacao",
        question: "Como sei que minha inscrição foi enviada?",
        answer:
          "Após o envio correto do formulário, a página exibe uma mensagem de confirmação com um número de protocolo. Esse registro fica salvo no navegador para simular o banco de dados local do projeto.",
      },
      {
        key: "lista-espera",
        question: "O que acontece se as vagas estiverem preenchidas?",
        answer:
          "A candidata pode marcar a opção de lista de espera no formulário. Assim, o interesse fica registrado para próximas turmas, oficinas ou atividades relacionadas à Jornada MinaTech.",
      },
    ],
  },
  {
    title: "Cronograma e funcionamento",
    id: "accordionFuncionamento",
    items: [
      {
        key: "cronograma",
        question: "Como funciona o cronograma da jornada?",
        answer:
          "A jornada é organizada em etapas: inscrição, seleção, acolhimento, oficinas práticas, visitas técnicas, mentorias, apoio educacional e encerramento. Datas específicas podem ser divulgadas pela organização conforme a edição do projeto.",
      },
      {
        key: "formato",
        question: "As atividades são presenciais, online ou híbridas?",
        answer:
          "O formato pode variar conforme a etapa e a edição. A proposta permite atividades presenciais, encontros online, oficinas, visitas técnicas e mentorias, sempre buscando acessibilidade e segurança para as participantes.",
      },
      {
        key: "beneficios",
        question: "Quais benefícios o programa oferece?",
        answer:
          "O MinaTech oferece contato com áreas STEAM, apoio educacional, oficinas práticas, mentorias, inspiração profissional, conexão com universidades, empresas e redes de apoio para ampliar o repertório das participantes.",
      },
      {
        key: "certificado",
        question: "As participantes recebem certificado?",
        answer:
          "A emissão de certificado pode ocorrer conforme a atividade ou edição da jornada, levando em conta participação, presença e critérios definidos pela equipe organizadora.",
      },
    ],
  },
  {
    title: "Voluntariado e parcerias",
    id: "accordionVoluntariado",
    items: [
      {
        key: "voluntarios",
        question: "Quem pode se cadastrar como voluntária ou mentora?",
        answer:
          "Podem se cadastrar pessoas com vontade de contribuir com aulas, mentorias, palestras, organização de eventos, comunicação, carreira ou apoio técnico. Não é necessário atuar somente em programação.",
      },
      {
        key: "parceiros",
        question: "Como empresas e instituições podem apoiar o projeto?",
        answer:
          "Parceiros podem apoiar com patrocínio, doação de equipamentos ou materiais, espaços para visitas técnicas, palestras, mentorias, divulgação e conexão com oportunidades educacionais ou profissionais.",
      },
      {
        key: "contato-humano",
        question: "E se eu tiver uma proposta específica de apoio?",
        answer:
          "Use o formulário de parceria para registrar a proposta e deixe uma mensagem com os detalhes. A equipe também pode ser contatada pelos canais oficiais exibidos no rodapé da página.",
      },
    ],
  },
  {
    title: "Privacidade, imagem e contato",
    id: "accordionPrivacidade",
    items: [
      {
        key: "privacidade",
        question: "Como os dados do formulário são utilizados?",
        answer:
          "Os dados são utilizados para organizar inscrições, entrar em contato com candidatas, responsáveis, voluntárias e parceiros, além de apoiar a gestão futura do projeto. O envio exige aceite da política de privacidade.",
      },
      {
        key: "imagem",
        question: "O que significa o consentimento de uso de imagem?",
        answer:
          "O campo indica autorização para contato futuro sobre registros audiovisuais das atividades. Ele ajuda a equipe a tratar fotos e vídeos com transparência e responsabilidade.",
      },
      {
        key: "erro-formulario",
        question: "O que fazer se o formulário mostrar erro?",
        answer:
          "Confira os campos destacados, preencha todas as informações obrigatórias, verifique o formato do e-mail e inclua DDD no telefone. Depois, tente enviar novamente.",
      },
      {
        key: "redes",
        question: "Onde encontro os canais de contato?",
        answer:
          "Os canais de contato e redes sociais aparecem no rodapé do site. Eles servem para dúvidas que não foram resolvidas pela página ou para atendimento humano quando necessário.",
      },
    ],
  },
];

// Padroniza textos para a busca funcionar com ou sem acentos.
function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function FAQ() {
  const [search, setSearch] = useState("");

  // Filtra as perguntas conforme a palavra-chave informada pelo usuário.
  const filteredGroups = useMemo(() => {
    const term = normalize(search.trim());

    if (!term) {
      return groups;
    }

    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          normalize(`${group.title} ${item.question} ${item.answer}`).includes(term),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [search]);

  return (
    <section className="container-fluid mt-5 pb-5 fundoBranco" id="asDuvidas">
      <div className="container-xxl pt-5">
        <div className="faq-heading text-center">
          <h2>Perguntas Frequentes (FAQ)</h2>
          <p>
            Tire dúvidas sobre participação, inscrições, cronograma,
            voluntariado, parcerias e privacidade.
          </p>
        </div>

        <label className="faq-search" htmlFor="faqSearch">
          Buscar no FAQ
          <input
            id="faqSearch"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Digite uma palavra-chave"
            type="search"
            value={search}
          />
        </label>

        {filteredGroups.length === 0 ? (
          <div className="faq-empty">
            Nenhuma pergunta encontrada. Entre em contato pelos canais oficiais
            do projeto.
          </div>
        ) : (
          filteredGroups.map((group, groupIndex) => (
            <div key={group.id}>
              <h4
                className={`${
                  groupIndex === 0 ? "mt-4" : "mt-5"
                } mb-3 boldRedTitle`}
              >
                {group.title}
              </h4>
              <div className="accordion" id={group.id}>
                {group.items.map((item) => {
                  const answerId = `ans-${item.key}`;
                  const headingId = `faq-${item.key}`;

                  return (
                    <div className="accordion-item" key={item.key}>
                      <h2 className="accordion-header" id={headingId}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${answerId}`}
                          aria-expanded="false"
                          aria-controls={answerId}
                        >
                          <strong>{item.question}</strong>
                        </button>
                      </h2>
                      <div
                        id={answerId}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#${group.id}`}
                        aria-labelledby={headingId}
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default FAQ;
