import { FiArrowRight } from "react-icons/fi";
import './montserrat.css';

const Portfolio = () => {
  // Logos de clientes genéricos (marcas reconocidas)
  const clients = [
    { name: "Nike", logo: "https://cdn.worldvectorlogo.com/logos/nike-8.svg" },
    { name: "Adidas", logo: "https://cdn.worldvectorlogo.com/logos/adidas-8.svg" },
    { name: "Apple", logo: "https://cdn.worldvectorlogo.com/logos/apple-11.svg" },
    { name: "Samsung", logo: "https://cdn.worldvectorlogo.com/logos/samsung-8.svg" },
    { name: "Coca Cola", logo: "https://cdn.worldvectorlogo.com/logos/cocacola.svg" },
    { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-dark.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg" },
    { name: "Spotify", logo: "https://cdn.worldvectorlogo.com/logos/spotify-logo.svg" },
    { name: "Netflix", logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg" },
    { name: "Airbnb", logo: "https://cdn.worldvectorlogo.com/logos/airbnb-1.svg" },
  ];

  // Duplicamos los logos para crear el efecto de carrusel infinito
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="portfolio" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#cad2bd]/40 text-gray-800 rounded-full text-sm font-semibold mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
            Marcas que <span className="text-[#bac5aa]">Confían</span> en Nosotros
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Empresas líderes que han crecido con nuestras soluciones de marketing
          </p>
        </div>

        {/* Carrusel de logos mejorado */}
        <div className="relative overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-[linear-gradient(to_left,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-scroll flex w-[fit-content] items-stretch gap-x-12 hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex w-[180px] shrink-0 items-center justify-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-[#cad2bd]/40 hover:border-[#bac5aa] border border-gray-100"
              >
                <div className="relative flex items-center justify-center h-26 w-full">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-24 w-auto grayscale-[80%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-[#bac5aa]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA al final */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#bac5aa] to-[#cad2bd] text-gray-900 font-montserrat rounded-lg hover:from-[#cad2bd] hover:to-[#bac5aa] transition-all shadow-lg hover:shadow-[#cad2bd]/30">
            Conoce nuestros servicios <FiArrowRight className="ml-2" />
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