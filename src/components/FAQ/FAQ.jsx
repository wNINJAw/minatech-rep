import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "Existe um limite de idade para participar?",
      answer:
        "O foco principal do programa são meninas de 13 a 18 anos que estudam em escolas públicas e têm interesse em tecnologia, engenharia e ciências exatas."
    },
    {
      question: "Como funciona o processo de seleção das alunas?",
      answer:
        "A seleção considera o interesse demonstrado na inscrição, disponibilidade para participar das atividades e aderência ao público-alvo do projeto."
    },
    {
      question: "Receberei certificado ao final das atividades?",
      answer:
        "Sim. As participantes que cumprirem a frequência mínima definida pelo programa poderão receber certificado digital de participação."
    },
    {
      question: "As atividades são presenciais, online ou híbridas?",
      answer:
        "O formato pode variar conforme a etapa do programa, podendo incluir encontros presenciais, atividades online, oficinas e visitas técnicas."
    },
    {
      question: "O MinaTech oferece material necessário?",
      answer:
        "Durante as atividades presenciais, a organização busca oferecer estrutura adequada para a realização das oficinas e encontros."
    },
    {
      question: "Como posso ser voluntário ou parceiro?",
      answer:
        "Professores, universitários, profissionais e empresas podem apoiar o projeto com mentorias, aulas, palestras, visitas técnicas, patrocínio ou divulgação."
    },
    {
      question: "Quais tecnologias são ensinadas?",
      answer:
        "O programa pode abordar lógica de programação, HTML, CSS, JavaScript, robótica, pensamento computacional e ferramentas de inovação."
    },
    {
      question: "O projeto ajuda na carreira das participantes?",
      answer:
        "Sim. O MinaTech aproxima as participantes de profissionais, universidades e empresas, ampliando repertório, confiança e visão de futuro."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">FAQ</span>

          <h2 className="section-title">Perguntas frequentes</h2>

          <p className="section-description">
            Tire suas principais dúvidas sobre participação, atividades,
            voluntariado e apoio ao projeto.
          </p>
        </div>

        <div className="accordion faq-accordion" id="accordionFAQ">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h3 className="accordion-header">
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`faq${index}`}
                >
                  {faq.question}
                </button>
              </h3>

              <div
                id={`faq${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="final-call">
          <h2>O futuro é feminino.</h2>

          <p>
            Não espere o mundo mudar sozinho. Junte-se ao MinaTech e faça parte
            de um ecossistema mais diverso, inovador e inclusivo.
          </p>

          <a href="#cadastro" className="btn-minatech">
            Faça parte agora
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;