import { useState, useEffect } from 'react'

export default function Especialidades() {
    const imagenDefault = '/especialidades/default.jpg'
    const [contenido, setContenido] = useState("Haz clic en un servicio para ver más información.")
    const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenDefault)
    
    // Estados para el carousel
    const [currentSlide, setCurrentSlide] = useState(0)

    const inforServicios = {
        1: "Una sonrisa saludable es sinónimo de bienestar. Ofrecemos odontología general, limpiezas, blanqueamiento, ortodoncia y más, para toda la familia.",
        2: "Cuidado especializado para los más pequeños. Seguimiento del crecimiento y desarrollo, esquema de vacunación y tratamiento de enfermedades infantiles en un ambiente de confianza.",
        3: "Salud integral de la mujer en todas las etapas de su vida. Control prenatal, chequeos ginecológicos preventivos y manejo de condiciones específicas con calidez y profesionalismo.",
        4: "Expertos en el cuidado de su corazón. Evaluación, diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología avanzada para garantizar su bienestar a largo plazo.",
        5: "Cuide la salud de su piel, el órgano más extenso. Diagnóstico de enfermedades de la piel, cáncer de piel, tratamientos estéticos médicos y manejo del acné.",
        6: "Cuidamos de su salud mental. Brindamos apoyo y herramientas para manejar el estrés, la ansiedad, la depresión y fomentar el bienestar emocional en un espacio seguro.",
        7: "Atención integral especializada en el diagnóstico, tratamiento y seguimiento del cáncer. "
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

    // Convertir a array para el carousel
    const servicios = Object.keys(inforServicios).map(key => ({
        id: key,
        nombre: nombresServicios[key],
        descripcion: inforServicios[key],
        imagen: imagenesServicios[key]
    }))

    const totalSlides = servicios.length

    // Auto-play del carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % totalSlides)
        }, 4000)

        return () => clearInterval(interval)
    }, [totalSlides])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }
    return(
        <div className="min-h-screen bg-gray-50">
            {/* Carousel Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nuestras Especialidades
                        </h2>
                        <p className="text-lg text-gray-600">
                            Descubre todos nuestros servicios médicos especializados
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto">
                        {/* Main Carousel */}
                        <div className="relative h-[550px] md:h-[600px]">
                            {servicios.map((servicio, index) => (
                                <div
                                    key={servicio.id}
                                    className={`absolute inset-0 transition-opacity duration-500 ${
                                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <div className="h-full flex flex-col">
                                        {/* Imagen */}
                                        <div className="h-2/3 overflow-hidden">
                                            <img
                                                src={servicio.imagen}
                                                alt={servicio.nombre}
                                                className="w-full h-full object-cover object-[0_25%]"
                                            />
                                        </div>
                                        
                                        {/* Contenido */}
                                        <div className="p-6 pb-10 flex-1 flex flex-col justify-center text-center bg-gray-50"> 
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                                {servicio.nombre}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {servicio.descripcion}
                                            </p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 mx-auto text-sm">
                                                Agendar Cita
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Progress Bars */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            {servicios.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-1 transition-all duration-200 ${
                                        index === currentSlide 
                                            ? 'bg-blue-600 w-8 ' 
                                            : 'bg-gray-300 hover:bg-gray-400 w-6'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}