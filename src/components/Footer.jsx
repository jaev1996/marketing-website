import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin, FiYoutube, FiMail, FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { name: "SEO y Posicionamiento", href: "#services" },
        { name: "Publicidad Digital", href: "#services" },
        { name: "Redes Sociales", href: "#services" },
        { name: "Desarrollo Web", href: "#services" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "#about" },
        { name: "Portafolio", href: "#portfolio" },
        { name: "Testimonios", href: "#testimonials" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "#" },
        { name: "Términos de Servicio", href: "#" },
        { name: "Aviso Legal", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Columna logo + descripción */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                AgenciaX
              </h2>
            </div>
            <p className="mb-6">Soluciones digitales que impulsan tu crecimiento en mercados globales.</p>
            
            {/* Redes sociales con iconos */}
            <div className="flex space-x-4">
              {[
                { icon: <FiFacebook className="w-5 h-5" />, href: "#" },
                { icon: <FiInstagram className="w-5 h-5" />, href: "#" },
                { icon: <FiLinkedin className="w-5 h-5" />, href: "#" },
                { icon: <FaXTwitter className="w-5 h-5" />, href: "#" },
                { icon: <FiYoutube className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                  aria-label={`${social.icon.type.displayName} de AgenciaX`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de enlaces */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="hover:text-purple-400 transition-colors flex items-start"
                    >
                      <span className="w-1 h-1 bg-purple-500 rounded-full mt-2 mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Columna de contacto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="w-5 h-5 text-purple-400 mr-2 mt-0.5" />
                <span>contacto@agencix.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="w-5 h-5 text-purple-400 mr-2 mt-0.5" />
                <span>+58 412 5555555</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 text-purple-400 mr-2 mt-0.5" />
                <span>Av. Principal, Caracas, Venezuela</span>
              </li>
            </ul>
          </div>
        </div>

        {/* División y copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AgenciaX. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition">Política de Cookies</a>
              <a href="#" className="hover:text-purple-400 transition">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;