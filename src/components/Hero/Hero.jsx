import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="hero-badge">
              <i className="bi bi-stars"></i>
              Programa de inclusão feminina em STEM
            </span>

            <h1 className="hero-title">
              Onde o talento feminino encontra o futuro da Engenharia e Tecnologia.
            </h1>

            <p className="hero-text">
              Conectamos alunas do ensino médio de escolas públicas ao universo STEM.
              Inspiração, apoio escolar e mentoria para formar as próximas líderes do
              mercado de tecnologia.
            </p>

            <div className="hero-actions">
              <a href="#cadastro" className="btn-minatech">
                Quero participar
              </a>

              <a href="#projeto" className="btn-outline-minatech">
                Conheça a missão
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-card">
              <div className="hero-image">
                <i className="bi bi-code-slash"></i>
              </div>

              <div className="hero-floating-card card-one">
                <strong>+200</strong>
                <span>meninas impactadas</span>
              </div>

              <div className="hero-floating-card card-two">
                <strong>100%</strong>
                <span>foco em inclusão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;