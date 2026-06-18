import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="footer-logo">
              <span className="logo-icon">M</span>
              MinaTech
            </div>

            <p>
              Inspirando, apoiando, acompanhando e incluindo meninas de escolas
              públicas nas áreas de Ciência, Tecnologia, Engenharia e Matemática.
            </p>
          </div>

          <div className="col-lg-3">
            <h4>Links rápidos</h4>

            <ul>
              <li>
                <a href="#projeto">Nossa missão</a>
              </li>
              <li>
                <a href="#pilares">Pilares</a>
              </li>
              <li>
                <a href="#jornada">Jornada</a>
              </li>
              <li>
                <a href="#faq">Dúvidas frequentes</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h4>Contato</h4>

            <ul>
              <li>
                <i className="bi bi-instagram"></i>
                @minatech
              </li>
              <li>
                <i className="bi bi-linkedin"></i>
                MinaTech
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                contato@minatech.org
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>
                Florianópolis, SC - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Programa MinaTech. Feito com propósito em Santa Catarina.
        </div>
      </div>
    </footer>
  );
}

export default Footer;