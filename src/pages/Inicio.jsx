import Footer from "../components/Footer";

function Inicio() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Cuidamos tu salud con excelencia y calidez humana
                            </h1>
                            <p className="text-xl mb-8 text-blue-100">
                                Más de 15 años brindando atención médica de calidad en San Pedro Sula. 
                                Tu bienestar es nuestra prioridad.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                                    Solicitar Cita
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                                    Conocer Servicios
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img 
                                src="/draHero1.avif" 
                                alt="Equipo médico profesional" 
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Por qué elegirnos */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Somos más que una clínica, somos tu aliado en el cuidado de la salud
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">15+ Años de Experiencia</h3>
                            <p className="text-gray-600">Trayectoria comprobada en atención médica de calidad</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tecnología de Punta</h3>
                            <p className="text-gray-600">Equipos modernos para diagnósticos precisos</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Atención Personalizada</h3>
                            <p className="text-gray-600">Cada paciente es único y especial para nosotros</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilidad 24/7</h3>
                            <p className="text-gray-600">Emergencias atendidas las 24 horas del día</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Destacados */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Nuestros Servicios Principales
                        </h2>
                        <p className="text-lg text-gray-600">
                            Atención integral para toda la familia
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-blue-600 mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Medicina General</h3>
                            <p className="text-gray-600">
                                Consultas médicas generales para el cuidado preventivo y tratamiento de enfermedades comunes.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-orange-600 mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Especialidades</h3>
                            <p className="text-gray-600">
                                Cardiología, Pediatría, Ginecología, Dermatología y más especialidades médicas.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-green-600 mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Laboratorio Clínico</h3>
                            <p className="text-gray-600">
                                Análisis clínicos completos con resultados rápidos y confiables para un diagnóstico preciso.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-red-600 mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergencias</h3>
                            <p className="text-gray-600">
                                Atención de urgencias médicas las 24 horas con personal especializado y equipos de emergencia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Lo que dicen nuestros pacientes
                        </h2>
                        <p className="text-lg text-gray-600">
                            Testimonios reales de quienes confían en nosotros
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img className="w-12 h-12 rounded-full object-cover mr-4" src="/test1.jpg" alt="María González" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">María González</h4>
                                    <p className="text-gray-600 text-sm">Paciente desde 2019</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "La atención que recibí fue excepcional. El Dr. me explicó todo con paciencia y el tratamiento funcionó perfectamente. Recomiendo esta clínica al 100%."
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img className="w-12 h-12 rounded-full mr-4" src="/test2.jpg" alt="Carlos Rodríguez" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Carlos Rodríguez</h4>
                                    <p className="text-gray-600 text-sm">Paciente desde 2020</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "Instalaciones modernas, personal muy amable y profesional. Mi familia y yo nos sentimos muy bien atendidos siempre que venimos."
                            </p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img className="w-12 h-12 object-cover rounded-full mr-4" src="/test3.webp" alt="Ana López" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Ana López</h4>
                                    <p className="text-gray-600 text-sm">Paciente desde 2018</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "Los resultados de laboratorio fueron rápidos y precisos. El seguimiento posterior al tratamiento fue excelente. Muy satisfecha con el servicio."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿Listo para cuidar tu salud?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Programa tu cita hoy mismo y experimenta la diferencia de una atención médica de calidad
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                            Agendar Cita
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap">
                            Contáctanos
                        </button>
                    </div>
                </div>
            </section>

            {/* Información de Contacto */}
                <Footer/>
        </div>
    );
}

export default Inicio;