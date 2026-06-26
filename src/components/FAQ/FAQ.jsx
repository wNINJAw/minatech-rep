import "./FAQ.css";

const groups = [
  {
    title: "Sobre a Participação e Inscrição",
    id: "accordionParticipacao",
    items: [
      {
        key: "idade",
        question: "Existe um limite de idade para participar?",
        answer:
          "Nosso foco principal é em meninas de 13 à 18 anos que estudam em escola pública, mas aceitamos inscrições de [faixa de idade à definir, NÃO PODE ESQUECER DE MUDAR DEPOIS, TA EU DO FUTURO?!?!]. O importante é a vontade de aprender!",
      },
      {
        key: "selecao",
        question: "Como funciona o processo de seleção das alunas?",
        answer:
          "O processo de seleção leva em conta [critérios socioeconômicos e o interesse demonstrado no formulário]. Caso o número de inscritas exceda as vagas, realizamos [um sorteio / uma análise de perfil, sla tem q ver c elas la :/].",
      },
      {
        key: "certificado",
        question: "Receberei algum certificado ao final do curso ou workshop?",
        answer:
          "Sim! Emitimos certificados digitais para todas as alunas que atingirem a frequência mínima de [75%] nas atividades. Eles são ótimos para enriquecer o currículo e contar como horas complementares na escola ou faculdade.",
      },
      {
        key: "faltas",
        question: "O que acontece se eu perder uma aula ou encontro?",
        answer:
          "Pedimos que avise a coordenação com antecedência. O conteúdo [será disponibilizado em nossa plataforma online / poderá ser reposto em monitorias específicas. sla véi ja falei q tem ver q c elas lá :/] para que você não perca o fio da meada.",
      },
    ],
  },
  {
    title: "Infraestrutura e Logística",
    id: "accordionLogistica",
    items: [
      {
        key: "material",
        question:
          "O Minatech oferece o material necessário (computadores, internet)?",
        answer:
          "Sim. Nos encontros presenciais, disponibilizamos laboratórios equipados. Para as atividades remotas, [temos um programa de empréstimo de equipamentos / oferecemos suporte para acesso em polos parceiros].",
      },
      {
        key: "formato",
        question: "As atividades são presenciais, online ou híbridas?",
        answer:
          "Atualmente operamos no formato [Híbrido], com aulas online gravadas e encontros presenciais [quinzenais/mensais] para prática e networking.",
      },
      {
        key: "auxilio",
        question: "O projeto oferece auxílio transporte ou alimentação?",
        answer:
          "Sim, para os encontros presenciais oferecemos [lanche no local] e, dependendo da disponibilidade de verba, [ajuda de custo para o transporte público].",
      },
    ],
  },
  {
    title: "Voluntariado e Apoio",
    id: "accordionVoluntariado",
    items: [
      {
        key: "requisitos",
        question:
          "Quais são os requisitos para ser um(a) mentor(a) ou voluntário(a)?",
        answer:
          "Não precisa ser apenas da área técnica. Aceitamos voluntários de RH, Marketing, Design e Gestão. O requisito principal é ter disponibilidade de [X horas por semana] e vontade de impactar vidas.",
      },
      {
        key: "empresa",
        question: "Como minha empresa pode se tornar uma parceira do Minatech?",
        answer:
          "Empresas podem ajudar através de patrocínio direto, doação de equipamentos usados ou oferecendo horas de mentoria de seus colaboradores. Entre em contato pelo e-mail: parcerias@minatech.org.",
      },
      {
        key: "monitora",
        question: "Sou estudante universitária, posso atuar como monitora?",
        answer:
          "Com certeza! Adoramos ter estudantes universitárias conosco. É uma excelente forma de praticar o que você aprende na faculdade e ainda ganhar experiência em liderança e ensino.",
      },
    ],
  },
  {
    title: "Conteúdo e Carreira",
    id: "accordionCarreira",
    items: [
      {
        key: "tecnologias",
        question:
          "Quais linguagens de programação ou tecnologias são ensinadas?",
        answer:
          "Focamos em tecnologias com alta demanda no mercado, como [HTML, CSS, JavaScript e lógica de programação com Python]. Também abordamos ferramentas de versionamento como o Git.",
      },
      {
        key: "trabalho",
        question: "O Minatech ajuda na inserção no mercado de trabalho?",
        answer:
          "Sim! Temos parcerias com empresas de tecnologia que priorizam nossas alunas em seus processos de seleção para vagas de estágio e nível júnior.",
      },
      {
        key: "pos-curso",
        question: "O projeto oferece acompanhamento de mentoria após as aulas?",
        answer:
          "Sim, mantemos uma comunidade de ex-alunas e mentoras ativa, onde continuamos compartilhando vagas, dicas de carreira e realizando encontros de networking.",
      },
    ],
  },
];

function FAQ() {
  return (
    <section className="container-fluid mt-5 pb-5 fundoBranco" id="asDuvidas">
      <div className="container-xxl pt-5">
        <h2 className="mb-5 text-center">Perguntas Frequentes (FAQ)</h2>

        {groups.map((group, groupIndex) => (
          <div key={group.id}>
            <h4
              className={`${groupIndex === 0 ? "mt-4" : "mt-5"} mb-3 boldRedTitle`}
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
        ))}
      </div>
    </section>
  );
}

export default FAQ;
