const Hero = () => {
  return (
    <section className="relative bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion background"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ESTILO PARA TODOS TUS DÍAS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Descubre la nueva colección de ropa que se adapta a tu estilo de vida. Calidad, comodidad y diseño en cada prenda.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">
              Comprar Ahora
            </button>
            <button className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition duration-300">
              Ver Colección
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero