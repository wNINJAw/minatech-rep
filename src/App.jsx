import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import About from "./components/About/About";
import Pillars from "./components/Pillars/Pillars";
import Journey from "./components/Journey/Journey";
import Join from "./components/Join/Join";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Partners />
        <About />
        <Pillars />
        <Journey />
        <Join />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default App;
