const About = () => {
    return (
      <section id="about" className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Columna de texto con jerarquía mejorada */}
            <div className="lg:w-1/2 space-y-8">
              {/* Badge de introducción */}
              <span className="inline-block px-4 py-2 bg-purple-600/10 text-purple-400 rounded-full text-sm font-semibold">
                Desde 2020
              </span>
  
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Más que una agencia, somos tu <span className="text-purple-400">aliado estratégico</span>
              </h2>
  
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Con sede en Venezuela y alcance global, ayudamos a empresas a conquistar mercados internacionales mediante estrategias digitales <strong>medibles y escalables</strong>.
                </p>
  
                {/* Lista de valores con iconos */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Transparencia en resultados",
                    "Enfoque data-driven",
                    "Equipo certificado",
                    "Soporte 24/7"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
  
              {/* Datos estadísticos (opcional) */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">+50</p>
                  <p className="text-gray-400 text-sm">Clientes satisfechos</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">+120</p>
                  <p className="text-gray-400 text-sm">Proyectos exitosos</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-purple-900/20"></div>
              </div>
  
              {/* Sello de calidad (opcional) */}
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 px-6 py-3 rounded-lg shadow-lg border border-purple-300 hidden lg:block">
                <p className="font-bold text-sm">Certificados por:</p>
                <p className="text-xs">Google Partners • Meta Blueprint</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;