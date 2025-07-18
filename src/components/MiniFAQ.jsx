import './montserrat.css';

const MiniFAQ = () => {
    const faqs = [
        {
            q: '¿Trabajan con empresas fuera de Venezuela?',
            a: 'Sí, atendemos clientes en toda Latinoamérica y España.'
        },
        {
            q: '¿Qué diferencia hay entre un Start Pack y la gestión de redes sociales?',
            a: 'El Start Pack está pensado para emprendedores o negocios pequeños que quieren iniciar en redes con contenido estratégico y de calidad a un precio accesible. En cambio, la gestión de redes sociales es un servicio completo que incluye estrategia, planificación, publicaciones, análisis, atención al cliente, campañas publicitarias y más: una solución 360° para marcas que buscan crecer constantemente.'
        },
        {
            q: '¿Puedo contratar solo un servicio en específico?',
            a: 'Sí, ofrecemos servicios por separado o nuestros paquetes integrales.'
        },
        {
            q: '¿Debo pagar todo de una vez, o puedo pagar en partes?',
            a: 'Cuando se trata de paquetes, puedes pagar el 70% por adelantado y el 30% al finalizar el trabajo.'
        },
        {
            q: '¿Cómo sé si lo que están haciendo está funcionando?',
            a: 'Pautamos objetivos según las necesidades del negocio y medimos todo lo que hacemos. Cada acción está respaldada por KPIs, métricas y datos reales.'
        }
    ];

    return (
        <section id='minifaq' className="relative py-12 bg-black text-white overflow-hidden">
            {/* Imagen de fondo con overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fondo preguntas frecuentes"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/75 to-gray-950/80"></div>
            </div>
            <div className="container mx-auto px-4 py-4 max-w-3xl relative z-10">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-secondary/30 text-secondary rounded-full text-sm font-semibold mb-4">
                        Resolvemos tus dudas
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase font-montserrat-bold mb-2">Preguntas Frecuentes</h3>
                    <p className="text-gray-400 text-lg font-montserrat-regular">Respuestas rápidas a tus dudas más comunes</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <details key={i} className="group rounded-lg bg-secondary/30 px-6 py-4 cursor-pointer transition-all border border-secondary/70">
                            <summary className="flex items-center justify-between font-semibold text-lg font-montserrat-bold text-secondary">
                                {item.q}
                                <span className="ml-2 text-secondary group-open:rotate-90 transition-transform">▶</span>
                            </summary>
                            <div className="mt-2 text-gray-200 text-base pl-2 font-montserrat-regular">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiniFAQ;
