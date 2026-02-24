'use client';

import { useEffect, useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  clamp?: number;
}

export default function Parallax({
  children,
  speed = 0.12,
  clamp = 30,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const onScroll = () => {
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elCenter = rect.top + rect.height / 2;
        const raw = (elCenter - viewportCenter) * speed;
        const clamped = Math.max(-clamp, Math.min(clamp, raw));
        if (Math.abs(clamped - offsetRef.current) > 0.5) {
          offsetRef.current = clamped;
          el.style.transform = `translateY(${clamped}px)`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed, clamp]);

  return (
    <div ref={ref} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
