'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionTitleEntranceProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'scale';
  className?: string;
}

export default function SectionTitleEntrance({
  children,
  direction = 'left',
  className = '',
}: SectionTitleEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`section-title-entrance from-${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
