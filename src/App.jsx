import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import About from "./components/About/About";
import Pillars from "./components/Pillars/Pillars";
import Journey from "./components/Journey/Journey";
import Join from "./components/Join/Join";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

// Componente principal que organiza todas as seções da página.
function App() {
  return (
    <>
      {/* Cabeçalho fixo com logo, menu e botão de inscrição. */}
      <Header />

      {/* Estrutura principal da página institucional do projeto. */}
      <main>
        {/* Apresentação inicial do projeto. */}
        <Hero />
        {/* Lista de parceiros e apoiadores. */}
        <Partners />
        {/* Texto sobre a missão do MinaTech. */}
        <About />
        {/* Pilares de atuação do programa. */}
        <Pillars />
        {/* Cronograma e etapas da jornada. */}
        <Journey />
        {/* Chamadas para inscrição, voluntariado e parceria. */}
        <Join />
        {/* Formulário funcional de cadastro. */}
        <RegisterForm />
        {/* Perguntas frequentes do projeto. */}
        <FAQ />
      </main>

      {/* Chamada final e informações de contato. */}
      <Footer />
    </>
  );
}

export default App;
