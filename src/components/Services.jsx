import { FiArrowRight, FiBarChart2, FiShare2, FiDollarSign, FiFilm, FiMail, FiCode, FiShoppingCart } from "react-icons/fi";

const Services = () => {
  const services = [
    { 
      title: "SEO Avanzado", 
      description: "Posicionamiento estratégico en buscadores para aumentar tu visibilidad orgánica.",
      icon: <FiBarChart2 className="w-8 h-8" />,
      features: ["Keyword research", "Optimización On-Page", "Link building"]
    },
    { 
      title: "Redes Sociales", 
      description: "Gestión profesional de tus plataformas sociales para engagement real.",
      icon: <FiShare2 className="w-8 h-8" />,
      features: ["Content planning", "Community management", "Analítica avanzada"]
    },
    { 
      title: "Publicidad Digital", 
      description: "Campañas performance en Meta, Google y TikTok con ROI medible.",
      icon: <FiDollarSign className="w-8 h-8" />,
      features: ["Audiencias segmentadas", "A/B Testing", "Remarketing"]
    },
    { 
      title: "Video Marketing", 
      description: "Producción de contenido audiovisual para redes y publicidad.",
      icon: <FiFilm className="w-8 h-8" />,
      features: ["Motion graphics", "Reels/TikToks", "Video casos de éxito"]
    },
    { 
      title: "Email Marketing", 
      description: "Campañas automatizadas que convierten leads en clientes.",
      icon: <FiMail className="w-8 h-8" />,
      features: ["Diseño responsive", "Automatizaciones", "Analítica en tiempo real"]
    },
    { 
      title: "Desarrollo Web", 
      description: "Landing pages y sitios web optimizados para conversiones.",
      icon: <FiCode className="w-8 h-8" />,
      features: ["Mobile-first", "SEO integrado", "High performance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado con estilo mejorado */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluciones <span className="text-purple-600">a Medida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servicios diseñados para escalar tu negocio en el entorno digital
          </p>
        </div>

        {/* Grid de servicios adaptable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
            >
              <div className="p-8">
                {/* Icono con gradiente */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 text-white group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                {/* Lista de características */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botón con flecha animada */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
                >
                  Saber más
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Efecto hover sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>

        {/* CTA adicional para muchos servicios */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas algo más específico? Tenemos soluciones personalizadas.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/30">
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;