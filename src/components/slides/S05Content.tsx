"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";

const TRACKS = [
  {
    who: "Tom",
    label: "Category voice",
    cadence: "5 posts / week · 1 long-form every 2 weeks",
    themes: [
      "Agency partnerships (already owns this publicly)",
      "Action over tracking",
      "Conversational commerce (posted it before the wave)",
      "Contrarian takes backed by data",
    ],
    audience: "Heads of marketing, agency founders, category buyers",
  },
  {
    who: "Maxim",
    label: "Builder voice",
    cadence: "3 posts / week · 1 long-form every 2 weeks",
    themes: [
      "Actionable AI visibility (not just diagnosis)",
      "Citation decay mechanics",
      "Bootstrap founder + conference tactics",
      "Fundraising honesty — cap tables, reputation, signal",
    ],
    audience: "Technical operators, other founders, product buyers",
  },
  {
    who: "Ceyo",
    label: "Proof surface",
    cadence: "3 posts / week minimum",
    themes: [
      "Customer wins with named numbers",
      "Product drops with clear outcomes",
      "Research data from our own probes",
      "Zero \"excited to announce\" copy",
    ],
    audience: "Everyone else",
  },
];

export function S05Content() {
  return (
    <SectionShell id="content" eyebrow="The voice engine" index={5} total={10}>
      <AuroraBlob className="top-[-120px] right-[-120px]" size={520} color="rgba(99,102,241,0.14)" />

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 mb-10 items-end">
        <SplitReveal
          as="h2"
          text="Two founder voices. One company account. All running on autopilot."
          className="text-display-md text-ceyo-heading"
        />
        <Reveal delay={0.35}>
          <div className="card p-5 relative">
            <BorderBeam duration={12} />
            <div className="eyebrow text-ceyo-accent3 mb-3">Cursor, 12 months</div>
            <div className="text-4xl font-semibold text-ceyo-heading tabular mb-2">
              $<NumberTicker value={1} decimals={0} />M → $<NumberTicker value={100} />M ARR
            </div>
            <p className="text-sm text-ceyo-muted leading-relaxed">
              Zero traditional marketing spend. 360K developers paying monthly. Pure product-led + founder voice.
            </p>
            <div className="mt-3 text-[11px] text-ceyo-muted/80">Source: Cursor growth analysis 2025</div>
          </div>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        {TRACKS.map((t, i) => (
          <Reveal key={t.who} delay={0.2 + i * 0.1}>
            <div className="card p-6 h-full">
              <div className="flex items-baseline justify-between mb-4">
                <div className="text-2xl font-semibold text-ceyo-heading">{t.who}</div>
                <span className="eyebrow text-ceyo-accent3">{t.label}</span>
              </div>
              <div className="font-mono text-xs text-ceyo-text/80 mb-4 pb-4 border-b border-ceyo-borderSoft">
                {t.cadence}
              </div>
              <ul className="space-y-2 mb-4">
                {t.themes.map((th, j) => (
                  <li key={j} className="text-sm text-ceyo-text/85 flex gap-2">
                    <span className="text-ceyo-accent mt-1">·</span><span>{th}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-ceyo-borderSoft text-[12px] text-ceyo-muted">
                {t.audience}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5}>
        <div className="card p-6">
          <div className="grid lg:grid-cols-[auto_1fr] gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-ceyo-accent/15 border border-ceyo-accent/30 flex items-center justify-center font-mono font-bold text-ceyo-accent3">
                R
              </div>
              <div>
                <div className="eyebrow text-ceyo-accent3 mb-1">Video stack</div>
                <div className="text-ceyo-heading text-lg font-semibold">Every video via Remotion</div>
              </div>
            </div>
            <div className="text-sm text-ceyo-text/85 leading-relaxed">
              Programmatic React video generation. Same engine Spotify uses for Wrapped animations and Meta uses for personalized video.
              Every founder clip, product demo, customer story, Reels cut, and ad variant renders from a template with data — 10+ short-form videos a week without adding team or production time.
              No filming, no editor, no delay.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.7}>
        <p className="text-sm text-ceyo-muted mt-6">
          Clay hit 0 → $30M ARR in two years with a 20K-person community + category creation + power-user LinkedIn posts.
          Same pattern — voice + community + category — applied here.
        </p>
      </Reveal>
    </SectionShell>
  );
}
