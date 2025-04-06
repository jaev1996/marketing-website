import { useState, useEffect } from "react";

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
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-300 hover:to-purple-500 transition-all"
          >
            AgenciaX
          </a>

          {/* Menú para desktop (oculto en móviles) */}
          <ul className="hidden md:flex space-x-8">
            {["Servicios", "Nosotros", "Portafolio", "Contacto"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-white hover:text-purple-300 transition-colors duration-200"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Botón de contacto (solo desktop) */}
          <button className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-600/30">
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
            {["Servicios", "Nosotros", "Portafolio", "Contacto"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-purple-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-lg font-medium mt-2">
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