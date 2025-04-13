import { FiStar, FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [vimeoPlayers, setVimeoPlayers] = useState({});

  const testimonials = [
    {
      name: "Carlos Pérez",
      role: "CEO de ModaFashion",
      quote: "Increíble trabajo con nuestra campaña en Instagram. En 3 meses aumentamos un 150% en ventas.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      video: "https://vimeo.com/1075128095",
      thumbnail: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      results: ["+150% ventas", "+300% comunidad"]
    },
    {
      name: "María González",
      role: "Directora de Marketing",
      quote: "La estrategia de contenidos revolucionó nuestro engagement en redes sociales.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      video: "https://vimeo.com/1075134202",
      thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      results: ["+200% engagement", "+120% seguidores"]
    },
    {
      name: "Javier Rodríguez",
      role: "Fundador de TechStart",
      quote: "El rediseño de nuestra identidad visual capturó perfectamente nuestra esencia innovadora.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      video: "https://vimeo.com/1075134212",
      thumbnail: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      results: ["+90% reconocimiento", "Premio al mejor diseño"]
    }
  ];
  useEffect(() => {
    // Cargar el SDK de Vimeo solo si hay videos para reproducir
    if (playingVideo !== null) {
      const loadVimeoSDK = () => {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        document.body.appendChild(script);
      };

      if (!window.Vimeo) {
        loadVimeoSDK();
      }
    }
  }, [playingVideo]);

  const handlePlayVideo = (index) => {
    setPlayingVideo(index);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  // Extrae el ID de la URL de Vimeo
  const getVimeoId = (url) => {
    const regExp = /vimeo\.com\/([\d]+(?:\/[a-zA-Z0-9]+)?)/i; // Captura el ID y el hash si están presentes
    const match = url.match(regExp);
    return match ? match[1] : null; // Devuelve el ID completo (incluyendo el hash si existe)
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
                  <div className="w-full h-full">
                    <div style={{ padding: '56.25% 0 0 0' }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${getVimeoId(testimonial.video)}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }}
                        allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        allowFullScreen
                        title={`Video testimonial de ${testimonial.name}`}
                      ></iframe>
                    </div>
                    <button
                      onClick={handleCloseVideo}
                      className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 z-10"
                      aria-label="Cerrar video"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
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

              {/* Resto del código del testimonio permanece igual */}
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