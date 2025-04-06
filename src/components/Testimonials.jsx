import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Carlos Pérez", 
      role: "CEO de ModaFashion", 
      quote: "Increíble trabajo con nuestra campaña en Instagram. En 3 meses aumentamos un 150% en ventas y nuestra comunidad creció un 300%.", 
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      results: ["+150% ventas", "+300% comunidad"]
    },
    { 
      name: "María González", 
      role: "Fundadora de EcoTienda", 
      quote: "El SEO técnico que implementaron nos posicionó en el top 3 de Google para 50+ keywords clave. Ahora recibimos tráfico cualificado constantemente.", 
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      results: ["50+ keywords top 3", "Tráfico constante"]
    },
    { 
      name: "Luis Rodríguez", 
      role: "Director de FinanzasGlobal", 
      quote: "Optimizaron nuestras campañas de Google Ads reduciendo el costo por lead en un 35% mientras aumentaban la calidad de los prospectos. ROI comprobado.", 
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      results: ["-35% costo/lead", "+90% ROI"]
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Encabezado con estilo consistente */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-600/10 text-purple-400 rounded-full text-sm font-semibold mb-4">
            Confían en nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voces de <span className="text-purple-400">nuestros clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experiencias reales que demuestran nuestro impacto
          </p>
        </div>

        {/* Grid de testimonios mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-purple-500/30 p-8"
            >
              {/* Rating con estrellas */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                  />
                ))}
              </div>

              {/* Texto del testimonio */}
              <blockquote className="text-lg italic mb-6 text-gray-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Resultados destacados */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.results.map((result, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-3 py-1 bg-purple-600/10 text-purple-400 rounded-full text-xs font-medium"
                  >
                    {result}
                  </span>
                ))}
              </div>

              {/* Perfil del cliente */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Efecto de esquina */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        {
        /* Controles de navegación (opcional para muchos testimonios) 
        <div className="flex justify-center mt-12 space-x-4">
          <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-purple-600 transition">
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-purple-600 transition">
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
        */
        }

        {/* CTA de confianza */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6">
            ¿Listo para transformar tu presencia digital como ellos?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/30"
          >
            Habla con nuestro equipo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;