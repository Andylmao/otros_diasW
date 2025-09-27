import { useState } from 'react'

const Header = ({ onSectionChange, currentSection, onToggleColors, isInverted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${isInverted ? 'bg-white text-black' : 'bg-black text-white'} border-b-2 border-yellow-400 sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation('home')}
              className="ascii-text text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-300"
            >
              OTROS_DÍAS
            </button>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`ascii-text px-3 py-2 text-sm font-medium transition duration-300 ${
                currentSection === 'home' 
                  ? 'text-yellow-400 border-b-2 border-yellow-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              INICIO
            </button>
            
            <button 
              onClick={() => handleNavigation('artists')}
              className={`ascii-text px-3 py-2 text-sm font-medium transition duration-300 ${
                currentSection === 'artists' 
                  ? 'text-yellow-400 border-b-2 border-yellow-400' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              ARTISTAS
            </button>
            
            <button className="ascii-text text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              TIENDA
            </button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Botón invertir colores */}
            <button 
              onClick={onToggleColors}
              className="p-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 ascii-text"
              title="Invertir colores"
            >
              {isInverted ? 'DARK' : 'LIGHT'}
            </button>

            <button className="text-gray-300 hover:text-white transition duration-300">
              <span className="ascii-text">[BUSCAR]</span>
            </button>
            
            <button className="text-gray-300 hover:text-white transition duration-300">
              <span className="ascii-text">[CARRITO]</span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="ascii-text">[MENU]</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isInverted ? 'bg-gray-100' : 'bg-gray-900'} border-t border-yellow-400`}>
              <button 
                onClick={() => handleNavigation('home')}
                className={`ascii-text block w-full text-left px-3 py-2 text-base font-medium transition duration-300 ${
                  currentSection === 'home' ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                INICIO
              </button>
              
              <button 
                onClick={() => handleNavigation('artists')}
                className={`ascii-text block w-full text-left px-3 py-2 text-base font-medium transition duration-300 ${
                  currentSection === 'artists' ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ARTISTAS
              </button>
              
              <button className="ascii-text block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300">
                TIENDA
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header