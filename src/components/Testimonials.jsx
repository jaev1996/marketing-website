import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import './montserrat.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Christian de Freitas",
      role: "CEO de Brasero",
      quote: "Las redes sociales se están pagando solas. En 3 meses, alcanzamos obtener presencia digital y llegar a nuestras metas de ventas mensuales y el flujo de personas en el local aumentó notablemente",
      image: "/marcas/Brasero-negro.png",
      rating: 5
    },
    {
      name: "CEO de Once",
      role: "",
      quote: "Pasamos de 27K a 32K seguidores en solo 2 meses y, aumentamos las ventas durante los días de semana, cuando antes solo facturábamos de jueves a domingo.",
      image: "/marcas/ONCE NEGRO.png",
      rating: 5
    },
    {
      name: "CEO de Muro Spa",
      role: "",
      quote: "Se logró un ROI del 802,5% en la primera campaña, estoy muy contento",
      image: "/marcas/muro-negro.PNG",
      rating: 5
    },
    {
      name: "Jessica",
      role: "Directora de Almendrina",
      quote: "Estoy contenta con el contenido, han mostrado el valor y la esencia de nuestro negocio",
      image: "/marcas/almendrina.png",
      rating: 5
    }
  ];

  const maxVisible = 3;
  const totalTestimonials = testimonials.length;

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Función para ir al siguiente testimonio
  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  // Función para ir al testimonio anterior
  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  // Obtener los testimonios visibles (1 en mobile, 3 en desktop)
  const getVisibleTestimonials = () => {
    const visible = [];
    const itemsToShow = isMobile ? 1 : Math.min(maxVisible, totalTestimonials);

    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % totalTestimonials;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Confían en nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-montserrat-bold mb-4">
            Voces de <span className="text-secondary uppercase">nuestros clientes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-montserrat-regular px-4">
            Experiencias reales que reflejan nuestro compromiso
          </p>
        </div>

        {/* Carousel de testimonios */}
        <div className="relative px-12 sm:px-14 md:px-16">
          {/* Flecha izquierda */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-secondary/30 active:bg-secondary/40 text-secondary rounded-full p-2 sm:p-2.5 md:p-3 border-2 border-secondary transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-sm shadow-lg shadow-secondary/30 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Testimonio anterior"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          {/* Grid de testimonios visibles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.originalIndex}-${index}`}
                className={`group relative bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-800 hover:border-primary/80 ${direction === 'next'
                    ? 'animate-slideInRight'
                    : 'animate-slideInLeft'
                  }`}
                style={{
                  animation: `${direction === 'next' ? 'slideInRight' : 'slideInLeft'} 0.5s ease-out`,
                  opacity: 0,
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-base sm:text-lg italic mb-6 text-gray-950 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center mt-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary mr-3 sm:mr-4 object-contain bg-white p-1"
                      style={{ objectFit: 'contain', backgroundColor: 'white' }}
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-gray-950 font-montserrat-bold text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 font-montserrat-bold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-black/60 hover:bg-secondary/30 active:bg-secondary/40 text-secondary rounded-full p-2 sm:p-2.5 md:p-3 border-2 border-secondary transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-sm shadow-lg shadow-secondary/30 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Siguiente testimonio"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>
        </div>

        {/* Indicadores de posición */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 'next' : 'prev');
                setCurrentIndex(index);
              }}
              className={`rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${index === currentIndex ? 'bg-secondary w-8 h-2' : 'bg-gray-600 hover:bg-gray-500 w-2 h-2'
                }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Estilos para las animaciones */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 768px) {
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;