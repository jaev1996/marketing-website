import './montserrat.css';
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Efecto de fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-900 z-0"></div>

      {/* Partículas animadas (opcional, requiere librería como tsparticles) */}
      <div className="absolute inset-0 z-1 opacity-20">
        {/* Aquí iría un componente de partículas */}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Subtítulo con efecto */}
        <p className="text-secondary mb-2 font-mono animate-pulse">
          Agencia de Marketing Digital
        </p>

        {/* Título principal con gradiente y sombra */}
        <h1 className="text-6xl md:text-7xl font-extrabold font-montserrat mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-primary drop-shadow-[0_0_10px_theme('colors.primary'/0.2)]">
            ELEVA Y DIGITALIZA
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_15px_rgba(186,197,170,0.3)]">
            TU NEGOCIO.
          </span>
        </h1>

        {/* Descripción con animación sutil */}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in">
          Hoy en día hay más personas en internet, que en la calle {" "}
          <span className="font-semibold text-primary">¿Cómo es que tu negocio no está? </span>
        </p>

        {/* Botón con hover sofisticado */}
        <button className="bg-secondary text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
          COMIENZA AHORA
        </button>

        {/* Flecha animada para scroll */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;