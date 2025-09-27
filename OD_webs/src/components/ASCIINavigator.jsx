import { useState, useEffect } from 'react';

const ASCIINavigator = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [walkToggle, setWalkToggle] = useState(false);
  const [currentRoom, setCurrentRoom] = useState('main');

  const rooms = {
    main: {
      name: "SALA PRINCIPAL",
      description: "BIENVENIDO A OTROS DÍAS",
      objects: [
        { x: 200, y: 150, label: "TIENDA", target: "shop" },
        { x: 300, y: 150, label: "ARTISTAS", target: "artists" },
        { x: 400, y: 150, label: "GALERÍA", target: "gallery" }
      ]
    },
    shop: {
      name: "TIENDA SECRETA",
      description: "COLECCIÓN EXCLUSIVA",
      objects: [
        { x: 200, y: 150, label: "CAMISETAS", info: "Diseños limitados" },
        { x: 300, y: 150, label: "ACCESORIOS", info: "Piezas únicas" }
      ]
    }
  };

  const moveCharacter = (dx, dy) => {
    setPosition(prev => ({
      x: Math.max(50, Math.min(750, prev.x + dx)),
      y: Math.max(50, Math.min(350, prev.y + dy))
    }));
    setWalkToggle(!walkToggle);

    // Verificar colisiones con objetos
    const currentRoomData = rooms[currentRoom];
    currentRoomData.objects.forEach(obj => {
      const distance = Math.sqrt(Math.pow(position.x + dx - obj.x, 2) + Math.pow(position.y + dy - obj.y, 2));
      if (distance < 60 && obj.target) {
        setCurrentRoom(obj.target);
      }
    });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowRight': case 'd': moveCharacter(20, 0); break;
        case 'ArrowLeft': case 'a': moveCharacter(-20, 0); break;
        case 'ArrowUp': case 'w': moveCharacter(0, -20); break;
        case 'ArrowDown': case 's': moveCharacter(0, 20); break;
        case 'Escape': setCurrentRoom('main'); break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position]);

  const renderCharacter = () => (
    <div 
      className="absolute text-yellow-400 ascii-glow"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <pre className="text-center">
        {`  O\n`}
        {` lol\n`}
        {`  W\n`}
        {walkToggle ? " / \\" : "  |"}
      </pre>
    </div>
  );

  const renderObjects = () => (
    rooms[currentRoom].objects.map((obj, index) => (
      <div
        key={index}
        className="absolute border border-yellow-400 p-2 ascii-border"
        style={{ left: `${obj.x}px`, top: `${obj.y}px` }}
      >
        <div className="text-yellow-400 text-sm">{obj.label}</div>
        {obj.info && <div className="text-white text-xs mt-1">{obj.info}</div>}
      </div>
    ))
  );

  return (
    <div className="relative w-full h-96 bg-black border-2 border-yellow-400 mt-8 ascii-border">
      {/* Header de la sala */}
      <div className="absolute top-4 left-4 text-yellow-400 ascii-glow">
        <div className="text-lg">{rooms[currentRoom].name}</div>
        <div className="text-sm">{rooms[currentRoom].description}</div>
      </div>

      {/* Controles */}
      <div className="absolute top-4 right-4 text-white text-sm">
        <div>↑↓←→ para mover</div>
        <div>ESC para volver</div>
      </div>

      {/* Objetos de la sala */}
      {renderObjects()}

      {/* Personaje */}
      {renderCharacter()}

      {/* Efecto de grid sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: `
               linear-gradient(rgba(255,255,0,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,0,0.1) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }}></div>
    </div>
  );
};

export default ASCIINavigator;