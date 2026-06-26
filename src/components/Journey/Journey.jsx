import { useEffect } from "react";
import "./Journey.css";

const steps = [
  {
    number: "1ª Etapa",
    title: "Inspiração e Descoberta",
    text: "Realizamos palestras, rodas de conversa e atividades em escolas públicas para apresentar às jovens as possibilidades das áreas de tecnologia, engenharias e ciências exatas.",
  },
  {
    number: "2ª Etapa",
    title: "Oficinas e Aprendizado Prático",
    text: "As participantes vivenciam oficinas de lógica, programação, robótica e outras atividades práticas, desenvolvendo habilidades técnicas em um ambiente acolhedor e colaborativo.",
  },
  {
    number: "3ª Etapa",
    title: "Conexão com o Ecossistema de Inovação",
    text: "Promovemos visitas técnicas, encontros com profissionais e experiências em universidades, laboratórios e empresas parceiras, aproximando as estudantes do mercado e da vida acadêmica.",
  },
  {
    number: "4ª Etapa",
    title: "Mentorias e Rede de Apoio",
    text: "As jovens contam com mentorias e acompanhamento de mulheres que atuam nas áreas STEM, fortalecendo a confiança, o desenvolvimento pessoal e a construção de novas perspectivas profissionais.",
  },
  {
    number: "5ª Etapa",
    title: "Apoio Educacional",
    text: "O programa também incentiva a continuidade dos estudos por meio de apoio educacional, orientação acadêmica e preparação para vestibulares e ENEM.",
  },
  {
    number: "6ª Etapa",
    title: "Desenvolvimento de Futuro",
    text: "A jornada continua com incentivo à formação acadêmica, desenvolvimento profissional e aproximação com oportunidades no ecossistema de tecnologia e inovação.",
  },
];

function Journey() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container-fluid mt-5 fundoPcbVermelha" id="aJornada">
      <div className="container-xxl">
        <section className="jornada-container">
          <h2 className="text-center mb-5">A Jornada MinaTech</h2>
          <p className="text-center">
            Um programa que inspira, apoia e acompanha jovens meninas no
            universo da tecnologia, das engenharias e da inovação.
          </p>

          <section className="circuito-minatech">
            <div className="timeline">
              {steps.map((step) => (
                <div className="timeline-item" key={step.number}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="step-num">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Journey;
