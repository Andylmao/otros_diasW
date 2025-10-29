import { useState, useEffect } from "react";

// ===============================================
// 🎯 Retícula personalizada tipo ejes X/Y
// ===============================================
const CustomReticle = ({ isInverted }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  const color = isInverted ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)";
  const border = isInverted ? "2px solid black" : "2px solid white";

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Líneas horizontales y verticales que cruzan todo */}
      <div
        style={{
          position: "absolute",
          top: `${pos.y}px`,
          left: 0,
          width: "100%",
          height: "1px",
          backgroundColor: color,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: `${pos.x}px`,
          top: 0,
          height: "100%",
          width: "1px",
          backgroundColor: color,
        }}
      ></div>

      {/* Círculo central de la mira */}
      <div
        style={{
          position: "absolute",
          top: `${pos.y - 50}px`,
          left: `${pos.x - 50}px`,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: border,
          boxShadow: isInverted
            ? "0 0 15px rgba(0,0,0,0.5)"
            : "0 0 15px rgba(255,255,255,0.5)",
        }}
      ></div>
    </div>
  );
};

// ===============================================
// 🦇 Componente principal de artistas
// ===============================================
const Artists = ({ isInverted }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  // =================================================
  // Ejemplos extendidos para llenar el rombo visual
  // =================================================
  const artists = [
    {
      id: 1,
      name: "KILLER MOTH",
      alias: "El Diseñador Oscuro",
      specialty: "Arte Gótico & Cómics",
      bio: "Artista visionario especializado en la estética oscura del universo Batman.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 2,
      name: "BAT GRAFIK",
      alias: "El Vigilante Visual",
      specialty: "Siluetas & Sombra",
      bio: "Especialista en el arte de la sombra y la silueta.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 3,
      name: "JOKER’S SCRIBE",
      alias: "El Caos Creativo",
      specialty: "Arte Psicodélico & Villanos",
      bio: "Maestro del color y la anarquía visual.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 4,
      name: "CAT INK",
      alias: "La Ladrona del Arte",
      specialty: "Tinta & Estética Noir",
      bio: "Explora la dualidad entre belleza y peligro.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 5,
      name: "RIDDLER VISUALS",
      alias: "El Enigma Estético",
      specialty: "Arte Conceptual & Puzzles",
      bio: "Obras que retan la percepción del espectador.",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 6,
      name: "HARLEY DESIGN",
      alias: "Caos Pop",
      specialty: "Collage Digital & Pop Art",
      bio: "Fusiona locura y ternura en una misma estética.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 7,
      name: "TWO-FRAME",
      alias: "El Doble Enfocado",
      specialty: "Simetría & Dualidad",
      bio: "Composiciones que equilibran el bien y el mal.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 8,
      name: "SCARECROW MEDIA",
      alias: "El Terror Visual",
      specialty: "Fotografía Experimental",
      bio: "Despierta miedos con distorsiones visuales impactantes.",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
    {
      id: 9,
      name: "PENGUIN PRINTS",
      alias: "El Comerciante del Arte",
      specialty: "Grabado & Arte Digital",
      bio: "Estilo industrial con ecos del hampa de Gotham.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
      designs: [],
    },
  ];

  const bg = isInverted ? "bg-white text-black" : "bg-black text-white";
  const borderColor = isInverted ? "border-black" : "border-white";
  const overlayColor = isInverted ? "bg-white/80" : "bg-black/80";

  // =================================================
  // 💎 Layout rombo: columnas centradas en diagonal
  // =================================================
  const rowPattern = [
    [3], // fila 1: un artista centrado
    [2, 4], // fila 2: dos artistas escalonados
    [1, 3, 5], // fila 3: tres artistas centrados
    [2, 4], // fila 4
    [3], // fila 5
  ];

  return (
    <section className={`relative min-h-screen py-16 ${bg} cursor-none`}>
      {/* 🎯 Mira */}
      <CustomReticle isInverted={isInverted} />

      {/* 🦇 Título */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-widest mb-2">
          OTROS_ARTISTAS
        </h2>
        <p className="text-lg opacity-70">
          Selecciona un artista del panel para ver su perfil.
        </p>
      </div>

      {/* 🧱 Cuadrícula en forma de rombo */}
      <div className="flex flex-col items-center space-y-4">
        {rowPattern.map((columns, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-4">
            {columns.map((col) => {
              const artist = artists[col - 1];
              if (!artist) return null;
              return (
                <div
                  key={artist.id}
                  onClick={() => setSelectedArtist(artist)}
                  className={`relative aspect-square w-28 sm:w-32 md:w-36 border-2 ${borderColor} overflow-hidden cursor-none transition duration-300 group`}
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-300"
                  />
                  <div
                    className={`absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-80 flex items-center justify-center transition duration-300`}
                  >
                    <span className="font-bold tracking-wider text-center text-xs sm:text-sm">
                      {artist.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* 🪪 Modal de artista */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div
            className={`relative max-w-4xl w-full rounded-lg overflow-hidden border-4 ${borderColor} ${
              isInverted ? "bg-white text-black" : "bg-gray-900 text-white"
            }`}
          >
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-full h-64 object-cover rounded-lg mb-6 grayscale"
                />
                <h3 className="text-3xl font-bold mb-2">
                  {selectedArtist.name}
                </h3>
                <p className="text-xl mb-2 opacity-80">
                  {selectedArtist.alias}
                </p>
                <p className="opacity-70 mb-4">{selectedArtist.bio}</p>
                <p className="font-semibold opacity-80">
                  Especialidad: {selectedArtist.specialty}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Artists;
