"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { BorderBeam } from "../primitives/BorderBeam";
import { Explainer } from "../primitives/Explainer";

const TRACKS = [
  {
    who: "Tom",
    label: "The founder voice",
    cadence: "5 LinkedIn posts / week · 1 deep post every 2 weeks",
    themes: [
      "Agency partnerships (Tom already owns this topic publicly)",
      "Action over dashboards",
      "Conversational commerce (posted it before the wave hit)",
      "Bold takes backed by real data",
    ],
    audience: "Heads of marketing · agency founders · buyers in the category",
  },
  {
    who: "Maxim",
    label: "The builder voice",
    cadence: "3 LinkedIn posts / week · 1 deep post every 2 weeks",
    themes: [
      "AI visibility tools should tell you what to DO (not just diagnose)",
      "How AI citations fade — the tech explained simply",
      "Building in public as a bootstrapped founder",
      "Honest fundraising — cap tables, reputation, what to believe",
    ],
    audience: "Technical operators · other founders · product-focused buyers",
  },
  {
    who: "Ceyo",
    label: "The company account",
    cadence: "3 posts / week minimum",
    themes: [
      "Customer wins with actual numbers",
      "Product updates with a clear \"so what\"",
      "Research data from Ceyo's own tools",
      "Never say \"excited to announce\" — just share the result",
    ],
    audience: "Everyone else",
  },
];

export function S05Content() {
  return (
    <SectionShell id="content" eyebrow="The voice engine" index={5} total={10}>
      <AuroraBlob className="top-[-120px] right-[-120px]" size={520} color="rgba(99,102,241,0.14)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Two founder voices. One company account. All running on autopilot."
          className="text-display-md text-ceyo-heading max-w-6xl"
        />
      </div>

      <Explainer>
        Tom and Maxim posting consistently on LinkedIn is the best marketing Ceyo already has.
        Problem: founders rarely have time to post daily. Here&apos;s the system that gets them posting every day — without either of them writing a single word themselves.
      </Explainer>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 mb-10 items-end">
        <div />
        <Reveal delay={0.35}>
          <div className="card p-5 relative">
            <BorderBeam duration={12} />
            <div className="eyebrow text-ceyo-accent3 mb-3">How this worked for Cursor</div>
            <div className="text-4xl font-semibold text-ceyo-heading tabular mb-2">
              $<NumberTicker value={1} decimals={0} />M → $<NumberTicker value={100} />M in 12 months
            </div>
            <p className="text-sm text-ceyo-muted leading-relaxed">
              Cursor grew to 360,000 paying developers on zero traditional ad spend. Pure product + founder voice posting daily.
            </p>
            <div className="mt-3 text-[11px] text-ceyo-muted/80">Source: Cursor growth analysis, 2025</div>
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
                Reaches: {t.audience}
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
                <div className="text-ceyo-heading text-lg font-semibold">Every video made with Remotion</div>
              </div>
            </div>
            <div className="text-sm text-ceyo-text/85 leading-relaxed">
              Remotion is a tool that builds videos from code templates — no Premiere, no editing software.
              Same system Spotify uses for Wrapped and Meta uses for personalized videos.
              Build one template, get unlimited on-brand variations: founder clips, product demos, customer stories, ad variants, Reels.
              10+ short videos a week, no filming, no editor, no delay.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.7}>
        <p className="text-sm text-ceyo-muted mt-6">
          Clay hit $0 → $30M revenue in 2 years using almost the same formula: a small community of power users + clear positioning + daily founder posting. Works for B2B, works with a tiny team.
        </p>
      </Reveal>
    </SectionShell>
  );
}
