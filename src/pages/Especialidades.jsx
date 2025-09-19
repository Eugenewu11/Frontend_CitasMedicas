export default function Especialidades() {
    const imagenDefault = '/especialidades/default.jpg'

    const inforServicios = {
        1: "Una sonrisa saludable es sinónimo de bienestar. Ofrecemos odontología general, limpiezas, blanqueamiento, ortodoncia y más, para toda la familia.",
        2: "Cuidado especializado para los más pequeños. Seguimiento del crecimiento y desarrollo, esquema de vacunación y tratamiento de enfermedades infantiles en un ambiente de confianza.",
        3: "Salud integral de la mujer en todas las etapas de su vida. Control prenatal, chequeos ginecológicos preventivos y manejo de condiciones específicas con calidez y profesionalismo.",
        4: "Expertos en el cuidado de su corazón. Evaluación, diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología avanzada para garantizar su bienestar a largo plazo.",
        5: "Cuide la salud de su piel, el órgano más extenso. Diagnóstico de enfermedades de la piel, cáncer de piel, tratamientos estéticos médicos y manejo del acné.",
        6: "Cuidamos de su salud mental. Brindamos apoyo y herramientas para manejar el estrés, la ansiedad, la depresión y fomentar el bienestar emocional en un espacio seguro.",
        7: "Atención integral especializada en el diagnóstico, tratamiento y seguimiento del cáncer con tecnología de vanguardia y equipo altamente especializado."
    }

    const imagenesServicios = {
        1: "/especialidades/odontologia.jpeg",
        2: "/especialidades/pediatria.jpg",
        3: "/especialidades/ginecologia.webp",
        4: "/especialidades/cardiologia.png",
        5: "/especialidades/dermatologia.webp",
        6: "/especialidades/psicologia.png",
        7: "/especialidades/oncologia.jpg"
    }

    const nombresServicios = {
        1: "Odontología",
        2: "Pediatría",
        3: "Ginecología",
        4: "Cardiología",
        5: "Dermatología",
        6: "Psicología",
        7: "Oncología"
    }

    // Convertir a array para renderizado eficiente
    const servicios = Object.keys(inforServicios).map(key => ({
        id: key,
        nombre: nombresServicios[key],
        descripcion: inforServicios[key],
        imagen: imagenesServicios[key]
    }))

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Especialidades Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nuestras Especialidades Médicas
                        </h2>
                        <p className="text-lg text-gray-600">
                            Descubre todos nuestros servicios médicos especializados
                        </p>
                    </div>

                    {/* Grid de 2 columnas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {servicios.map((servicio) => (
                            <div 
                                key={servicio.id} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                            >
                                <img 
                                    src={servicio.imagen} 
                                    alt={servicio.nombre} 
                                    className="w-full h-48 object-cover"
                                    onError={(e) => { e.target.src = imagenDefault }}
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-4 text-gray-800">
                                        {servicio.nombre}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {servicio.descripcion}
                                    </p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                                        Agendar Cita
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}