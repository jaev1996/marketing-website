import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Team from "./components/Team"
import MiniFAQ from "./components/MiniFAQ";

function App() {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Team />
      <MiniFAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;