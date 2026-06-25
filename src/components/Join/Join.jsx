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

        <div className="row d-flex gap-5 justify-content-center">
          <article className="col-lg-5 col-sm-12 d-flex flex-column align-items-center px-5 py-4 fundoBranco br20">
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
            <button className="headerButton" type="button">
              Inscrever-se no programa
            </button>
          </article>

          <article className="col-lg-5 col-sm-12 d-flex flex-column align-items-center px-5 py-4 br20 fundoGradientevermelho">
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
            <button className="whiteButton" type="button">
              Seja um voluntário
            </button>
          </article>
=======
    <section id="participar" className="join-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Participe</span>

          <h2 className="section-title">Faça parte do movimento</h2>

          <p className="section-description">
            Seja para aprender ou para ensinar, o MinaTech tem espaço para você.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="join-card">
              <div className="join-icon">
                <i className="bi bi-mortarboard-fill"></i>
              </div>

              <h3>Sou aluna</h3>

              <p>
                Está no Ensino Médio de escola pública e quer explorar o mundo
                da tecnologia, ciência e engenharia? Venha com a gente construir
                seu futuro.
              </p>

              <ul>
                <li>Totalmente gratuito.</li>
                <li>Aulas preparatórias e material de apoio.</li>
                <li>Visitas a empresas e universidades.</li>
                <li>Contato direto com profissionais da área.</li>
              </ul>

              <a href="#cadastro" className="btn-minatech">
                Inscrever-se no programa
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="join-card join-card-dark">
              <div className="join-icon">
                <i className="bi bi-person-heart"></i>
              </div>

              <h3>Quero ser voluntário</h3>

              <p>
                Você é professor, universitário ou profissional de tecnologia?
                Doe seu tempo e conhecimento para transformar o futuro dessas meninas.
              </p>

              <ul>
                <li>Dê aulas para vestibular e ENEM.</li>
                <li>Seja mentor ou mentora de uma jovem.</li>
                <li>Apoie na organização de eventos.</li>
                <li>Leve o MinaTech para sua empresa.</li>
              </ul>

              <a href="#cadastro" className="btn-outline-light-custom">
                Seja voluntário
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


export default Join;

export default Join;
