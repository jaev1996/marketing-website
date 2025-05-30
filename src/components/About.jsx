import './montserrat.css';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Columna de texto con jerarquía mejorada */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge de introducción */}
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
              ¡Eleva tu Presencia Digital con Nosotros!
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-montserrat text-white">
              ¿Quienes Somos?
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                En un mundo saturado de promesas vacías y falsas expectativas, en Eleva nos destacamos por nuestra transparencia, y compromiso firme con tu marca.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestro enfoque se basa en desarrollar ideas creativas que no solo captan atención, si no que convierten. Porque entendemos que lo realmente importante son los resultados tangibles y medibles.
              </p>

              {/* Lista de valores con iconos */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Transparencia en resultados",
                  "Equipo calificado",
                  "Respuesta inmediata",
                  "Atención constante"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Datos estadísticos (opcional) */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center group transition-all">
                <p className="text-3xl font-bold text-secondary font-montserrat transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_12px_theme('colors.secondary')] cursor-pointer">
                  +50
                </p>
                <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-white">Clientes satisfechos</p>
              </div>
              <div className="text-center group transition-all">
                <p className="text-3xl font-bold text-secondary font-montserrat transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_12px_theme('colors.secondary')] cursor-pointer">
                  +120
                </p>
                <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-white">Proyectos exitosos</p>
              </div>
            </div>
          </div>

          {/* Columna de imagen con overlay profesional */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Equipo de AgenciaX trabajando"
                className="w-full h-auto object-cover aspect-video lg:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-secondary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;