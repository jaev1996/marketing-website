import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Team = () => {
  // Datos del equipo (puedes reemplazar con los reales)
  const teamMembers = [
    {
      name: "María González",
      role: "CEO & Fundadora",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Marketing",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Ana Martínez",
      role: "Diseñadora Principal",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Javier López",
      role: "Desarrollador Senior",
      photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Sofía Pérez",
      role: "Especialista SEO",
      photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Clara Fernández",
      role: "Gerente de Cuentas",
      photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Elena Sánchez",
      role: "Content Manager",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Pablo Gómez",
      role: "Analista de Datos",
      photo: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&auto=format&fit=crop&q=60",
    },
    {
      name: "Lucía Díaz",
      role: "Community Manager",
      photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado con estilo consistente */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-100 rounded-full mb-4">
            Conoce al equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-emerald-600">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los talentosos profesionales detrás de nuestro éxito
          </p>
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Sombra que sigue el contorno de la foto */}
                  <div className="absolute inset-0 rounded-full shadow-[0_0_0_0_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_0_8px_rgba(16,185,129,0.2)] transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Información del miembro */}
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-emerald-600 font-medium mb-4">{member.role}</p>

              {/* Redes sociales */}
              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA opcional */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-8 py-3 rounded-lg font-bold hover:from-emerald-700 hover:to-emerald-900 transition-all shadow-lg hover:shadow-emerald-500/30">
            Únete a nuestro equipo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;