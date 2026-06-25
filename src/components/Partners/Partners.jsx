import "./Partners.css";

const partners = [
  "Corali",
  "Engenheiros Sem Fronteiras",
  "Neoway",
  "UFSC",
  "HOGAR",
  "Be.Diverse",
  "Morro do Silício",
  "Me Salva!",
  "SENAI",
  "CREDCREA",
  "Cursinho Delta",
];

function Partners() {
  return (
    <section className="container-fluid fundoBranco partners-section">
      <div className="container-xxl mt-5 pt-5 pb-4 text-center">
        <div className="row">
          <div className="d-flex flex-column justify-content-center align-items-center m-auto col-12">
            <h5>Apoiado e reconhecido por instituições de peso</h5>
            <ul className="links mt-5">
              {partners.map((partner) => (
                <li key={partner}>
                  <a href="#top">{partner}</a>
                </li>
              ))}
            </ul>
          </div>
=======
function Partners() {
  const partners = [
    "Corali",
    "Engenheiros Sem Fronteiras",
    "Neoway",
    "UFSC",
    "HOGAR",
    "Be.Diverse",
    "Morro do Silício",
    "Me Salva!",
    "SENAI",
    "CREDCREA",
    "Cursinho Delta"
  ];

  return (
    <section className="partners-section">
      <div className="container text-center">
        <span className="section-subtitle">Rede de apoio</span>

        <h2 className="partners-title">
          Apoiado e reconhecido por instituições de peso
        </h2>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-item" key={index}>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
=======
export default Partners;
