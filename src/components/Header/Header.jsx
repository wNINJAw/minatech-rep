import "./Header.css";

function Header() {
  return (
    <header className="header-minatech">
      <nav className="navbar navbar-expand-lg fixed-top navbar-minatech">
        <div className="container">
          <a className="navbar-brand logo-minatech" href="#inicio">
            <span className="logo-icon">M</span>
            MinaTech
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuMinaTech"
            aria-controls="menuMinaTech"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuMinaTech">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#projeto">
                  O projeto
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#pilares">
                  Pilares
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#jornada">
                  Jornada
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#cadastro">
                  Cadastro
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  Dúvidas
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a className="btn-minatech btn-header" href="#cadastro">
                  Inscreva-se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;