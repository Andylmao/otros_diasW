const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">OTROS DÍAS</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Tu destino para encontrar la ropa perfecta que se adapte a tu estilo de vida. Calidad, comodidad y diseño en cada prenda.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.25 14.816 3.76 13.665 3.76 12.368s.49-2.448 1.366-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.366 2.026 1.366 3.323s-.491 2.448-1.366 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-10.966c-.717 0-1.297-.58-1.297-1.297s.58-1.297 1.297-1.297 1.297.58 1.297 1.297-.58 1.297-1.297 1.297zm2.332 5.254c-.032 2.483-1.366 4.685-3.486 5.911-2.099 1.226-4.685 1.226-6.784 0-2.099-1.226-3.423-3.428-3.486-5.911-.032-2.483 1.366-4.685 3.486-5.911 2.099-1.226 4.685-1.226 6.784 0 2.099 1.226 3.423 3.428 3.486 5.911z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Tienda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Nuevo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Ofertas</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@otrosdias.com</li>
              <li>Teléfono: +1 234 567 890</li>
              <li>Dirección: Tu Ciudad, País</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 OTROS DÍAS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer