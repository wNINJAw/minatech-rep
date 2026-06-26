import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="container-fluid fundoPcbVermelha">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 col-sm-12 m-auto d-flex flex-column py-5 gap-4 justify-content-center align-items-center text-center">
              <h1 className="mt-5 fs32pt fw600">O futuro é feminino.</h1>
              <p className="fs16pt">
                Não espere o mundo mudar sozinho. Junte-se a nós hoje e faça
                parte da engrenagem que está construindo um ecossistema mais
                diverso e inovador.
              </p>
              <a href="#queroParticipar">
                <button className="headerButton mb-4 mt-3" type="button">
                  Faça parte agora
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="container-fluid pt-5 fundoPreto">
        <div className="container-xxl d-flex flex-wrap justify-content-center">
          <div className="col-lg-6 col-sm-12">
            <img src="/img/minatech-logo.png" width="120px" alt="" />
            <p className="mt-4 fs14pt">
              Inspirando, Apoiando, Acompanhando e Incluindo meninas de escolas
              públicas nas áreas de Ciência, Tecnologia, Engenharia e
              Matemática.
            </p>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h3 className="corVermelhoMinatech">Links Rápidos</h3>
            <ul className="fs14pt">
              <li>Nossa missão</li>
              <li>O método</li>
              <li>A jornada</li>
              <li>Dúvidas Frequentes</li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h3 className="corVermelhoMinatech">Contato</h3>
            <ul className="fs14pt">
              <li>Instagram @minatech</li>
              <li>linkedin</li>
              <li>contato@minatech.org</li>
              <li>Florianópolis, SC - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="row text-center pt-5 pb-3">
          <hr />
          <div className="col-12">
            <span className="fw600 cor333">
              © 2026 Programa MinaTech. Feito com propósito em SC.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
