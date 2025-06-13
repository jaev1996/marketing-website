import { useState, useCallback, memo } from "react";
import { services } from "../data/services";
import './montserrat.css';

// Tarjeta de servicio optimizada con React.memo
const ServiceCard = memo(function ServiceCard({ service, index, flipped, onFlip }) {
  return (
    <div
      className="group h-82 transition-all duration-500 hover:scale-[1.02] overflow-visible will-change-transform"
      style={{
        perspective: '1000px',
        WebkitPerspective: '1000px',
      }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 shadow-xl rounded-xl"
        style={{
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          WebkitTransform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
          WebkitTransition: '-webkit-transform 0.7s cubic-bezier(0.4,0,0.2,1)',
          willChange: 'transform',
        }}
        onMouseEnter={() => {
          if (window.innerWidth >= 640) onFlip(index, true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 640) onFlip(index, false);
        }}
      >
        {/* Frente de la tarjeta */}
        <div
          className="absolute inset-0 bg-secondary rounded-xl p-6 flex flex-col items-center justify-center border-2 border-primary/30 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
            WebkitTransform: 'rotateY(0deg)',
          }}
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-xl"></div>
          <div className="relative z-10 text-center p-4">
            <div className="mb-3 mx-auto w-26 h-1 bg-gradient-to-r from-white/70 to-white/30 rounded-full"></div>
            <h3 className="text-3xl font-bold text-gray-900 uppercase font-montserrat-bold">
              {service.title}
            </h3>
          </div>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/80 rounded-xl transition-all duration-500 pointer-events-none"></div>
          <button
            onClick={() => onFlip(index, !flipped)}
            className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/70 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-white transition-colors"
          >
            Ver más
          </button>
        </div>
        {/* Parte trasera de la tarjeta */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl p-6 flex flex-col justify-center text-gray-900 overflow-hidden border-2 border-primary/20"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            WebkitTransform: 'rotateY(180deg)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-alternative to-secondary"></div>
          <div className="relative z-10 text-center">
            <div className="mb-6">
              <h4 className="text-lg font-bold text-secondary uppercase tracking-wide font-montserrat-bold mb-2">
                {service.title}
              </h4>
              <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-secondary/80 mx-auto"></div>
            </div>
            <div className="bg-white/70 rounded-lg p-1 shadow-sm border border-gray-200/50">
              <p className="text-sm text-gray-700 leading-relaxed font-montserrat-regular">
                {service.description}
              </p>
            </div>
            <button
              onClick={() => onFlip(index, !flipped)}
              className="sm:hidden mt-4 bg-secondary text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-secondary/80 transition-colors"
            >
              Volver
            </button>
          </div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
});

const Services = () => {
  const [flippedCards, setFlippedCards] = useState({});

  // Memoiza la función para evitar recrearla en cada render
  const toggleCardFlip = useCallback((index, value) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: value,
    }));
  }, []);

  return (
    <section id="services" className="py-20 bg-white text-gray-950 font-sans">
      <div className="container mx-auto px-4">
        {/* Encabezado (se mantiene igual) */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-secondary rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat-bold">
            Nuestros <span className="text-secondary">Servicios</span>
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto font-montserrat-regular">
            Soluciones digitales que elevan tu negocio
          </p>
        </div>
        {/* Grid de servicios optimizada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              flipped={!!flippedCards[index]}
              onFlip={toggleCardFlip}
            />
          ))}
        </div>
        {/* CTA (se mantiene igual) */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-800 mb-6">
            ¿Te interesa contratar algún servicio?
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-secondary text-gray-900 font-montserrat-bold rounded-lg hover:bg-secondary/80 transition-all shadow-lg hover:shadow-secondary/30 transform hover:scale-105">
            DETALLES DE LOS SERVICIOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;