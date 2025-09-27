import { useEffect, useState } from 'react';

const RTSEffects = ({ isInverted }) => {
  const [flicker, setFlicker] = useState(true);

  // Efecto de flicker aleatorio
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setFlicker(Math.random() > 0.8);
    }, 5000);

    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <>
      {/* Efecto de noise/estático */}
      <div className="rts-noise"></div>
      
      {/* Efecto de scanlines */}
      <div className="rts-scanlines"></div>
      
      {/* Efecto de flicker (parpadeo) */}
      {flicker && <div className="rts-flicker"></div>}
      
      {/* Borde de monitor */}
      <div className="rts-monitor-border"></div>
      
      {/* Efecto vignette */}
      <div className="rts-vignette"></div>
      
      {/* Curvatura de pantalla */}
      <div className="rts-screen-curvature"></div>
      
      {/* Brillo de pantalla */}
      <div className="rts-screen-glow"></div>
      
      {/* Desvanecimiento de bordes */}
      <div className="rts-fade"></div>
      
      {/* Efecto de respiración sutil */}
      <div 
        className="fixed inset-0 pointer-events-none z-993"
        style={{
          animation: 'glowPulse 8s ease-in-out infinite',
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(255,255,0,0.02) 100%)'
        }}
      ></div>
    </>
  );
};

export default RTSEffects;