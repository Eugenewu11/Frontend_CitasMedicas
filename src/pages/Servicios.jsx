import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

export default function Servicios() {
    const imagenDefault = '/servicios/default.jpg'
    const [contenido, setContenido] = useState("Haz clic en un servicio para ver más información.")
    const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenDefault)
    
    // Estados para el carousel
    const [currentSlide, setSlideActual] = useState(0)

    const inforServicios = {
        1: "Su primer paso hacia la salud. Diagnóstico, tratamiento y prevención de enfermedades comunes, así como control de salud general y referencia a especialistas cuando sea necesario.",
        2: "Cuidado especializado para los más pequeños. Seguimiento del crecimiento y desarrollo, esquema de vacunación y tratamiento de enfermedades infantiles en un ambiente de confianza.",
        3: "Salud integral de la mujer en todas las etapas de su vida. Control prenatal, chequeos ginecológicos preventivos y manejo de condiciones específicas con calidez y profesionalismo.",
        4: "Expertos en el cuidado de su corazón. Evaluación, diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología avanzada para garantizar su bienestar a largo plazo.",
        5: "Cuide la salud de su piel, el órgano más extenso. Diagnóstico de enfermedades de la piel, cáncer de piel, tratamientos estéticos médicos y manejo del acné.",
        6: "Una sonrisa saludable es sinónimo de bienestar. Ofrecemos odontología general, limpiezas, blanqueamiento, ortodoncia y más, para toda la familia.",
        7: "Cuidamos de su salud mental. Brindamos apoyo y herramientas para manejar el estrés, la ansiedad, la depresión y fomentar el bienestar emocional en un espacio seguro.",
        8: "Resultados confiables y precisos. Realizamos análisis clínicos con tecnología de punta para un diagnóstico certero y rápido.",
    }

    const imagenesServicios = {
        1: "/servicios/medGeneral.webp",
        2: "/servicios/pediatria.jpg",
        3: "/servicios/ginecologia.webp",
        4: "/servicios/cardiologia.png",
        5: "/servicios/dermatologia.webp",
        6: "/servicios/odontologia.jpeg",
        7: "/servicios/psicologia.png",
        8: "/servicios/labClinico.jpg",
    }

    const nombresServicios = {
        1: "Medicina General",
        2: "Pediatría",
        3: "Ginecología",
        4: "Cardiología",
        5: "Dermatología",
        6: "Odontología",
        7: "Psicología",
        8: "Laboratorio Clínico"
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
        const intervalo = setIntervalo(() => {
            setSlideActual(prev => (prev + 1) % totalSlides)
        }, 4000)

        return () => clearInterval(intervalo)
    }, [totalSlides])

    const goToSlide = (index) => {
        setSlideActual(index)
    }

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
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                                    Agendar Cita
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                                    Contáctanos
                                </button>
                            </div>
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

                    {/* Carousel Container - Modificado para aspecto más cuadrado */}
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
                                        {/* Imagen - Ahora con relación de aspecto más cuadrada */}
                                        <div className="h-2/3 overflow-hidden">
                                            <img
                                                src={servicio.imagen}
                                                alt={servicio.nombre}
                                                className="w-full h-full object-cover object-[0_25%]"
                                            />
                                        </div>
                                        
                                        {/* Contenido - Reducido para mantener proporción cuadrada */}
                                        <div className="p-6 pb-10 flex-1 flex flex-col justify-center text-center bg-gray-50"> {/* Añadido pb-10 */}
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

                        {/* Progress Bars Indicator */}
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
            
            <Footer/>
        </div>
    )
}