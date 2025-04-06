import { FiExternalLink, FiBarChart2 } from "react-icons/fi";

const Portfolio = () => {
  const projects = [
    { 
      title: "Campaña de Instagram para ModaLux", 
      results: [
        { metric: "+200%", description: "Engagement" },
        { metric: "+150%", description: "Conversiones" }
      ],
      description: "Estrategia de contenido visual que posicionó a la marca como líder en el sector moda.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      link: "#"
    },
    { 
      title: "SEO para TiendaDeportiva.com", 
      results: [
        { metric: "50+", description: "Keywords top 3" },
        { metric: "3.2x", description: "Tráfico orgánico" }
      ],
      description: "Optimización técnica y de contenido para e-commerce de artículos deportivos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      link: "#"
    },
    { 
      title: "Google Ads para BancoCapital", 
      results: [
        { metric: "-35%", description: "Costo por lead" },
        { metric: "+90%", description: "ROI campañas" }
      ],
      description: "Reestructuración completa de cuentas publicitarias para sector financiero.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      link: "#"
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado con estilo consistente */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Resultados Comprobados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-purple-600">Éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proyectos reales donde hemos generado impacto medible
          </p>
        </div>

        {/* Grid de proyectos mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
            >
              {/* Imagen con overlay */}
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Badge de resultados */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.results.map((result, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center px-3 py-1 bg-purple-600/10 text-purple-600 rounded-full text-xs font-medium"
                    >
                      <FiBarChart2 className="mr-1" />
                      {result.metric} {result.description}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;