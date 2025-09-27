import { useState } from 'react';

const Artists = () => {
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="arkham-title text-4xl md:text-6xl font-bold text-white mb-4 text-glow">
            ARKHAM ARTISTS
          </h2>
          <p className="arkham-font text-xl text-gray-300 max-w-3xl mx-auto">
            Los maestros detrás del arte que define nuestra era. Cada diseño es una pieza de colección inspirada en el asilo de Arkham.
          </p>
        </div>

        {/* Grid de artistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              className="group relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:border-glow cursor-pointer"
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
                <h3 className="arkham-title text-2xl font-bold text-white mb-2">{artist.name}</h3>
                <p className="arkham-font text-cyan-400 font-semibold mb-2">{artist.alias}</p>
                <p className="arkham-font text-gray-400 text-sm">{artist.specialty}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal de artista seleccionado */}
        {selectedArtist && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500">
              <div className="relative">
                <button 
                  onClick={() => setSelectedArtist(null)}
                  className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2 z-10"
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
                    <h3 className="arkham-title text-3xl font-bold text-white mb-2">{selectedArtist.name}</h3>
                    <p className="arkham-font text-cyan-400 text-xl mb-4">{selectedArtist.alias}</p>
                    <p className="arkham-font text-gray-300 mb-4">{selectedArtist.bio}</p>
                    <p className="arkham-font text-gray-400">Especialidad: {selectedArtist.specialty}</p>
                  </div>
                  
                  <div className="p-8 bg-gray-800">
                    <h4 className="arkham-title text-2xl font-bold text-white mb-6">Diseños Destacados</h4>
                    <div className="space-y-4">
                      {selectedArtist.designs.map((design) => (
                        <div key={design.id} className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg">
                          <img
                            src={design.image}
                            alt={design.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h5 className="arkham-font font-semibold text-white">{design.name}</h5>
                            <p className="arkham-font text-cyan-400">{design.price}</p>
                          </div>
                          <button className="arkham-font bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition duration-300">
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
          <div className="arkham-font bg-gradient-to-r from-cyan-900 to-purple-900 p-8 rounded-lg border border-cyan-500">
            <h3 className="text-2xl font-bold text-white mb-4">¿ERES ARTISTA?</h3>
            <p className="text-gray-300 mb-6">Únete a nuestra galería de creadores y muestra tu arte al mundo.</p>
            <button className="arkham-font bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300">
              Contactar para Colaborar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;