import { useState } from "react";
import { services } from "../data/services";

const Services = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="services" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado (se mantiene igual) */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-100 rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-emerald-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones digitales que impulsan tu negocio
          </p>
        </div>

        {/* Grid de servicios mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-72 [perspective:1000px] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${flippedCards[index] ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'} shadow-xl rounded-xl`}>
                {/* Frente de la tarjeta - Versión mejorada */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] border-2 border-emerald-100 overflow-hidden">
                  {/* Efecto de fondo sutil */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500 opacity-10 rounded-full blur-xl"></div>

                  {/* Contenedor del título con efecto */}
                  <div className="relative z-10 text-center p-4">
                    <div className="mb-3 mx-auto w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                    <h3 className="text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800">
                      {service.title}
                    </h3>
                  </div>

                  {/* Efecto de borde animado */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-300 rounded-xl transition-all duration-500 pointer-events-none"></div>

                  {/* Botón para móviles */}
                  <button
                    onClick={() => toggleCardFlip(index)}
                    className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    Ver detalles
                  </button>
                </div>

                {/* Parte trasera de la tarjeta - Versión mejorada */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] text-white overflow-hidden">
                  {/* Patrón de fondo sutil */}
                  <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

                  <div className="relative z-10 text-center">
                    <p className="text-sm font-medium mb-4 px-2 py-1 bg-emerald-800/50 rounded-full inline-block">
                      {service.title}
                    </p>
                    <p className="text-base mb-4 font-light">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-2 text-sm font-medium">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center justify-center bg-emerald-800/30 px-3 py-1 rounded-full"
                        >
                          <span className="mr-2 text-emerald-300">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Botón para volver en móviles */}
                    <button
                      onClick={() => toggleCardFlip(index)}
                      className="sm:hidden mt-4 bg-white text-emerald-800 px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-gray-100 transition-colors"
                    >
                      Volver
                    </button>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-transparent blur-md"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA (se mantiene igual) */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas una solución personalizada?
          </p>
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-8 py-3 rounded-lg font-bold hover:from-emerald-700 hover:to-emerald-900 transition-all shadow-lg hover:shadow-emerald-500/30">
            Contáctanos ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;