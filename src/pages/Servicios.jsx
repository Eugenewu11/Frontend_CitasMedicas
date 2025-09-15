import Footer from '../components/Footer'

export default function Servicios() {
    const imagenDefault = '/servicios/default.jpg'

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Nuestros Servicios de Salud Integral
                            </h1>
                            <p className="text-xl mb-8 text-blue-100">
                                Nos dedicamos a cuidar de usted y de su familia con un enfoque integral y personalizado. Contamos con un equipo médico altamente 
                                calificado y tecnología de vanguardia para ofrecerle el más alto estándar de atención en cada una de nuestras especialidades. 
                                Su bienestar es nuestra prioridad.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <img 
                                src="/servicios/serviciosHero.jpg" 
                                alt="Equipo médico profesional" 
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Servicios Médicos Especializados
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ofrecemos una amplia gama de servicios médicos con tecnología de vanguardia 
                            y personal altamente capacitado para brindarle la mejor atención.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Medicina General */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/consultaGen.jpg" 
                                alt="Consultas de Medicina General"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultas de Medicina General</h3>
                                <p className="text-gray-600 mb-4">
                                    Atención médica integral para toda la familia. Diagnóstico, tratamiento y seguimiento 
                                    de enfermedades comunes con un enfoque preventivo y personalizado.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Laboratorio */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/labClinico.jpg" 
                                alt="Laboratorio de Análisis Clínicos"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Laboratorio de Análisis Clínicos</h3>
                                <p className="text-gray-600 mb-4">
                                    Exámenes de laboratorio completos con resultados precisos y rápidos. 
                                    Análisis de sangre, orina, heces y otros estudios especializados.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Imagenología */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/imagenologia.webp" 
                                alt="Estudios de Imagenología"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Estudios de Imagenología</h3>
                                <p className="text-gray-600 mb-4">
                                    Rayos X digitales y ultrasonidos con tecnología avanzada para diagnósticos 
                                    precisos y detallados en todas las especialidades médicas.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Vacunación */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/vacunacion.jpg" 
                                alt="Servicios de Vacunación"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Vacunación</h3>
                                <p className="text-gray-600 mb-4">
                                    Esquemas completos de vacunación para niños y adultos. Vacunas preventivas, 
                                    de viaje y programas especiales de inmunización.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Emergencias */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/emergencias.jpeg" 
                                alt="Servicios de Emergencias"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergencias</h3>
                                <p className="text-gray-600 mb-4">
                                    Atención médica de urgencia las 24 horas. Equipo médico especializado 
                                    y equipos de emergencia para situaciones críticas.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Hospitalización */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/hospitalizacion.jpg" 
                                alt="Servicios de Hospitalización"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitalización</h3>
                                <p className="text-gray-600 mb-4">
                                    Habitaciones cómodas y modernas con atención médica continua. 
                                    Personal especializado disponible las 24 horas para su cuidado.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Electrocardiogramas */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/electrocardiograma.webp" 
                                alt="Electrocardiogramas"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Electrocardiogramas</h3>
                                <p className="text-gray-600 mb-4">
                                    Estudios cardiológicos completos para evaluar la función del corazón. 
                                    Equipos digitales de última generación para diagnósticos precisos.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Terapia y Rehabilitación */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/fisioterapia.jpg" 
                                alt="Servicios de Terapia y Rehabilitación"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Terapia y Rehabilitación</h3>
                                <p className="text-gray-600 mb-4">
                                    Fisioterapia, terapia respiratoria y programas de rehabilitación integral. 
                                    Equipos especializados y terapeutas certificados.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>

                        {/* Chequeos Preventivos */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/chequeo-preventivo.jpg" 
                                alt="Chequeos Médicos Preventivos"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Chequeos Médicos Preventivos</h3>
                                <p className="text-gray-600 mb-4">
                                    Evaluaciones médicas completas para la detección temprana de enfermedades. 
                                    Programas personalizados según edad y factores de riesgo.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>
                    
                        {/* Farmacia */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <img 
                                src="/servicios/farmacia.jpg" 
                                alt="Servicios de Farmacia"
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.target.src = imagenDefault }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Farmacia</h3>
                                <p className="text-gray-600 mb-4">
                                    Medicamentos de calidad garantizada y asesoría farmacéutica profesional. 
                                    Amplio surtido de medicamentos y productos para el cuidado de la salud.
                                </p>
                                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                    Más información →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Necesita atención médica?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Nuestro equipo médico está disponible para brindarle la mejor atención. 
                        Agende su cita o contáctenos para emergencias.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                            Agendar Cita Ahora
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                            Llamar para Emergencias
                        </button>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}