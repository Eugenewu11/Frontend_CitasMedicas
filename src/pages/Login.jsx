function Login() {

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-blue-900">
                
                {/*Titulo*/}
                <div className="text-center mb-8"> {/*texto centrado margin botom de 8*0.25*/}
                    <h1 className="text-2xl font-bold text-white">
                        Inicio de Sesión
                    </h1>
                </div>

                {/*Formulario*/}
                <div className="space-y-6">
                    {/*correo*/}
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Correo:
                        </label>
                        <input
                            type="email"
                            placeholder="Escribe aquí..."
                            className="w-full px-4 py-3 rounded-lg border-none outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition-all"
                        />
                    </div>

                    {/*contra*/}
                    <div>
                        <label className="block text-white font-medium mb-2">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            placeholder="Escribe aquí..."
                            maxLength={15}
                            className="w-full px-4 py-3 rounded-lg border-none outline-none text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 transition-all"
                        />
                    </div>

                    {/*Olvidaste tu contraseña?, No tienes una cuenta?*/}
                        <div className="flex flex-row justify-between pt-4">
                            <div className="text-sm">
                                <a href="/changepassword" className="text-white hover:text-orange-400 underline">¿Olvidaste tu contraseña?</a>
                            </div>

                            <div className="text-sm text-white">
                                ¿No tienes cuenta? <a href="/registro" className="text-white hover:text-orange-400 underline">Crear una</a>
                            </div>
                        </div>
                    {/*Boton de iniciar sesion*/}
                    <div className="pt-4">
                        <button type="button" 
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login