import { FiSend, FiMail, FiPhone, FiClock, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import emailjs from 'emailjs-com';
import './montserrat.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeMethod, setActiveMethod] = useState(null);

  const serviceId = 'service_qfht89u'; // Reemplaza con tu Service ID de EmailJS
  const templateId = 'template_4asvqty'; // Reemplaza con tu Template ID de EmailJS
  const userId = '4Pu5g4ceLqh_S4eG3'; // Reemplaza con tu Public Key de EmailJS

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        userId
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Correo Electrónico",
      details: "info@eleva.marketing",
      action: () => window.location.href = "mailto:info@eleva.marketing",
      color: "bg-emerald-100 text-emerald-800"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "WhatsApp",
      details: "+58 424 2368587",
      action: () => window.open("https://wa.me/584242368587", "_blank"),
      color: "bg-green-100 text-green-800"
    },
    {
      icon: <FiClock className="w-5 h-5" />,
      title: "Horario de Atención",
      details: "Lun-Sáb: 8:00 AM - 6:00 PM",
      action: null,
      color: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary text-gray-800 rounded-full text-sm font-semibold mb-4">
            Contacto Directo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 font-montserrat-bold">
            Hablemos de tu <span className="text-secondary uppercase">proyecto</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-montserrat-regular">
            Elige tu método preferido o envíanos un mensaje directo
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna de métodos de contacto (mismo ancho que el formulario) */}
          <div className="lg:w-1/2">
            <div className="bg-secondary/10 rounded-xl p-8 shadow-sm border border-secondary/50 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 font-montserrat-bold text-gray-800">
                <FiCheckCircle className="text-primary" />
                <span>Contacto Rápido</span>
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all cursor-pointer bg-primary/10 text-secondary ${method.action ? 'hover:shadow-md' : ''} ${activeMethod === index ? 'ring-2 ring-secondary' : ''}`}
                    onClick={() => {
                      if (method.action) method.action();
                      setActiveMethod(index);
                    }}
                    onMouseEnter={() => setActiveMethod(index)}
                    onMouseLeave={() => setActiveMethod(null)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-secondary/20">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-bold font-montserrat-bold text-gray-900">{method.title}</h4>
                        <p className="text-sm text-gray-900 whitespace-pre-line font-montserrat-regular">{method.details}</p>
                        {method.action && (
                          <span className="inline-block mt-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Haz clic para contactar
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm border border-secondary/30 p-8 h-full">
              {isSubmitted ? (
                <div className="text-center py-8 h-full flex flex-col justify-center">
                  <FiCheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 font-montserrat-bold text-secondary">¡Mensaje enviado!</h3>
                  <p className="text-gray-700 mb-6 font-montserrat-regular">Te contactaremos en menos de 24 horas.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-secondary text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-secondary/70 transition mx-auto"
                  >
                    Nuevo mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 font-montserrat-bold text-gray-800">Formulario de Contacto</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat-regular">Nombre completo*</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition text-gray-900 bg-white"
                        placeholder="Ej: María González"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat-regular">Correo electrónico*</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition text-gray-900 bg-white"
                        placeholder="Ej: contacto@tudominio.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-montserrat-regular">Mensaje*</label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition text-gray-900 bg-white"
                        placeholder="Describe tu proyecto, necesidades y objetivos..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="mt-1 w-4 h-4 text-secondary rounded focus:ring-seondary"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-900 font-montserrat-regular">
                        Acepto la política de privacidad y el tratamiento de mis datos
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-secondary text-gray-900 py-3 px-6 rounded-lg font-bold transition-all shadow hover:shadow-lg hover:bg-secondary/70 flex items-center justify-center gap-2 font-montserrat transform hover:scale-105"
                    >
                      <FiSend /> Enviar mensaje
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;