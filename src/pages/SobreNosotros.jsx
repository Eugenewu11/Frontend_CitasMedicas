import Footer from '../components/Footer'

export default function SobreNosotros() {
    const valores = [
        {
            icono: "❤️",
            titulo: "Compromiso",
            descripcion: "Nos comprometemos con la excelencia en cada consulta, procedimiento y tratamiento que ofrecemos a nuestros pacientes."
        },
        {
            icono: "🏥",
            titulo: "Profesionalismo",
            descripcion: "Contamos con médicos especialistas certificados y personal altamente capacitado para brindar atención de calidad."
        },
        {
            icono: "🤝",
            titulo: "Confianza",
            descripcion: "Construimos relaciones duraderas basadas en la transparencia, honestidad y el respeto hacia cada paciente."
        },
        {
            icono: "🔬",
            titulo: "Innovación",
            descripcion: "Incorporamos tecnología médica de vanguardia para ofrecer diagnósticos precisos y tratamientos efectivos."
        },
        {
            icono: "👨‍⚕️",
            titulo: "Humanización",
            descripcion: "Tratamos a cada paciente con calidez humana, empatía y el respeto que merece en momentos vulnerables."
        },
        {
            icono: "🎯",
            titulo: "Excelencia",
            descripcion: "Buscamos continuamente mejorar nuestros servicios para superar las expectativas de nuestros pacientes."
        }
    ]

    const estadisticas = [
        { numero: "15+", texto: "Años de Experiencia" },
        { numero: "25,000+", texto: "Pacientes Atendidos" },
        { numero: "12", texto: "Especialidades Médicas" },
        { numero: "35+", texto: "Médicos Especialistas" }
    ]

    const equipoDestacado = [
        {
            nombre: "Dr. Carlos Mendoza",
            especialidad: "Director Médico - Cardiología",
            imagen: "/sobre-nosotros/doctor1.jpg",
            descripcion: "25 años de experiencia en cardiología intervencionista"
        },
        {
            nombre: "Dra. Ana Patricia López",
            especialidad: "Jefa de Ginecología",
            imagen: "/sobre-nosotros/doctora1.jpg",
            descripcion: "Especialista en medicina materno-fetal y cirugía ginecológica"
        },
        {
            nombre: "Dr. Roberto Hernández",
            especialidad: "Jefe de Pediatría",
            imagen: "/sobre-nosotros/doctor2.jpeg",
            descripcion: "Experto en neonatología y cuidados intensivos pediátricos"
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Sobre Nosotros
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Conoce nuestra historia, valores y el equipo médico comprometido 
                            con tu salud y bienestar
                        </p>
                    </div>
                </div>
            </section>

            {/* Quiénes Somos */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                ¿Quiénes Somos?
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Somos un centro médico integral fundado en 2009 con la misión de brindar 
                                atención médica de calidad, accesible y humanizada a nuestra comunidad. 
                                Nos especializamos en ofrecer servicios médicos completos bajo un mismo techo.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Nuestro equipo multidisciplinario está conformado por médicos especialistas, 
                                enfermeras certificadas y personal administrativo comprometido con la excelencia 
                                en el servicio y el cuidado personalizado de cada paciente.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl">🏥</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Centro Médico Integral</h3>
                                    <p className="text-gray-600">Servicios médicos completos para toda la familia</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="/sobre-nosotros/equipo-medico.jpg" 
                                alt="Nuestro equipo médico" 
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                                <h4 className="font-bold text-lg mb-1">15+ Años</h4>
                                <p className="text-blue-100">de experiencia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Estadísticas */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Lo que hemos logrado
                        </h2>
                        <p className="text-lg text-gray-600">
                            Números que reflejan nuestro compromiso y experiencia
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {estadisticas.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white rounded-lg p-6 shadow-lg">
                                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                        {stat.numero}
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        {stat.texto}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Misión */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                            <div className="flex items-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Brindar servicios médicos integrales de alta calidad, accesibles y humanizados, 
                                utilizando tecnología moderna y un equipo multidisciplinario comprometido con 
                                la salud y bienestar de nuestros pacientes y sus familias.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                            <div className="flex items-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Ser reconocidos como el centro médico de referencia en nuestra región, 
                                destacándonos por la excelencia en atención médica, innovación tecnológica 
                                y el compromiso constante con la mejora continua de la salud comunitaria.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nuestros Valores
                        </h2>
                        <p className="text-lg text-gray-600">
                            Los principios que guían cada una de nuestras acciones
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {valores.map((valor, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-4xl mb-4">{valor.icono}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {valor.titulo}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {valor.descripcion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipo Destacado */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nuestro Equipo Médico
                        </h2>
                        <p className="text-lg text-gray-600">
                            Conoce a algunos de nuestros especialistas destacados
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {equipoDestacado.map((doctor, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={doctor.imagen} 
                                    alt={doctor.nombre}
                                    className="w-full h-64 object-cover object-[center_8%]"
                                    onError={(e) => { e.target.src = '/equipo/default-doctor.jpg' }}
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {doctor.nombre}
                                    </h3>
                                    <p className="text-blue-600 font-semibold mb-3">
                                        {doctor.especialidad}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {doctor.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para cuidar tu salud con nosotros?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Agenda tu cita y experimenta la diferencia de una atención médica integral y personalizada
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                            Agendar Cita
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                            Conocer Servicios
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}