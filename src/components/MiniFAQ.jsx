import './montserrat.css';

const MiniFAQ = () => {
    const faqs = [
        {
            q: '¿En cuánto tiempo responden a mi mensaje?',
            a: 'Siempre en menos de 24 horas hábiles.'
        },
        {
            q: '¿Puedo pedir una cotización sin compromiso?',
            a: '¡Por supuesto! Todas nuestras asesorías iniciales son gratuitas.'
        },
        {
            q: '¿Trabajan con empresas fuera de Venezuela?',
            a: 'Sí, atendemos clientes en toda Latinoamérica y España.'
        },
        {
            q: '¿Qué métodos de pago aceptan?',
            a: 'Transferencias bancarias, Zelle y PayPal.'
        }
    ];

    return (
        <section className="py-12 bg-gray-950 text-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                        Resolvemos tus dudas
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-2">Preguntas Frecuentes</h3>
                    <p className="text-gray-400 text-lg">Respuestas rápidas a tus dudas más comunes</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <details key={i} className="group rounded-lg bg-secondary/10 px-6 py-4 cursor-pointer transition-all border border-primary/20">
                            <summary className="flex items-center justify-between font-semibold text-lg font-montserrat text-secondary group-open:text-primary transition-colors">
                                {item.q}
                                <span className="ml-2 text-primary group-open:rotate-90 transition-transform">▶</span>
                            </summary>
                            <div className="mt-2 text-gray-200 text-base pl-2">
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
