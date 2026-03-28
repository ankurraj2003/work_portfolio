"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  decay: number;
  color: string;
}

const PARTICLE_COLORS = [
  "34, 211, 238", // cyan
  "139, 92, 246", // violet
  "99, 102, 241", // indigo
];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>(0);
  const lastEmit = useRef(0);

  const createParticle = useCallback((x: number, y: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.5 + 0.5;
    const colorArr =
      PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 7 + 5,
      opacity: Math.random() * 0.2 + 0.4,
      decay: Math.random() * 0.008 + 0.006,
      color: colorArr,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Emit particles on mouse move — throttled
      if (timestamp - lastEmit.current > 30) {
        for (let i = 0; i < 2; i++) {
          particles.current.push(
            createParticle(mousePos.current.x, mousePos.current.y)
          );
        }
        lastEmit.current = timestamp;
      }

      // Cap particles
      if (particles.current.length > 150) {
        particles.current = particles.current.slice(-150);
      }

      // Update and draw
      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= p.decay;
        p.size *= 0.995;

        if (p.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        // Draw a subtle glow
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        gradient.addColorStop(0, `rgba(${p.color}, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        return true;
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animationId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
