import Header from "./components/Header/Header";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <About />
      <Services />
      <Footer/>
    </>
  );
}

export default App;
