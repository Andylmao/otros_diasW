import { useState } from 'react'

const Header = ({ onSectionChange, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false); // Cerrar menú móvil al hacer clic
  };

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable para volver al home */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('home')}
              className="arkham-title text-2xl font-bold text-cyan-400 hover:text-white transition duration-300"
            >
              OTROS DÍAS
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`arkham-font px-3 py-2 text-sm font-medium transition duration-300 ${
                currentSection === 'home' 
                  ? 'text-cyan-400 border-b-2 border-cyan-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Inicio
            </button>
            
            <button 
              onClick={() => handleNavigation('artists')}
              className={`arkham-font px-3 py-2 text-sm font-medium transition duration-300 ${
                currentSection === 'artists' 
                  ? 'text-cyan-400 border-b-2 border-cyan-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Artistas
            </button>
            
            <button className="arkham-font text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Mujer
            </button>
            <button className="arkham-font text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Hombre
            </button>
            <button className="arkham-font text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Nuevo
            </button>
            <button className="arkham-font text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Ofertas
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white transition duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-cyan-500">
              <button 
                onClick={() => handleNavigation('home')}
                className={`arkham-font block w-full text-left px-3 py-2 text-base font-medium transition duration-300 ${
                  currentSection === 'home' ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                Inicio
              </button>
              
              <button 
                onClick={() => handleNavigation('artists')}
                className={`arkham-font block w-full text-left px-3 py-2 text-base font-medium transition duration-300 ${
                  currentSection === 'artists' ? 'text-cyan-400' : 'text-gray-300'
                }`}
              >
                Artistas
              </button>
              
              <button className="arkham-font block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300">
                Mujer
              </button>
              <button className="arkham-font block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300">
                Hombre
              </button>
              <button className="arkham-font block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300">
                Nuevo
              </button>
              <button className="arkham-font block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300">
                Ofertas
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header