"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "cover", label: "Cover" },
  { id: "invisible", label: "Site fix" },
  { id: "ceyo-scan", label: "Free tool" },
  { id: "g2", label: "G2" },
  { id: "reddit", label: "Reddit" },
  { id: "content", label: "Content" },
  { id: "prog-seo", label: "SEO pages" },
  { id: "paid-ads", label: "Paid ads" },
  { id: "pr", label: "PR" },
  { id: "workstation", label: "Workstation" },
  { id: "plan", label: "90 days" },
  { id: "close", label: "Close" },
];

export function GlobalNav() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);

      let best = 0;
      let bestDist = Infinity;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top - window.innerHeight * 0.35);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setActive(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        const next = Math.min(SECTIONS.length - 1, active + 1);
        document.getElementById(SECTIONS[next].id)?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        const prev = Math.max(0, active - 1);
        document.getElementById(SECTIONS[prev].id)?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "Home") document.getElementById(SECTIONS[0].id)?.scrollIntoView({ behavior: "smooth" });
      if (e.key === "End") document.getElementById(SECTIONS[SECTIONS.length - 1].id)?.scrollIntoView({ behavior: "smooth" });
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= 9) {
        document.getElementById(SECTIONS[num - 1].id)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="h-7 w-7 rounded-md bg-ceyo-accent flex items-center justify-center text-white font-bold text-sm">C</div>
          <div className="text-sm text-ceyo-muted hidden sm:block">
            Ceyo · Marketing Strategy · <span className="text-ceyo-text">Jay</span>
          </div>
        </div>
        <div className="flex items-center gap-3 font-mono tabular text-xs text-ceyo-muted pointer-events-auto">
          <span className="hidden md:inline text-ceyo-text">{SECTIONS[active].label}</span>
          <span>{String(active + 1).padStart(2, "0")}</span>
          <span className="text-ceyo-border">/</span>
          <span>{String(SECTIONS.length).padStart(2, "0")}</span>
        </div>
      </header>

      <div className="fixed top-0 left-0 right-0 z-40 h-[2px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-ceyo-accent to-ceyo-accent3 transition-all duration-200"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end"
            data-hover="true"
          >
            <span className={`text-[11px] font-mono transition-all ${active === i ? "text-ceyo-heading opacity-100" : "text-ceyo-muted opacity-0 group-hover:opacity-100"}`}>
              {s.label}
            </span>
            <span
              className={`h-px transition-all ${active === i ? "bg-ceyo-accent w-6" : "bg-ceyo-border w-3 group-hover:w-5 group-hover:bg-ceyo-muted"}`}
            />
          </a>
        ))}
      </nav>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-3 text-[11px] text-ceyo-muted pointer-events-none">
        <span className="kbd">↑</span>
        <span className="kbd">↓</span>
        <span>scroll</span>
        <span className="text-ceyo-border">·</span>
        <span className="kbd">1–9</span>
        <span>jump</span>
      </div>
    </>
  );
}
