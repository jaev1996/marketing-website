import { FiArrowRight } from "react-icons/fi";
import './montserrat.css';

const Portfolio = () => {
  // Logos de clientes reales (archivos locales en public/marcas)
  const clients = [
    { logo: "/marcas/almendrina.png" },
    { logo: "/marcas/arisa-8.png" },
    { logo: "/marcas/bellisima-negro-8.png" },
    { logo: "/marcas/Brasero-negro.png" },
    { logo: "/marcas/contrucolor-8.png" },
    { logo: "/marcas/dibar-negro-8.png" },
    { logo: "/marcas/GREEN CITY 1-8.png" },
    { logo: "/marcas/lola-negro-8.png" },
    { logo: "/marcas/mapa-8.png" },
    { logo: "/marcas/ONCE NEGRO.png" },
    { logo: "/marcas/polemico-negro-8.png" },
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
          {/* Bloque destacado */}
          <div className="mt-8 mx-auto max-w-2xl bg-secondary/20 border-l-4 border-secondary px-6 py-4 rounded-lg shadow font-montserrat-bold text-lg text-gray-900">

            <span className="block text-secondary font-extrabold mb-2 tracking-widest"> En Eleva tenemos el privilegio de colaborar con marcas en diferentes etapas y sectores</span>
            Desde negocios consolidados que buscan renovarse e innovar, hasta emprendimientos que están dando sus primeros pasos y necesitan acompañamiento estratégico, creativo y funcional.
          </div>
        </div>

        {/* Carrusel de logos mejorado */}
        <div className="relative overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-scroll flex w-[fit-content] items-stretch gap-x-12 hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="group flex w-[200px] shrink-0 items-center justify-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-primary/40 hover:border-secondary border border-gray-100"
              >
                <div className="relative flex items-center justify-center h-26 w-full rounded-lg">
                  <img
                    src={client.logo}
                    alt="Logo cliente"
                    className="max-h-24 w-auto grayscale-0 opacity-100 transition-all duration-300"
                    style={{ objectFit: 'contain', width: '100%' }}
                  />
                  {/* Eliminado el span del nombre */}
                </div>
              </div>
            ))}
          </div>
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