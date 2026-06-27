import "./Pillars.css";

// Lista dos pilares que representam as frentes de atuação do projeto.
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

// Renderiza os pilares em cards informativos.
function Pillars() {
  return (
    <section className="container-fluid pt-4" id="osPilares">
      <div className="container-xxl text-center">
        <div className="row">
          <div className="gridBanners">
            {/* Cada pilar é exibido com ícone, título e descrição. */}
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <img src={pillar.icon} alt="" />
                <h1>{pillar.title}</h1>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pillars;
