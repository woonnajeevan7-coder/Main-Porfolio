import React, { useEffect, useRef, useState } from 'react';

const randomColors = (count) =>
  Array.from({ length: count }, () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
  );

export function TubesBackground({ children, className = '', enableClickInteraction = true }) {
  const canvasRef = useRef(null);
  const tubesRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    if (!canvasRef.current) return;

    import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
      .then((module) => {
        if (!mounted || !canvasRef.current) return;
        const TubesCursor = module.default;
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ['#7c3aed', '#06b6d4', '#f967fb'],
            lights: {
              intensity: 200,
              colors: ['#5227FF', '#B19EEF', '#FF9FFC', '#60aed5']
            }
          }
        });
        tubesRef.current = app;
        setIsLoaded(true);
      })
      .catch((err) => console.error('TubesCursor load error:', err));

    return () => {
      mounted = false;
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    tubesRef.current.tubes?.setColors?.(randomColors(3));
    tubesRef.current.tubes?.setLightsColors?.(randomColors(4));
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onClick={handleClick}
      style={{ cursor: 'crosshair' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
