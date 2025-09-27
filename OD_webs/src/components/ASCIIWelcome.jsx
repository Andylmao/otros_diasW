import { useState, useEffect } from 'react';

const ASCIIWelcome = ({ onEnterSite, isInverted }) => {
  const [position, setPosition] = useState({ x: 100, y: 300 });
  const [showPrompt, setShowPrompt] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  // Actualizar tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveCharacter = (dx, dy) => {
    const newX = Math.max(50, Math.min(windowSize.width - 100, position.x + dx));
    const newY = Math.max(50, Math.min(windowSize.height - 150, position.y + dy));
    
    setPosition({ x: newX, y: newY });
    
    // Detectar cuando está cerca de la puerta (lado derecho)
    const doorX = windowSize.width - 150;
    const doorY = windowSize.height / 2;
    
    setShowPrompt(newX > doorX - 100 && Math.abs(newY - doorY) < 100);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowRight': moveCharacter(30, 0); break;
        case 'ArrowLeft': moveCharacter(-30, 0); break;
        case 'ArrowUp': moveCharacter(0, -30); break;
        case 'ArrowDown': moveCharacter(0, 30); break;
        case 'Enter':
          if (showPrompt) onEnterSite();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [position, showPrompt, windowSize]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Efectos RTS en toda la pantalla */}
      <div className="rts-noise"></div>
      <div className="rts-scanlines"></div>
      <div className="rts-vignette"></div>
      
      {/* Borde amarillo alrededor de toda la ventana */}
      <div className="fixed inset-0 border-8 border-yellow-400 pointer-events-none z-40"></div>
      
      {/* TÍTULO - ARRIBA DEL TODO, CENTRADO */}
      <div className="fixed top-10 left-0 right-0 text-center z-30">
        <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold ascii-text ascii-glow inline-block">
          OTROS DÍAS
        </h1>
        <div className="text-gray-300 text-xl md:text-2xl ascii-text mt-2">
          SISTEMA_INTERACTIVO_v1.0
        </div>
      </div>

      {/* PUERTA - EXTREMO DERECHO, CENTRADA VERTICALMENTE */}
      <div 
        className="fixed border-4 border-yellow-400 p-6 bg-black z-30 flex items-center justify-center ascii-border"
        style={{ 
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '140px',
          height: '160px'
        }}
      >
        <div className="text-yellow-400 text-center ascii-text text-xl">
          [    ]
          {showPrompt && (
            <div className="text-green-400 text-sm mt-2 ascii-glow">
              _ENTER_
            </div>
          )}
        </div>
      </div>

      {/* PERSONAJE - SE MUEVE POR TODA LA PANTALLA */}
      <div 
        className="fixed text-yellow-400 text-3xl z-20 ascii-glow"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      >
        <pre className="leading-tight">
          {`  O\n`}
          {` lol\n`}
          {`  W\n`}
          {`  |`}
        </pre>
      </div>

      {/* INSTRUCCIONES - ESQUINA INFERIOR IZQUIERDA */}
      <div className="fixed bottom-12 left-10 text-gray-400 ascii-text z-30 text-lg">
        <div>↑↓←→_MOVIMIENTO</div>
        <div>ENTER_INTERACTUAR</div>
      </div>

      {/* COORDENADAS - ESQUINA SUPERIOR DERECHA */}
      <div className="fixed top-12 right-10 text-gray-500 ascii-text z-30 text-sm">
        <div>X: {Math.round(position.x)}</div>
        <div>Y: {Math.round(position.y)}</div>
        <div>VENTANA: {windowSize.width}x{windowSize.height}</div>
      </div>

      {/* MENSAJE DE AYUDA - CENTRADO */}
      <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 text-center z-30">
        <p className="text-gray-400 text-xl ascii-text">
          
        </p>
      </div>

      {/* INDICADOR DE PUERTA - FLECHA */}
      

      {/* GRID DE FONDO EN TODA LA PANTALLA */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  );
};

export default ASCIIWelcome;