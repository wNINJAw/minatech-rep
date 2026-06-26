import "./About.css";

function About() {
  return (
    <section className="container-fluid" id="oProjeto">
      <div className="container-xxl py-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img
              src="/img/IMG_9604-1-2048x1536.jpg"
              className="br20"
              width="100%"
              alt=""
            />
          </div>

          <div className="col-lg-6 col-sm-12">
            <h1 className="fs38pt">Por que o MinaTech existe?</h1>
            <p>
              As áreas de Ciência, Tecnologia, Engenharia e Matemática (STEM)
              são os motores do futuro, mas a presença feminina ainda é
              minoria, especialmente nas engenharias.
            </p>
            <p>
              Nascido em Florianópolis, nosso propósito é mudar essa realidade
              desde a base. Acreditamos que o talento está distribuído
              igualmente, mas as oportunidades não. Nós entramos para nivelar
              esse jogo para meninas de escolas públicas.
            </p>

            <div className="row d-flex gap-3 row-gap-3">
              <div className="quadrinho">
                <h1>+200</h1>
                <span>Meninas Impactadas</span>
              </div>
              <div className="quadrinho">
                <h1>100%</h1>
                <span>Foco em Inclusão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
