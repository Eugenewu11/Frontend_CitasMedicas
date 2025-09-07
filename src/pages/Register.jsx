function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white-100 p-4">
            <div 
                className="w-full max-w-md p-8 rounded-2xl shadow-2xl"
                style={{ backgroundColor: 'rgb(229,93,93)' }}
            >
                {/* Título */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white">
                        REGISTRO
                    </h1>
                </div>

                {/* Formulario */}
                <div className="space-y-6">
                    {/* Campo Nombre Completo */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Nombre completo:
                        </label>
                        <input
                            type="text"
                            placeholder="Escribe aquí..."
                            maxLength={50}
                            className="w-full px-4 py-3 rounded-lg border-none outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                        />
                    </div>

                    {/* Campo Correo */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Correo:
                        </label>
                        <input
                            type="email"
                            placeholder="Escribe aquí..."
                            className="w-full px-4 py-3 rounded-lg border-none outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                        />
                    </div>

                    {/* Campo Número de teléfono */}
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Número de teléfono:
                        </label>
                        <input
                            type="tel"
                            placeholder="Escribe aquí..."
                            className="w-full px-4 py-3 rounded-lg border-none outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                        />
                    </div>

                    {/* Botón de registro */}
                    <div className="pt-4">
                        <button
                            type="button"
                            className="w-full bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50"
                        >
                            REGISTRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;