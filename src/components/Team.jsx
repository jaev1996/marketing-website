import "./montserrat.css";
const Team = () => {
  // Datos del equipo (puedes reemplazar con los reales)
  const teamMembers = [
    {
      name: "Arianny Morales",
      role: "Directora Creativa",
      photo: "/team/arianny.webp",
    },
    {
      name: "Daniela Flores",
      role: "Social Media Manager - Supervisora",
      photo: "/team/daniela.webp",
    },
    {
      name: "Oliver Martínez",
      role: "Desarrollador Audiovisual",
      photo: "/team/oliver.webp",
    },
    {
      name: "Yimberly Andrade",
      role: "Community Manager",
      photo: "/team/yimberly.webp",
    },
    {
      name: "Arianny Azuaje",
      role: "Diseñadora Gráfica",
      photo: "https://ui-avatars.com/api/?name=A+Azuaje&background=cccccc&color=555555&rounded=true&size=128",
    },
    {
      name: "Felipe Botero",
      role: "Trafficker",
      photo: "https://ui-avatars.com/api/?name=F+Botero&background=cccccc&color=555555&rounded=true&size=128",
    },
    {
      name: "Yorlen Batista",
      role: "Contadora",
      photo: "https://ui-avatars.com/api/?name=Y+Batista&background=cccccc&color=555555&rounded=true&size=128",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado con estilo consistente */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-secondary rounded-full mb-4 uppercase">
            CONOCE AL EQUIPO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat-bold uppercase">
            Nuestro <span className="text-secondary uppercase">Equipo</span>
          </h2>
          {/* Bloque destacado con formato Portfolio */}
          <div className="mt-8 mx-auto w-full max-w-4xl lg:max-w-6xl text-center">
            <span className="inline-block text-secondary font-extrabold mb-2 tracking-widest text-base md:text-lg font-montserrat-bold uppercase whitespace-nowrap">Mentes que convierten ideas en resultados</span>
            <span className="block text-gray-900 text-base md:text-lg font-montserrat-regular">Poder contar con profesionales que son capaces de hacer lo mejor, es la diferencia entre un resultado bueno y un resultado excepcional.</span>
          </div>
        </div>

        {/* Grid del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-200"
            >
              {/* Contenedor de la foto con efecto especial */}
              <div className="relative mx-auto w-38 h-38 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: 'top center' }}
                  />
                  {/* Sombra que sigue el contorno de la foto */}
                  <div className="absolute inset-0 rounded-full shadow-[0_0_0_0_rgba(202,210,189,0.4)] group-hover:shadow-[0_0_0_8px_rgba(186,197,170,0.2)] transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Información del miembro */}
              <h3 className="text-2xl font-bold text-gray-800 mb-1 font-montserrat-bold">
                {member.name}
              </h3>
              <p className="text-secondary font-bold text-lg tracking-wide mb-4 font-montserrat-bold uppercase drop-shadow-[0_1px_4px_theme('colors.primary'/0.33)]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* CTA opcional */}
        <div className="text-center mt-16">
          <a
            href="mailto:contacto@agencix.com?subject=Quiero%20unirme%20al%20equipo&body=Hola,%20quiero%20unirme%20a%20su%20equipo."
            className="inline-flex items-center px-8 py-3 bg-secondary text-gray-900 font-montserrat-bold rounded-lg hover:bg-secondary/80 transition-all shadow-lg hover:shadow-secondary/30 transform hover:scale-105"
          >
            ÚNETE A NUESTRO EQUIPO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;