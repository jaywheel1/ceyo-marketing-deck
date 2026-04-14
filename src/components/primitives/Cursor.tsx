"use client";
import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hoverable, setHoverable] = useState(false);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", move);

    const enter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) setHoverable(true);
    };
    const leave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hover]")) setHoverable(false);
    };
    window.addEventListener("mouseover", enter);
    window.addEventListener("mouseout", leave);

    let raf = 0;
    const tick = () => {
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0) scale(${hoverable ? 1.6 : 1})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", enter);
      window.removeEventListener("mouseout", leave);
      cancelAnimationFrame(raf);
    };
  }, [hoverable]);

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-ceyo-accent mix-blend-difference" />
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[99] h-8 w-8 rounded-full border border-ceyo-accent/60 transition-[transform] duration-200 ease-out" />
    </>
  );
}
