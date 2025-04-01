
import React, { useEffect, useState, useRef } from 'react';

const PixelCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelSize = 2;

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      if (context) {
        const x = Math.floor(e.clientX / pixelSize) * pixelSize;
        const y = Math.floor(e.clientY / pixelSize) * pixelSize;
        
        const pixelData = context.getImageData(x, y, 1, 1).data;
        const currentColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
        
        const targetColor = 'rgb(240, 111, 252)';
        
        if (currentColor === targetColor) {
          context.clearRect(x, y, pixelSize, pixelSize);
        } else {

          context.fillStyle = '#f06ffc';
          context.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);
  
  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" 
      />
      <div 
        className="fixed w-[2px] h-[2px] bg-festival-dark pointer-events-none z-[10000]"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default PixelCursor;
