import { FiStar } from "react-icons/fi";
import { useState } from "react";
import './montserrat.css';

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      name: "Carlos Pérez",
      role: "CEO de ModaFashion",
      quote: "Increíble trabajo con nuestra campaña en Instagram. En 3 meses aumentamos un 150% en ventas.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      rating: 5,
      results: ["+150% ventas", "+300% comunidad"]
    },
    {
      name: "María González",
      role: "Directora de Marketing",
      quote: "La estrategia de contenidos revolucionó nuestro engagement en redes sociales.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      results: ["+200% engagement", "+120% seguidores"]
    },
    {
      name: "Javier Rodríguez",
      role: "Fundador de TechStart",
      quote: "El rediseño de nuestra identidad visual capturó perfectamente nuestra esencia innovadora.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      results: ["+90% reconocimiento", "Premio al mejor diseño"]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Confían en nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            Voces de <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experiencias reales que reflejan nuestro compromiso
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-primary/30"
            >
              {/* Testimonio sin video */}
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-gray-300">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-primary mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6">
            ¿Listo para transformar tu presencia digital como ellos?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-secondary to-primary text-gray-900 px-8 py-3 rounded-lg font-bold hover:from-primary hover:to-secondary transition-all shadow-lg hover:shadow-primary/30"
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