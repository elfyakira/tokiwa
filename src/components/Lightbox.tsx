"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt = "", onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!src) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [src, handleKeyDown]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      {/* ×ボタン */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-white/70 transition-colors"
        aria-label="閉じる"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="8" y1="8" x2="24" y2="24" />
          <line x1="24" y1="8" x2="8" y2="24" />
        </svg>
      </button>

      {/* 画像 */}
      <div
        className="relative w-[90vw] h-[80vh] animate-[scaleIn_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
    </div>
  );
}
