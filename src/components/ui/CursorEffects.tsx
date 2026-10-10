"use client";

import { useEffect, useRef } from "react";

export default function CursorEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Touch ডিভাইসে mouse নেই, তাই কিছু চালানোর দরকার নেই
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;

    let raf = 0;
    let x = 0;
    let y = 0;
    let card: HTMLElement | null = null;

    const update = () => {
      raf = 0;

      // পুরো page এর আভা
      if (glow && !reduceMotion) {
        glow.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
        glow.style.opacity = "1";
      }

      // Card এর ভেতরের spotlight এর অবস্থান
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${x - rect.left}px`);
        card.style.setProperty("--my", `${y - rect.top}px`);
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      card = e.target instanceof Element ? e.target.closest<HTMLElement>(".card") : null;
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onLeave = () => {
      if (glow) glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" />;
}
