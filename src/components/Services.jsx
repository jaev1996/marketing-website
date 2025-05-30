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

        {/* Grid de servicios optimizado para Safari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-82 transition-all duration-500 hover:scale-[1.02] overflow-visible"
              style={{
                perspective: '1000px',
                WebkitPerspective: '1000px'
              }}
            >
              <div
                className="relative h-full w-full transition-transform duration-700 shadow-xl rounded-xl"
                style={{
                  transformStyle: 'preserve-3d',
                  WebkitTransformStyle: 'preserve-3d',
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  WebkitTransform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  transition: 'transform 0.7s',
                  WebkitTransition: '-webkit-transform 0.7s'
                }}
                onMouseEnter={() => {
                  if (window.innerWidth >= 640) { // Solo en desktop
                    setFlippedCards(prev => ({ ...prev, [index]: true }));
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 640) { // Solo en desktop
                    setFlippedCards(prev => ({ ...prev, [index]: false }));
                  }
                }}
              >
                {/* Frente de la tarjeta - Versión mejorada */}
                <div
                  className="absolute inset-0 bg-secondary rounded-xl p-6 flex flex-col items-center justify-center border-2 border-primary/30 overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    WebkitTransform: 'rotateY(0deg)'
                  }}
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
                    Ver más
                  </button>
                </div>

                {/* Parte trasera de la tarjeta - MEJORADA */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl p-6 flex flex-col justify-center text-gray-900 overflow-hidden border-2 border-primary/20"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    WebkitTransform: 'rotateY(180deg)'
                  }}
                >
                  {/* Patrón geométrico de fondo */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-primary rotate-45"></div>
                    <div className="absolute top-8 right-6 w-6 h-6 bg-secondary rounded-full"></div>
                    <div className="absolute bottom-6 left-8 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-secondary rotate-12"></div>
                  </div>

                  {/* Banda decorativa superior */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-alternative to-secondary"></div>

                  <div className="relative z-10 text-center px-2">
                    {/* Título destacado */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-secondary uppercase tracking-wide font-montserrat mb-2">
                        {service.title}
                      </h4>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                    </div>

                    {/* Descripción con mejor tipografía */}
                    <div className="bg-white/70 rounded-lg p-4 shadow-sm border border-gray-200/50">
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Botón de acción */}
                    <div className="mt-6">
                      <div className="inline-flex items-center text-xs font-semibold text-gray-800 bg-secondary/30 px-3 py-1.5 rounded-full">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
                        Servicio Disponible
                      </div>
                    </div>

                    {/* Botón para volver en móviles */}
                    <button
                      onClick={() => toggleCardFlip(index)}
                      className="sm:hidden mt-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-primary/90 transition-colors"
                    >
                      Volver
                    </button>
                  </div>

                  {/* Efecto de brillo sutil */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA (se mantiene igual) */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-800 mb-6">
            ¿Te interesa contratar algún servicio?
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