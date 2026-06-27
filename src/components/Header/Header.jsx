import "./Header.css";

// Cabeçalho principal da página.
function Header() {
  return (
    <header className="container-fluid py-2">
      <div className="container-xxl">
        <div className="row">
          {/* Logo do projeto com retorno ao topo. */}
          <div className="col-lg-2 col-sm-12 d-flex justify-content-center align-items-center">
            <a href="#top" aria-label="Ir para o topo">
              <img
                src="/img/minatech-logo.png"
                alt="logo minatech"
                height="60px"
              />
            </a>
          </div>

          {/* Menu com acesso rápido às seções principais. */}
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

          {/* Botão de destaque para levar o usuário à área de participação. */}
          <div className="col-lg-2 d-lg-flex d-none justify-content-center align-items-center">
            <a href="#queroParticipar">
              <button className="headerButton" type="button">
                Inscreva-se
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
