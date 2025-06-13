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

  // Definir el array de secciones con nombre en español y href correcto
  const navLinks = [
    { label: 'Servicios', href: '#services' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Equipo', href: '#team' },
    { label: 'FAQ', href: '#minifaq' },
    { label: 'Contacto', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-xl" : "bg-gray-950 py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo con efecto hover */}
          <a
            href="#"
            className="flex items-center group"
            style={{ minHeight: '48px' }}
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('body');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <img
              src="/eleva.png"
              alt="Logo ELEVA"
              className="h-12 w-auto transition-all duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_16px_var(--tw-shadow-color)]"
              style={{
                filter: 'drop-shadow(0 0 0 transparent)',
                '--tw-shadow-color': 'rgba(186,197,170,0.7)'
              }}
            />
          </a>

          {/* Menú para desktop (oculto en móviles) */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative group text-white font-montserrat-regular hover:text-secondary transition-colors duration-200"
                  onClick={e => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const el = document.querySelector(item.href === '#' ? 'body' : item.href);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-secondary transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Botón de contacto (solo desktop) */}
          <button className="hidden md:block bg-secondary text-gray-900 font-montserrat-bold px-6 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20">
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
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block py-2 text-white font-montserrat-regular hover:text-secondary transition-colors"
                  onClick={e => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const el = document.querySelector(item.href === '#' ? 'body' : item.href);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full bg-secondary text-gray-900 font-montserrat-bold px-4 py-2 rounded-lg font-medium mt-2 hover:bg-secondary/80 transition-colors shadow-lg hover:shadow-secondary/30">
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