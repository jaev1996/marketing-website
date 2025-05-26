import { useState, useEffect } from "react";
import './montserrat.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-xl" : "bg-gray-950 py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo con efecto hover */}
          <a
            href="#"
            className="text-2xl font-bold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-[#bac5aa] to-[#cad2bd] hover:from-[#cad2bd] hover:to-[#bac5aa] transition-all"
          >
            ELEVA
          </a>

          {/* Menú para desktop (oculto en móviles) */}
          <ul className="hidden md:flex space-x-8">
            {['Servicios', 'Nosotros', 'Portafolio', 'Contacto'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-white font-montserrat hover:text-[#bac5aa] transition-colors duration-200"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#cad2bd] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Botón de contacto (solo desktop) */}
          <button className="hidden md:block bg-gradient-to-r from-[#bac5aa] to-[#cad2bd] text-gray-900 font-montserrat px-6 py-2 rounded-lg font-medium hover:from-[#cad2bd] hover:to-[#bac5aa] transition-all shadow-lg hover:shadow-[#cad2bd]/30">
            ¡Hablemos!
          </button>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil (animado) */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
          <ul className="flex flex-col space-y-4 py-4">
            {['Servicios', 'Nosotros', 'Portafolio', 'Contacto'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white font-montserrat hover:text-[#bac5aa] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full bg-gradient-to-r from-[#bac5aa] to-[#cad2bd] text-gray-900 font-montserrat px-4 py-2 rounded-lg font-medium mt-2 hover:from-[#cad2bd] hover:to-[#bac5aa]">
                Contactar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;