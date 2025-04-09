import { FiArrowRight, FiBarChart2, FiShare2, FiDollarSign, FiFilm, FiMail, FiCode, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { services } from "../data/services";

// Mapeo de strings de iconos a componentes
const iconComponents = {
  FiBarChart2: FiBarChart2,
  FiShare2: FiShare2,
  FiDollarSign: FiDollarSign,
  FiFilm: FiFilm,
  FiMail: FiMail,
  FiCode: FiCode
};

const Services = () => {
  const [activeSlides, setActiveSlides] = useState({});

  const nextSlide = (serviceIndex) => {
    setActiveSlides(prev => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] || 0) < services[serviceIndex].media.length - 1
        ? (prev[serviceIndex] || 0) + 1
        : 0
    }));
  };

  const prevSlide = (serviceIndex) => {
    setActiveSlides(prev => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] || 0) > 0
        ? (prev[serviceIndex] || 0) - 1
        : services[serviceIndex].media.length - 1
    }));
  };

  return (
    <section id="services" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
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

        {/* Grid de servicios - 2 por fila en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return ( // Asegúrate de usar "return" aquí
              <div
                key={index}
                className="group relative bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 h-full"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Carrusel (40% ancho en desktop) */}
                  <div className="lg:w-4/5 relative overflow-hidden">
                    <div className="relative h-64 lg:h-full">
                      {service.media.map((item, i) => (
                        <div
                          key={i}
                          className={`absolute inset-0 transition-opacity duration-500 ${i === (activeSlides[index] || 0) ? "opacity-100" : "opacity-0"
                            }`}
                        >
                          <img
                            src={item.url}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Controles del carrusel */}
                    {service.media.length > 1 && (
                      <>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {service.media.map((_, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                setActiveSlides((prev) => ({ ...prev, [index]: i }))
                              }
                              className={`w-2 h-2 rounded-full transition-all ${i === (activeSlides[index] || 0)
                                  ? "bg-purple-500 w-4"
                                  : "bg-gray-400"
                                }`}
                              aria-label={`Ir a slide ${i + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => prevSlide(index)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-purple-600 transition"
                          aria-label="Anterior"
                        >
                          <FiChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => nextSlide(index)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-purple-600 transition"
                          aria-label="Siguiente"
                        >
                          <FiChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Contenido (60% ancho en desktop) */}
                  <div className="lg:w-3/5 p-6 flex flex-col">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 text-white group-hover:rotate-6 transition-transform mx-auto lg:mx-0">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 text-center lg:text-left">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center lg:text-left">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-5 flex-grow">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
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