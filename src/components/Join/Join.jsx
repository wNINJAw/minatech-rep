import "./Join.css";

function Join() {
  return (
    <section className="container-fluid" id="queroParticipar">
      <div className="container-xxl pt-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Faça Parte do Movimento</h1>
            <p className="fs16pt">
              Seja para aprender ou para ensinar, o MinaTech tem espaço para
              você.
            </p>
          </div>
        </div>

        {/* Cards com os caminhos possíveis de participação no projeto. */}
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="h-100 d-flex flex-column align-items-center px-4 py-4 fundoBranco br20">
              <h1 className="mb-4">Sou Aluna</h1>
              <p className="fs16pt">
                Está no Ensino Médio de escola pública e quer explorar o mundo da
                tecnologia, ciência e engenharia? Vem com a gente garantir seu
                futuro!
              </p>
              <ul className="listaSouAluna align-self-start">
                <li>
                  <span>Totalmente gratuito.</span>
                </li>
                <li>
                  <span>Aulas preparatórias e material de apoio.</span>
                </li>
                <li>
                  <span>Visitas a empresas e universidades.</span>
                </li>
                <li>
                  <span>Contato direto com profissionais da área.</span>
                </li>
              </ul>
              <a href="#cadastro" className="headerButton mt-auto">
                Inscrever-se no programa
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="h-100 d-flex flex-column align-items-center px-4 py-4 br20 fundoGradientevermelho">
              <h1 className="mb-4">Quero ser Voluntário</h1>
              <p className="fs16pt">
                Você é professor, universitário ou profissional tech/engenharia?
                Doe seu tempo e conhecimento para transformar o futuro dessas
                meninas.
              </p>
              <ul className="listaVoluntario align-self-start">
                <li>Dê aulas para o vestibular (Exatas).</li>
                <li>Seja mentor(a) de uma jovem.</li>
                <li>Apoie na organização de eventos.</li>
                <li>Leve o MinaTech para sua empresa.</li>
              </ul>
              <a href="#cadastro" className="whiteButton mt-auto">
                Seja um voluntário
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="h-100 d-flex flex-column align-items-center px-4 py-4 fundoBranco br20">
              <h1 className="mb-4">Quero Apoiar</h1>
              <p className="fs16pt">
                Empresas, instituições e comunidades podem apoiar com estrutura,
                patrocínio, divulgação, visitas técnicas e oportunidades.
              </p>
              <ul className="listaSouAluna align-self-start">
                <li>
                  <span>Parcerias institucionais.</span>
                </li>
                <li>
                  <span>Apoio financeiro ou material.</span>
                </li>
                <li>
                  <span>Palestras, visitas e mentorias.</span>
                </li>
                <li>
                  <span>Conexão com o ecossistema de inovação.</span>
                </li>
              </ul>
              <a href="#cadastro" className="headerButton mt-auto">
                Quero apoiar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
