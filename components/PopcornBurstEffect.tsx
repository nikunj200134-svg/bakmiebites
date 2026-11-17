'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  emoji?: string;
  rotation: number;
  rotSpeed: number;
}

export function PopcornBurstEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Check if target is interactive (button, a, or inside .cursor-pointer)
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        'button, a, input, select, [role="button"], .cursor-pointer'
      );
      if (!isInteractive) return;

      const colors = ['#FFC800', '#F04A23', '#4A1F24', '#FFFFFF', '#7CB82F', '#5CCFDD'];
      const emojis = ['🍿', '✨', '🌶️', '🧀', '🔥'];

      const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 3 + 2;
        const isEmoji = Math.random() > 0.6;
        return {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: isEmoji ? 16 : Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          emoji: isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : undefined,
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
        };
      });

      setParticles((prev) => [...prev.slice(-24), ...newParticles]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15, // gravity
            rotation: p.rotation + p.rotSpeed,
          }))
          .filter((p) => {
            // Keep on screen within reasonable range
            return p.y < window.innerHeight + 50 && p.x > -50 && p.x < window.innerWidth + 50;
          })
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute block select-none transition-opacity duration-500"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.emoji ? '0' : '9999px',
            backgroundColor: p.emoji ? 'transparent' : p.color,
            fontSize: p.emoji ? `${p.size}px` : undefined,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            boxShadow: p.emoji ? 'none' : '0 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
