import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle clicked! Current state:", isOpen);
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    console.log(`Navegando a: ${path}`);
    // Solo cerrar en móviles
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Botón hamburguesa flotante para cuando el sidebar está cerrado */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg text-white hover:bg-red-500 transition-colors shadow-lg"
          style={{ backgroundColor: 'rgb(229,93,93)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Overlay para móviles */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'rgb(229,93,93)', fontFamily: 'Roboto, sans-serif' }}
      >
        <div className="p-6">
          {/* Header del sidebar con botón hamburguesa */}
          <div className="flex items-start justify-between mb-8">
            <h2 className="font-oboto text-black font-bold text-lg leading-tight">
              EMEWES-CLINICA<br />
            </h2>
            
            {/* Botón hamburguesa del header */}
            <button
              onClick={toggleSidebar}
              className="p-1 text-black rounded-lg bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:text-gray-200 transition-colors ml-2 mt-1"
              title="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Enlaces del menú */}
          <div className="space-y-3">
            <button
              onClick={() => handleNavigation('/inicio')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Inicio
            </button>
            
            <button
              onClick={() => handleNavigation('/servicios')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Servicios
            </button>
            
            <button
              onClick={() => handleNavigation('/especialidades')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Especialidades
            </button>
            
            <button
              onClick={() => handleNavigation('/medicos')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Médicos
            </button>
            
            <button
              onClick={() => handleNavigation('/instalaciones')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Nuestras Instalaciones
            </button>
            
            <button
              onClick={() => handleNavigation('/nosotros')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Sobre nosotros
            </button>
            
            <button
              onClick={() => handleNavigation('/blog')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Blog
            </button>
            
            <button
              onClick={() => handleNavigation('/contacto')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Contáctanos
            </button>
            
            <button
              onClick={() => handleNavigation('/logout')}
              className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg mb-2 bg-transparent shadow-[1px_1px_2px_rgba(0,0,0,0.3)] hover:bg-red-600 hover:text-white transition-all duration-200 "
            >
              Cerrar Sesión
            </button>
            
          </div>
        </div>
      </nav>

      {/* Espaciador para el contenido principal cuando sidebar está abierto en pc */}
      <div className={`hidden lg:block transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} flex-shrink-0`} />
    </>
  );
}