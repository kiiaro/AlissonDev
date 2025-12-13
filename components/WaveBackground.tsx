import React, { useEffect, useRef } from 'react';

const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    let time = 0;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 7, 0.1)'; 
      ctx.fillRect(0, 0, width, height);
      
      ctx.lineWidth = 2;
      
      const lines = 8;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const yBase = height * 0.6; // Slightly lower
        
        const alpha = 0.03 + (Math.sin(time * 0.2 + i) + 1) * 0.04;
        ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`; // Purple tint
        
        for (let x = 0; x < width; x += 5) {
          const y = yBase + 
            Math.sin(x * 0.001 + time * 0.4 + i * 0.5) * 120 * Math.sin(time * 0.1) +
            Math.cos(x * 0.003 - time * 0.2) * 60;
            
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.008;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default WaveBackground;