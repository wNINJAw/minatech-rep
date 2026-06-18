import "./Partners.css";

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