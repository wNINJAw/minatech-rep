import "./ImpactNumbers.css";

// Componente preparado para exibir indicadores de impacto.
function ImpactNumbers() {
  // Dados usados nos cards de indicadores.
  const numbers = [
    {
      value: "+200",
      label: "meninas impactadas",
      icon: "bi-people-fill"
    },
    {
      value: "11",
      label: "instituições apoiadoras",
      icon: "bi-building-check"
    },
    {
      value: "6",
      label: "etapas na jornada",
      icon: "bi-diagram-3-fill"
    },
    {
      value: "100%",
      label: "foco em inclusão",
      icon: "bi-heart-fill"
    }
  ];

  return (
    <section className="impact-section">
      <div className="container">
        {/* Título da seção de impacto social. */}
        <div className="text-center mb-5">
          <span className="section-subtitle">Impacto</span>

          <h2 className="section-title">Indicadores do projeto</h2>

          <p className="section-description">
            O MinaTech busca gerar impacto educacional, social e profissional
            para meninas interessadas nas áreas STEM.
          </p>
        </div>

        <div className="row g-4">
          {/* Cria um card para cada indicador. */}
          {numbers.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="impact-card">
                <i className={`bi ${item.icon}`}></i>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactNumbers;
