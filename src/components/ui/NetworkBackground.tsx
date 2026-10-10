"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let lastW = 0;
    let lastH = 0;
    let linkDist = 140;
    let particles: Particle[] = [];
    let raf = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const setup = () => {
      // CSS (fixed + h-lvh) থেকে আসল আকার নেওয়া হয়
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      lastW = width;
      lastH = height;

      const small = width < 640;
      linkDist = small ? 105 : 140;

      const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = small ? 14000 : 18000;
      const maxCount = small ? 45 : 80;
      const count = Math.min(Math.floor((width * height) / density), maxCount);

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 1,
      }));
    };

    const draw = () => {
      const light = document.documentElement.getAttribute("data-theme") === "light";
      const lineRGB = light ? "79, 70, 229" : "139, 124, 255";
      const lineMax = light ? 0.28 : 0.35;
      const dotColor = light ? "rgba(99, 102, 241, 0.7)" : "rgba(147, 130, 255, 0.85)";

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * lineMax;
            ctx.strokeStyle = `rgba(${lineRGB}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = dotColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const rect = canvas.getBoundingClientRect();
        // আকার আসলে না বদলালে আবার সাজানোর দরকার নেই
        if (Math.abs(rect.width - lastW) < 1 && Math.abs(rect.height - lastH) < 1) return;
        setup();
        if (reduceMotion) draw();
      }, 200);
    };

    const themeObserver = new MutationObserver(() => {
      if (reduceMotion) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    setup();
    if (reduceMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-lvh w-full"
    />
  );
}
