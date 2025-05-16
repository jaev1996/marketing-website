import { useState } from "react";
import { services } from "../data/services";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-purple-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones digitales que impulsan tu negocio
          </p>
        </div>

        {/* Grid de servicios con efecto flip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group h-64 [perspective:1000px] transition-all duration-300"
            >
              <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Frente de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-6 flex items-center justify-center [backface-visibility:hidden]">
                  <h3 className="text-2xl font-bold text-center text-gray-900">
                    {service.title}
                    <span className="block mt-2 text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Más info
                    </span>
                  </h3>
                </div>

                {/* Parte trasera de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="text-center text-white">
                    <p className="text-lg mb-4">{service.shortDescription}</p>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <span className="mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas una solución personalizada?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/30">
            Contáctanos ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;