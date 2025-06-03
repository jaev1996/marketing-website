import './montserrat.css';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
          alt="Marketing Digital Background"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Overlay oscuro para mantener legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/85 to-gray-950/90"></div>
      </div>

      {/* Efecto de fondo degradado adicional */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-900/40 z-1"></div>

      {/* Partículas animadas flotantes */}
      <div className="absolute inset-0 z-2 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Subtítulo con efecto */}
        <p className="text-secondary mb-2 font-mono animate-pulse">
          Agencia de Marketing Digital
        </p>

        {/* Título principal con gradiente y sombra */}
        <h1 className="text-6xl md:text-7xl font-extrabold font-montserrat mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary drop-shadow-[0_0_10px_theme('colors.primary'/0.2)]">
            ELEVA Y DIGITALIZA
          </span>
          <br />
          <span className="text-white drop-shadow-[0_0_15px_rgba(181,220,202,0.3)]">
            TU NEGOCIO
          </span>
        </h1>

        {/* Descripción con animación sutil */}
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in">
          Hoy en día hay más personas en internet, que en la calle {" "}
          <span className="font-semibold text-secondary">¿Cómo es que tu negocio no está? </span>
        </p>

        {/* Botón con hover sofisticado */}
        <button className="bg-secondary text-gray-900 font-montserrat px-6 py-4 rounded-lg font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/20 transform hover:scale-105">
          COMIENZA AHORA
        </button>

        {/* Flecha animada para scroll */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-secondary"
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

      {/* Elementos decorativos adicionales */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent z-5"></div>
    </section>
  );
};

export default Hero;