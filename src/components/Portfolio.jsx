import { FiArrowRight } from "react-icons/fi";
import './montserrat.css';

const Portfolio = () => {
  // Logos de clientes reales (archivos locales en public/marcas)
  const clients = [
    { name: "Almendrina", logo: "/marcas/almendrina.png" },
    { name: "Arisa", logo: "/marcas/arisa-8.png" },
    { name: "Bellisima", logo: "/marcas/bellisima-8.png" },
    //{ name: "Bellisima (Negro)", logo: "/marcas/bellisima-negro-8.png" },
    { name: "Brasero", logo: "/marcas/brasero-8.png" },
    { name: "Contrucolor", logo: "/marcas/contrucolor-8.png" },
    { name: "Dibar", logo: "/marcas/dibar-8.png" },
    { name: "Green City", logo: "/marcas/GREEN CITY 1-8.png" },
    { name: "Lola Original", logo: "/marcas/lola-original-8.png" },
    { name: "Mapa", logo: "/marcas/mapa-8.png" },
    { name: "Once (Negro)", logo: "/marcas/ONCE NEGRO.png" },
    { name: "Once", logo: "/marcas/once-8.png" },
    { name: "Polemico", logo: "/marcas/polemico-8.png" },
  ];

  // Duplicamos los logos para crear el efecto de carrusel infinito
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="portfolio" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-gray-800 rounded-full text-sm font-semibold mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat-bold">
            Marcas que <span className="text-secondary">Confían</span> en Nosotros
          </h2>
        </div>

        {/* Carrusel de logos mejorado */}
        <div className="relative overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-scroll flex w-[fit-content] items-stretch gap-x-12 hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex w-[180px] shrink-0 items-center justify-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/40 hover:border-secondary border border-gray-100"
              >
                <div className="relative flex items-center justify-center h-26 w-full bg-gray-800 rounded-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-24 w-auto grayscale-0 opacity-100 transition-all duration-300 font-montserrat-bold"
                    style={{ objectFit: 'contain', width: '100%' }}
                  />
                  <div className="absolute inset-0 bg-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white bg-gray-900/70 px-2 py-0.5 rounded font-montserrat-bold mt-2 pointer-events-none select-none">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA al final */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-3 bg-secondary text-gray-900 font-montserrat-bold rounded-lg hover:bg-secondary/70 transition-all shadow-lg hover:shadow-secondary/30 transform hover:scale-105">
            CONOCE NUESTROS SERVICIOS <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Estilos para la animación */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 48px));
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;