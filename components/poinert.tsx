"use client"
import React, { useEffect, useRef } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circleRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();

    const drawSpotlight = () => {
      if (context) {
        const gradient = context.createRadialGradient(
          circleRef.current.x,
          circleRef.current.y,
          0,
          circleRef.current.x,
          circleRef.current.y,
          300
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

        // Verificar si canvas es nulo antes de acceder a sus propiedades
        if (canvas) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = gradient;
          context.fillRect(0, 0, canvas.width, canvas.height);
        }

        requestAnimationFrame(drawSpotlight);
      }
    };

    drawSpotlight();

    const handleResize = () => {
      resizeCanvas();
    };

    const handleMouseMove = (event: MouseEvent) => {
      // Actualizar la posición del círculo con la posición del cursor
      circleRef.current.x = event.clientX;
      circleRef.current.y = event.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default CanvasBackground;
