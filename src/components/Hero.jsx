const Hero = () => {
  return (
    <section className="relative bg-gray-950 text-white min-h-screen flex items-center overflow-hidden">
      {/* Efecto de fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-950 z-0"></div>
      
      {/* Partículas animadas (opcional, requiere librería como tsparticles) */}
      <div className="absolute inset-0 z-1 opacity-20">
        {/* Aquí iría un componente de partículas */}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Subtítulo con efecto */}
        <p className="text-purple-300 mb-2 font-mono animate-pulse">
          Agencia de Marketing Digital
        </p>

        {/* Título principal con gradiente y sombra */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Impulsa tu negocio
          </span> 
          <br />
          <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            al siguiente nivel
          </span>
        </h1>

        {/* Descripción con animación sutil */}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in">
          Soluciones <span className="font-semibold text-purple-300">personalizadas</span> para escalar tu marca en el mercado global.
        </p>

        {/* Botón con hover sofisticado */}
        <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30">
          Comienza tu proyecto ahora
        </button>

        {/* Flecha animada para scroll */}
        <div className="mt-20 animate-bounce">
          <svg className="w-8 h-8 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;