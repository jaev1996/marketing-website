import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import './montserrat.css';

const Footer = () => {
  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { name: "SEO y Posicionamiento", href: "#services" },
        { name: "Publicidad Digital", href: "#services" },
        { name: "Redes Sociales", href: "#services" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Portafolio", href: "#portfolio" },
        { name: "Testimonios", href: "#testimonials" }
      ]
    }
  ];

  return (
    <footer className="bg-black text-[#cad2bd] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Columna logo + descripción */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary font-montserrat">
                ELEVA
              </h2>
            </div>
            <p className="mb-6 text-white">Soluciones digitales que impulsan tu crecimiento en mercados globales.</p>

            {/* Redes sociales con iconos */}
            <div className="flex space-x-4">
              {[
                { icon: <FiInstagram className="w-5 h-5" />, href: "https://instagram.com/eleva_digital", label: "Instagram de ELEVA" },
                { icon: <FiFacebook className="w-5 h-5" />, href: "https://facebook.com/elevadigital", label: "Facebook de ELEVA" },
                { icon: <FaXTwitter className="w-5 h-5" />, href: "https://tiktok.com/@eleva_digital", label: "TikTok de ELEVA" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-secondary/10 rounded-full hover:bg-secondary hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                  target="_blank" rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de enlaces */}
          {footerLinks.slice(0, 2).map((column, index) => (
            <div key={index}>
              <h3 className="text-secondary font-bold text-lg mb-4 font-montserrat">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.filter(link =>
                  (column.title === "Servicios" && [
                    "SEO y Posicionamiento",
                    "Publicidad Digital",
                    "Redes Sociales"
                  ].includes(link.name)) ||
                  (column.title === "Empresa" && link.name !== "Blog")
                ).map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-white hover:text-secondary transition-colors flex items-start"
                    >
                      <span className="w-1 h-1 bg-white rounded-full mt-2 mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna de contacto (en vez de legal) */}
          <div>
            <h3 className="text-secondary font-bold text-lg mb-4 font-montserrat">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">contacto@agencix.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="w-5 h-5 text-white mr-2 mt-0.5" />
                <span className="text-white">+58 424 2368587</span>
              </li>
            </ul>
          </div>
        </div>

        {/* División y copyright */}
        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-secondary">
              &copy; {new Date().getFullYear()} ELEVA. Todos los derechos reservados.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-primary items-center">
              <div className="flex items-center gap-2">
                <FiMail className="w-4 h-4" /> contacto@agencix.com
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" /> +58 424 2368587
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;