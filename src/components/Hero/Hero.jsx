import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid mt-5 py-1 mb-5 hero-section" id="top">
      <div className="container-xxl mt-5 pt-5 mb-3">
        <div className="row d-flex flex-wrap-reverse justify-content-between">
          <div className="col-lg-6 col-sm-12 d-flex flex-column gap-3">
            <h1 className="boldRedTitle hero-title">
              Onde o talento feminino encontra o futuro da Engenharia e
              Tecnologia.
            </h1>
            <p className="fs16pt">
              Conectamos alunas do ensino médio de escolas públicas ao universo
              STEM. Inspiração, apoio escolar e mentoria para formar as próximas
              líderes do mercado de tecnologia.
            </p>
            <div className="d-flex gap-5 hero-actions">
              <a href="#queroParticipar" className="headerButton">
                Quero Participar
              </a>
              <a href="#oProjeto" className="outlinedButton">
                Conheça a Missão
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12">
            <img
              src="/img/img-post-mar-01.jpg"
              className="hero-image"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
