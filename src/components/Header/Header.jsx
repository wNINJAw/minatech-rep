import "./Header.css";

function Header() {
  return (
    <header className="container-fluid py-2 header-minatech">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-2 col-sm-12 d-flex justify-content-center align-items-center">
            <a href="#top" aria-label="Ir para o topo">
              <img
                src="/img/minatech-logo.png"
                alt="logo minatech"
                className="header-logo"
              />
            </a>
          </div>

          <div className="col-lg-8 col-sm-12 d-flex justify-content-center align-items-center mt-1">
            <nav className="headerNav" aria-label="Navegação principal">
              <ul className="nav">
                <li>
                  <a href="#oProjeto">O projeto</a>
                </li>
                <li>
                  <a href="#osPilares">Pilares</a>
                </li>
                <li>
                  <a href="#aJornada">Jornada</a>
                </li>
                <li>
                  <a href="#asDuvidas">Dúvidas</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-2 d-lg-flex d-none justify-content-center align-items-center">
            <a href="#queroParticipar" className="headerButton">
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
