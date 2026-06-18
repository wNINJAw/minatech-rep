import "./About.css";

function About() {
  return (
    <section id="projeto" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-subtitle">Nossa missão</span>

            <h2 className="section-title">Por que o MinaTech existe?</h2>

            <p className="section-description">
              As áreas de Ciência, Tecnologia, Engenharia e Matemática são os
              motores do futuro, mas a presença feminina ainda é minoria,
              especialmente nas engenharias.
            </p>

            <p className="section-description">
              Nascido em Florianópolis, o MinaTech busca mudar essa realidade
              desde a base, aproximando meninas de escolas públicas das
              oportunidades do universo da tecnologia e da inovação.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="about-stats">
              <div className="about-stat-card">
                <i className="bi bi-people-fill"></i>
                <strong>+200</strong>
                <span>Meninas impactadas</span>
              </div>

              <div className="about-stat-card">
                <i className="bi bi-heart-fill"></i>
                <strong>100%</strong>
                <span>Foco em inclusão</span>
              </div>

              <div className="about-stat-card">
                <i className="bi bi-mortarboard-fill"></i>
                <strong>STEM</strong>
                <span>Ciência, tecnologia, engenharia e matemática</span>
              </div>

              <div className="about-stat-card">
                <i className="bi bi-geo-alt-fill"></i>
                <strong>SC</strong>
                <span>Projeto com origem em Florianópolis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;