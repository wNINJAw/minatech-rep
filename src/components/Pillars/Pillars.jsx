import "./Pillars.css";


const pillars = [
  {
    icon: "/icons/bulb-2-svgrepo-com.svg",
    title: "Inspirar",
    text: "Palestras, rodas de conversa e visitas técnicas a empresas de tecnologia e centros de inovação em Santa Catarina para expandir horizontes.",
  },
  {
    icon: "/icons/book-open-svgrepo-com.svg",
    title: "Apoiar",
    text: "Suporte educacional prático. Oferecemos aulas preparatórias para o vestibular e ENEM com a ajuda de professores voluntários apaixonados.",
  },
  {
    icon: "/icons/handshake-svgrepo-com.svg",
    title: "Acompanhar",
    text: "Mentoria lado a lado. Estudantes universitárias e profissionais acompanham as meninas, criando uma rede de apoio segura contra a evasão.",
  },
  {
    icon: "/icons/people-nearby-svgrepo-com.svg",
    title: "Incluir",
    text: "Facilitar a entrada no mercado de trabalho e nas universidades, promovendo a real diversidade de gênero nas áreas de exatas.",
  },
  {
    icon: "/icons/code-svgrepo-com.svg",
    title: "Capacitar",
    text: "Oficinas práticas de lógica, programação e robótica. Ensinamos ferramentas técnicas essenciais para que as jovens transformem ideias em soluções tecnológicas reais.",
  },
  {
    icon: "/icons/star-shine-svgrepo-com.svg",
    title: "Transformar",
    text: "Impulsionar a presença feminina nas ciências exatas. Lutamos para mudar as estatísticas e garantir que o futuro da engenharia seja muito mais diverso e igualitário.",
  },
];

function Pillars() {
  return (
    <section className="container-fluid pt-4" id="osPilares">
      <div className="container-xxl text-center">
        <div className="row">
          <div className="gridBanners">
            {pillars.map((pillar) => (
              <article key={pillar.title}>
                <img src={pillar.icon} alt="" />
                <h1>{pillar.title}</h1>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
=======
function Pillars() {
  const pillars = [
    {
      icon: "bi-lightbulb-fill",
      title: "Inspirar",
      text: "Palestras, rodas de conversa e visitas técnicas para expandir horizontes e apresentar novas possibilidades profissionais."
    },
    {
      icon: "bi-book-fill",
      title: "Apoiar",
      text: "Aulas preparatórias e suporte educacional para vestibular e ENEM com apoio de professores e voluntários."
    },
    {
      icon: "bi-person-hearts",
      title: "Acompanhar",
      text: "Mentorias com universitárias e profissionais da área, criando uma rede de apoio segura e contínua."
    },
    {
      icon: "bi-universal-access-circle",
      title: "Incluir",
      text: "Promoção da diversidade de gênero nas áreas de exatas, tecnologia, engenharia e inovação."
    },
    {
      icon: "bi-cpu-fill",
      title: "Capacitar",
      text: "Oficinas práticas de lógica, programação, robótica e ferramentas essenciais para o futuro profissional."
    },
    {
      icon: "bi-rocket-takeoff-fill",
      title: "Transformar",
      text: "Impulsionar a presença feminina nas ciências exatas e contribuir para um futuro mais diverso."
    }
  ];

  return (
    <section id="pilares" className="pillars-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Pilares</span>

          <h2 className="section-title">Como o MinaTech gera impacto</h2>

          <p className="section-description mx-auto pillars-description">
            O projeto atua em diferentes frentes para inspirar, apoiar,
            acompanhar e capacitar meninas de escolas públicas.
          </p>
        </div>

        <div className="row g-4">
          {pillars.map((pillar, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>

                <h3>{pillar.title}</h3>

                <p>{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Pillars;
=======
export default Pillars;
