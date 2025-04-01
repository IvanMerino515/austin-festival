
import React, { useEffect, useState, useRef } from 'react';

const PixelCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelSize = 2;

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    // Setup the canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Set canvas to full screen
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Draw or erase the pixel under the cursor
      if (context) {
        // Get the color of the current pixel
        const x = Math.floor(e.clientX / pixelSize) * pixelSize;
        const y = Math.floor(e.clientY / pixelSize) * pixelSize;
        
        const pixelData = context.getImageData(x, y, 1, 1).data;
        const currentColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
        
        // RGB values for #f06ffc
        const targetColor = 'rgb(240, 111, 252)';
        
        // Toggle the pixel color
        if (currentColor === targetColor) {
          // If already magenta, revert to original color (transparent)
          context.clearRect(x, y, pixelSize, pixelSize);
        } else {
          // If not magenta, make it magenta
          context.fillStyle = '#f06ffc';
          context.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
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
