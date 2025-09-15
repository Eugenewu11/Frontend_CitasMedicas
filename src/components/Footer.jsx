export default function Footer() {
    return(
        <section className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Horarios de Atención</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300">Lunes - Domingo: <span className="text-green-400">Abierto siempre</span></p>
                                <p className="text-gray-300">Emergencias: 24/7</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>📞 Consultas: +504 2550-1234</p>
                                <p>🚨 Emergencias: +504 2550-5678</p>
                                <p>📧 infoEWEMES@gmail.com</p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>📍 Av. Circunvalación</p>
                                <p>San Pedro Sula, Cortés</p>
                                <p>Honduras</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}