import { FiStar, FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      name: "Carlos Pérez",
      role: "CEO de ModaFashion",
      quote: "Increíble trabajo con nuestra campaña en Instagram. En 3 meses aumentamos un 150% en ventas.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      video: "https://example.com/videos/testimonio1.mp4", // Reemplazar con URL real
      thumbnail: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      results: ["+150% ventas", "+300% comunidad"]
    },
    {
      name: "Carlos Pérez",
      role: "CEO de ModaFashion",
      quote: "Increíble trabajo con nuestra campaña en Instagram. En 3 meses aumentamos un 150% en ventas.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      video: "https://example.com/videos/testimonio1.mp4", // Reemplazar con URL real
      thumbnail: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      results: ["+150% ventas", "+300% comunidad"]
    },
    {
      name: "Carlos Pérez",
      role: "CEO de ModaFashion",
      quote: "Increíble trabajo con nuestra campaña en Instagram. En 3 meses aumentamos un 150% en ventas.",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      video: "https://example.com/videos/testimonio1.mp4", // Reemplazar con URL real
      thumbnail: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      results: ["+150% ventas", "+300% comunidad"]
    },
    // ... otros testimonios
  ];

  const handlePlayVideo = (index) => {
    setPlayingVideo(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-600/10 text-purple-400 rounded-full text-sm font-semibold mb-4">
            Confían en nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voces de <span className="text-purple-400">nuestros clientes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experiencias reales que demuestran nuestro impacto
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-purple-500/30"
            >
              {/* Sección de video (arriba) */}
              <div className="relative h-48 bg-gray-800">
                {playingVideo === index ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={testimonial.video} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <img
                      src={testimonial.thumbnail}
                      alt={`Thumbnail ${testimonial.name}`}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                    <button
                      onClick={() => handlePlayVideo(index)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Reproducir video testimonio"
                    >
                      <div className="bg-purple-600/90 hover:bg-purple-500 transition-all rounded-full p-4">
                        <FiPlay className="w-6 h-6" />
                      </div>
                    </button>
                  </>
                )}
              </div>

              {/* Contenido del testimonio (abajo) */}
              <div className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg italic mb-6 text-gray-300">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.results.map((result, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 bg-purple-600/10 text-purple-400 rounded-full text-xs font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-500 mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6">
            ¿Listo para transformar tu presencia digital como ellos?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg hover:shadow-purple-500/30"
          >
            Habla con nuestro equipo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;