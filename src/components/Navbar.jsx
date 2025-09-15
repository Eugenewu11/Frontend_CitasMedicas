import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    console.log(`Navegando a: ${path}`);
    navigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Cerrar dropdown al hacer click fuera
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="w-full bg-blue-900 shadow-lg sticky top-0 z-50" onMouseLeave={handleMouseLeave}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/inicio')}
              className="text-white font-bold text-xl font-roboto hover:text-orange-400 transition-colors duration-200"
            >
              <img src="/logoClinica.png"
                   alt="EMEWES Logo" 
                   className="hw-12 h-12 rounded-full mr-4"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Inicio */}
              <button
                onClick={() => handleNavigation('/inicio')}
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Inicio
              </button>

              {/* Servicios Médicos*/}
              <div className="relative">
                <button
                  onMouseEnter={() => toggleDropdown('servicios')}
                  className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Servicios Médicos
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'servicios' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <button
                        onClick={() => handleNavigation('/servicios')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        Nuestros Servicios
                      </button>
                      <button
                        onClick={() => handleNavigation('/especialidades')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        Especialidades
                      </button>
                      
                    </div>
                  </div>
                )}
              </div>

              {/* Acerca de*/}
              <div className="relative">
                <button
                  onMouseEnter={() => toggleDropdown('acerca')}
                  className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  Acerca de
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'acerca' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <button
                        onClick={() => handleNavigation('/nosotros')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        Sobre Nosotros
                      </button>
                      <button
                        onClick={() => handleNavigation('/instalaciones')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        Nuestras Instalaciones
                      </button>
                      <button
                        onClick={() => handleNavigation('/blog')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                      >
                        Blog y Noticias
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contacto*/}
              <button
                onClick={() => handleNavigation('/contacto')}
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contacto
              </button>
            </div>
          </div>

          {/*Login/Registro*/}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => handleNavigation('/login')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => handleNavigation('/registro')}
              className="bg-transparent hover:bg-blue-800 text-white px-3 py-1.5 rounded-md text-sm font-medium border border-white transition-all duration-200 whitespace-nowrap"
            >
              Registrarse
            </button>
          </div>

          {/* Mobile menu boton */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-400 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            <button
              onClick={() => handleNavigation('/inicio')}
              className="text-white hover:text-orange-400 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
            >
              Inicio
            </button>
            
            {/* Sección Servicios Médicos en móvil */}
            <div className="border-t border-blue-600 pt-2">
              <div className="px-3 py-2 text-orange-300 text-sm font-semibold uppercase tracking-wider">
                Servicios Médicos
              </div>
              <button
                onClick={() => handleNavigation('/servicios')}
                className="text-white hover:text-orange-400 hover:bg-blue-700 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                Todos los Servicios
              </button>
              <button
                onClick={() => handleNavigation('/especialidades')}
                className="text-white hover:text-orange-400 hover:bg-blue-700 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                Especialidades
              </button>
              <button
                onClick={() => handleNavigation('/medicos')}
                className="text-white hover:text-orange-400 hover:bg-blue-700 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                Nuestros Médicos
              </button>
            </div>

            {/* Sección Acerca de en móvil */}
            <div className="border-t border-blue-600 pt-2">
              <div className="px-3 py-2 text-orange-300 text-sm font-semibold uppercase tracking-wider">
                Acerca de
              </div>
              <button
                onClick={() => handleNavigation('/nosotros')}
                className="text-white hover:text-orange-400 hover:bg-blue-700 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => handleNavigation('/instalaciones')}
                className="text-white hover:text-orange-400 hover:bg-blue-700 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                Nuestras Instalaciones
              </button>
              <button
                onClick={() => handleNavigation('/blog')}
                className="text-white hover:text-orange-400 hover:bg-blue-700 block px-6 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200"
              >
                Blog y Noticias
              </button>
            </div>

            <button
              onClick={() => handleNavigation('/contacto')}
              className="text-white hover:text-orange-400 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 border-t border-blue-600 mt-2 pt-4"
            >
              Contacto
            </button>

            {/* Botones de Login/Registro en móvil */}
            <div className="pt-4 pb-3 border-t border-blue-700">
              <button
                onClick={() => handleNavigation('/login')}
                className="bg-orange-600 hover:bg-orange-700 text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 mb-2"
              >
                Iniciar Sesión
              </button>
              <button
                onClick={() => handleNavigation('/registro')}
                className="bg-transparent hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium border border-white w-full text-left transition-all duration-200"
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}