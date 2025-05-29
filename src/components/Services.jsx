import { useState } from "react";
import { services } from "../data/services";
import './montserrat.css';

const Services = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="services" className="py-20 bg-white text-gray-950 font-sans">
      <div className="container mx-auto px-4">
        {/* Encabezado (se mantiene igual) */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-secondary rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            Nuestros <span className="text-secondary">Servicios</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Soluciones digitales que elevan tu negocio
          </p>
        </div>

        {/* Grid de servicios mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-82 [perspective:1000px] transition-all duration-500 hover:scale-[1.02] overflow-visible"
              style={{ WebkitPerspective: '1000px', perspective: '1000px' }}
            >
              <div
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedCards[index] ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'} shadow-xl rounded-xl`}
                style={{ WebkitTransformStyle: 'preserve-3d', transformStyle: 'preserve-3d' }}
              >
                {/* Frente de la tarjeta - Versión mejorada */}
                <div
                  className="absolute inset-0 bg-secondary rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] border-2 border-primary/30 overflow-hidden"
                  style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                >
                  {/* Efecto de fondo sutil */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-xl"></div>

                  {/* Contenedor del título con efecto */}
                  <div className="relative z-10 text-center p-4">
                    <div className="mb-3 mx-auto w-26 h-1 bg-gradient-to-r from-white/70 to-white/30 rounded-full"></div>
                    <h3 className="text-3xl font-bold text-gray-900 uppercase font-montserrat">
                      {service.title}
                    </h3>
                  </div>

                  {/* Efecto de borde animado */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-all duration-500 pointer-events-none"></div>

                  {/* Botón para móviles */}
                  <button
                    onClick={() => toggleCardFlip(index)}
                    className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/70 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-white transition-colors"
                  >
                    Ver mas
                  </button>
                </div>

                {/* Parte trasera de la tarjeta - Versión mejorada */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] text-gray-900 overflow-hidden"
                  style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                >
                  {/* Patrón de fondo sutil */}
                  <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                  <div className="relative z-10 text-center">
                    <p className="text-sm font-semibold mb-4 px-2 py-1 bg-white/70 text-gray-900 rounded-full inline-block uppercase tracking-wide shadow-sm font-montserrat">
                      {service.title}
                    </p>
                    <p className="text-base mb-4 font-medium text-gray-800 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-2 text-sm font-semibold text-gray-900">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-center bg-white/70 px-3 py-1 rounded-full shadow-sm"
                        >
                          <span className="mr-2 text-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Botón para volver en móviles */}
                    <button
                      onClick={() => toggleCardFlip(index)}
                      className="sm:hidden mt-4 bg-white/70 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-gray-100 transition-colors"
                    >
                      Volver
                    </button>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-transparent blur-md"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA (se mantiene igual) */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-800 mb-6">
            ¿Te interesa contratar algun servicio?
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-secondary to-primary text-gray-900 font-montserrat rounded-lg hover:from-primary hover:to-secondary transition-all shadow-lg hover:shadow-primary/30">
            DETALLES DE LOS SERVICIOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;