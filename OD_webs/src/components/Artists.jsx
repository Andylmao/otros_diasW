import { useState } from 'react';

const Artists = ({ isInverted }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const artists = [
    {
      id: 1,
      name: "KILLER MOTH",
      alias: "El Diseñador Oscuro",
      specialty: "Arte Gótico & Cómics",
      bio: "Artista visionario especializado en la estética oscura del universo Batman. Sus diseños capturan la esencia de Arkham Asylum con un toque moderno y urbano.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      designs: [
        {
          id: 1,
          name: "Asylum Shadows",
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: "$34.99"
        },
        {
          id: 2,
          name: "Gotham Nights",
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: "$34.99"
        }
      ]
    },
    {
      id: 2,
      name: "JOKER'S Scribe",
      alias: "El Caos Creativo",
      specialty: "Arte Psicodélico & Villanos",
      bio: "Maestro del color y la anarquía visual. Sus diseños reflejan el caos controlado de los personajes más icónicos de DC Comics.",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      designs: [
        {
          id: 1,
          name: "Chaos Theory",
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: "$34.99"
        }
      ]
    },
    {
      id: 3,
      name: "BAT GRAFIK",
      alias: "El Vigilante Visual",
      specialty: "Siluetas & Sombra",
      bio: "Especialista en el arte de la sombra y la silueta. Cada diseño cuenta una historia de vigilancia y justicia en la noche de Gotham.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      designs: [
        {
          id: 1,
          name: "Dark Knight",
          image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          price: "$34.99"
        }
      ]
    }
  ];

  // Estilos basados en el modo invertido
  const backgroundColor = isInverted ? 'bg-white' : 'bg-black';
  const textColor = isInverted ? 'text-black' : 'text-white';
  const secondaryTextColor = isInverted ? 'text-gray-700' : 'text-gray-300';
  const borderColor = isInverted ? 'border-black' : 'border-yellow-400';
  const cardBackground = isInverted ? 'bg-gray-100' : 'bg-gray-800';
  const accentColor = isInverted ? 'text-black-600' : 'text-yellow-400';
  const glowborder = isInverted ? 'ascii-borderb' : 'ascii-border';
  const textglow = isInverted ?'ascii-glowb' : 'ascii-glow';
  return (
    <section className={`min-h-screen py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16 ">
          <h2 className={`ascii-text text-4xl md:text-6xl font-bold mb-4 ${accentColor} glitch-subtle ${accentColor} ${textglow}`}>
            OTROS_ARTISTAS
          </h2>
          <p className={`ascii-text text-xl max-w-3xl mx-auto ${secondaryTextColor}`}>
            Aqui va una descripcion de esta ventana
          </p>
        </div>

        {/* Grid de artistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              className={`group relative ${cardBackground} rounded-lg overflow-hidden border ${borderColor} transition-all duration-300 cursor-pointer ${glowborder}`}
              onClick={() => setSelectedArtist(artist)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className={`ascii-text text-2xl font-bold mb-2 ${textColor}`}>{artist.name}</h3>
                <p className={`ascii-text font-semibold mb-2 ${accentColor}`}>{artist.alias}</p>
                <p className={`ascii-text text-sm ${secondaryTextColor}`}>{artist.specialty}</p>
              </div>
              <div className={`absolute inset-0 ${isInverted ? 'bg-white' : 'bg-black'} bg-opacity-0 group-hover:bg-opacity-20 transition duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Modal de artista seleccionado */}
        {selectedArtist && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className={`${isInverted ? 'bg-white' : 'bg-gray-900'} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border ${borderColor}`}>
              <div className="relative">
                <button 
                  onClick={() => setSelectedArtist(null)}
                  className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 z-10 hover:bg-red-700 transition duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className={`ascii-text text-3xl font-bold mb-2 ${textColor}`}>{selectedArtist.name}</h3>
                    <p className={`ascii-text text-xl mb-4 ${accentColor}`}>{selectedArtist.alias}</p>
                    <p className={`ascii-text mb-4 ${secondaryTextColor}`}>{selectedArtist.bio}</p>
                    <p className={`ascii-text ${secondaryTextColor}`}>Especialidad: {selectedArtist.specialty}</p>
                  </div>
                  
                  <div className={`p-8 ${isInverted ? 'bg-gray-200' : 'bg-gray-800'}`}>
                    <h4 className={`ascii-text text-2xl font-bold mb-6 ${textColor}`}>Diseños Destacados</h4>
                    <div className="space-y-4">
                      {selectedArtist.designs.map((design) => (
                        <div key={design.id} className={`flex items-center space-x-4 ${isInverted ? 'bg-gray-300' : 'bg-gray-900'} p-4 rounded-lg`}>
                          <img
                            src={design.image}
                            alt={design.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h5 className={`ascii-text font-semibold ${textColor}`}>{design.name}</h5>
                            <p className={`ascii-text ${accentColor}`}>{design.price}</p>
                          </div>
                          <button className={`ascii-text ${isInverted ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-400 hover:bg-yellow-500'} text-black px-4 py-2 rounded transition duration-300`}>
                            Comprar
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Llamada a la acción */}
        <div className="text-center">
          <div className={`ascii-text p-8 rounded-lg border ${borderColor} ${isInverted ? 'bg-gradient-to-r from-green-200 to-blue-200' : 'bg-gradient-to-r from-gray-800 to-gray-900'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>¿ERES_ARTISTA?</h3>
            <p className={`mb-6 ${secondaryTextColor}`}>Únete a nuestra galería de creadores y muestra tu arte al mundo.</p>
            <button className={`ascii-text ${isInverted ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-400 hover:bg-yellow-500'} text-black px-8 py-3 rounded-lg font-semibold transition duration-300`}>
              Contactar_para_Colaborar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;