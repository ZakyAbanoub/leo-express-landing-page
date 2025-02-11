'use client'

import { useEffect, useRef } from 'react';

interface Circle {
  x: number;
  y: number;
  size: number;
  time: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  hue: number;
}

export default function CircleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<Circle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    
    circlesRef.current = Array.from({ length: 4 }, (_, i) => ({
      x: centerX,
      y: centerY,
      size: 200 + (i * 200),
      time: Math.random() * Math.PI * 2,
      speed: 0.0005 + (Math.random() * 0.0005),
      rotation: Math.random() * 360,
      rotationSpeed: 0.02 / (i + 1),
      hue: 180 + (Math.random() * 60)
    }));

    const animate = () => {
      const circles = circlesRef.current;
      const container = containerRef.current;
      if (!container) return;

      circles.forEach((circle, i) => {
        // Movimento Lissajous per un effetto più organico
        circle.time += circle.speed;
        
        const scale = 15 / (i + 1); // Movimento più piccolo per cerchi più grandi
        circle.x = centerX + Math.sin(circle.time) * Math.cos(circle.time * 0.5) * scale;
        circle.y = centerY + Math.cos(circle.time) * Math.sin(circle.time * 0.7) * scale;
        
        circle.rotation += circle.rotationSpeed;
        circle.hue = 180 + (Math.sin(circle.time * 0.1) * 30);

        const element = container.children[i] as HTMLElement;
        if (element) {
          element.style.transform = `translate3d(${circle.x - circle.size/2}px, ${circle.y - circle.size/2}px, 0) rotate(${circle.rotation}deg)`;
          element.style.background = `
            radial-gradient(circle at center,
              hsla(${circle.hue}, 70%, 50%, 0.15) 0%,
              hsla(${circle.hue + 30}, 70%, 50%, 0.1) 50%,
              transparent 100%)
          `;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute will-change-transform" style={{ width: 800, height: 800, borderRadius: '50%', filter: 'blur(64px)' }} />
      <div className="absolute will-change-transform" style={{ width: 600, height: 600, borderRadius: '50%', filter: 'blur(48px)' }} />
      <div className="absolute will-change-transform" style={{ width: 400, height: 400, borderRadius: '50%', filter: 'blur(32px)' }} />
      <div className="absolute will-change-transform" style={{ width: 200, height: 200, borderRadius: '50%', filter: 'blur(16px)' }} />
    </div>
  );
}
