"use client";
import { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";

export function useBeamPath(
  containerRef: RefObject<HTMLElement | null>,
  fromRef: RefObject<HTMLElement | null>,
  toRef: RefObject<HTMLElement | null>,
  curvature = 0,
) {
  const [d, setD] = useState("");
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      const c = containerRef.current?.getBoundingClientRect();
      const a = fromRef.current?.getBoundingClientRect();
      const b = toRef.current?.getBoundingClientRect();
      if (!c || !a || !b) return;
      setBox({ w: c.width, h: c.height });
      const x1 = a.left - c.left + a.width / 2;
      const y1 = a.top - c.top + a.height / 2;
      const x2 = b.left - c.left + b.width / 2;
      const y2 = b.top - c.top + b.height / 2;
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2 + curvature;
      setD(`M ${x1},${y1} Q ${mx},${my} ${x2},${y2}`);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, [containerRef, fromRef, toRef, curvature]);

  return { d, box };
}

export function AnimatedBeamSvg({
  paths,
  width,
  height,
  pulseDelay = 0,
}: {
  paths: { d: string; delay?: number }[];
  width: number;
  height: number;
  pulseDelay?: number;
}) {
  return (
    <svg className="pointer-events-none absolute inset-0" width={width} height={height} fill="none">
      <defs>
        <linearGradient id="beamLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#27272F" />
          <stop offset="100%" stopColor="#27272F" />
        </linearGradient>
        <linearGradient id="beamPulse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
          <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((p, i) => (
        <g key={i}>
          <path d={p.d} stroke="#27272F" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <motion.path
            d={p.d}
            stroke="url(#beamPulse)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: [0.08, 0.08, 0.08], pathOffset: [0, 1, 1] }}
            transition={{
              duration: 2.5,
              times: [0, 0.8, 1],
              repeat: Infinity,
              delay: pulseDelay + (p.delay ?? 0) + i * 0.35,
              ease: "linear",
            }}
          />
        </g>
      ))}
    </svg>
  );
}
