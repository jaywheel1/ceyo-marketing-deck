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
    cadence: "5 LinkedIn posts / week",
    themes: [
      { h: "Why agencies are the unlock for AI search", w: "His public stance — already lands. We turn it into weekly stories about real partner wins." },
      { h: "Action over dashboards", w: "The reason buyers pick Ceyo over Profound. One post a week showing what \"action\" looks like in practice." },
      { h: "What's actually changing in AI search this week", w: "His fast-take posts — what just shipped at OpenAI / Perplexity / Google AI and what it means." },
      { h: "Bold, data-backed contrarian takes", w: "When the industry says X, Ceyo's data shows Y. These get the most reach. Risky, on purpose." },
    ],
    audience: "Heads of marketing · agency founders · the people who buy Ceyo",
  },
  {
    who: "Maxim",
    label: "The builder voice",
    cadence: "3 LinkedIn posts / week",
    themes: [
      { h: "How AI citations actually work, explained simply", w: "Why a brand gets cited by ChatGPT one week and forgotten the next. Tech made plain." },
      { h: "Building Ceyo in public", w: "Honest founder posts: what shipped, what broke, what we're betting on next. Builds trust." },
      { h: "The shift from SEO to AI search", w: "What it means for marketers. He's the voice for technical operators thinking through the change." },
      { h: "Conferences, deals, fundraising honesty", w: "His existing themes — already proven they work. Just more consistent." },
    ],
    audience: "Other founders · technical operators · people who care how this works",
  },
  {
    who: "Ceyo",
    label: "The company account",
    cadence: "3 posts / week",
    themes: [
      { h: "Customer wins with named numbers", w: "Not \"happy customer\" — \"X brand went from 12% to 38% AI visibility in 60 days.\"" },
      { h: "Product launches with proof", w: "Every new feature is a case study with screenshots and data, not a press release." },
      { h: "Original research from Ceyo's own data", w: "Quarterly drops with our State of GEO report. Ceyo's data is unique — we publish it." },
      { h: "Industry observations", w: "When something big shifts in AI search, the company account weighs in with our data." },
    ],
    audience: "Everyone who's not following Tom or Maxim directly",
  },
];

export function S06Content() {
  return (
    <SectionShell id="content" eyebrow="The voice engine" index={6} total={12}>
      <AuroraBlob className="top-[-120px] right-[-120px]" size={520} color="rgba(99,102,241,0.14)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Two founder voices. One company account. All running on autopilot."
          className="text-display-md text-ceyo-heading max-w-6xl"
        />
      </div>

      <Explainer>
        <strong className="text-ceyo-heading">Tom and Maxim posting consistently</strong> on LinkedIn is the strongest organic marketing Ceyo already has.
        The problem: founders rarely have time to post daily.
        I run a system where AI assistants <strong className="text-ceyo-heading">draft posts in each founder&apos;s voice</strong>, matched to their existing post history. Each founder approves the headline and ships it in 30 seconds — without writing.
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
              Cursor grew to <strong className="text-ceyo-heading">360,000 paying developers</strong> on <strong className="text-ceyo-heading">zero traditional ad spend</strong>. Pure product + founder voice posting daily.
            </p>
            <div className="mt-3 text-[11px] text-ceyo-muted/80">Source: Cursor growth analysis, 2025</div>
          </div>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        {TRACKS.map((t, i) => (
          <Reveal key={t.who} delay={0.2 + i * 0.1}>
            <div className="card p-6 h-full">
              <div className="flex items-baseline justify-between mb-3">
                <div className="text-2xl font-semibold text-ceyo-heading">{t.who}</div>
                <span className="eyebrow text-ceyo-accent3">{t.label}</span>
              </div>
              <div className="font-mono text-xs text-ceyo-text/80 mb-4 pb-4 border-b border-ceyo-borderSoft">
                {t.cadence}
              </div>
              <div className="space-y-3 mb-4">
                {t.themes.map((th, j) => (
                  <div key={j}>
                    <div className="text-[13px] font-semibold text-ceyo-heading mb-0.5 leading-snug">{th.h}</div>
                    <div className="text-[12px] text-ceyo-muted leading-relaxed">{th.w}</div>
                  </div>
                ))}
              </div>
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
                <div className="text-ceyo-heading text-lg font-semibold">All video runs through Remotion</div>
              </div>
            </div>
            <div className="text-sm text-ceyo-text/85 leading-relaxed">
              <strong className="text-ceyo-heading">Remotion</strong> builds videos from code templates instead of editing software like Premiere.
              Same engine <strong className="text-ceyo-heading">Spotify uses for Wrapped</strong> and <strong className="text-ceyo-heading">Meta uses for personalized videos</strong>.
              Build one template, get unlimited variations: founder clips, product demos, customer stories, ad cuts, Reels.
              <strong className="text-ceyo-heading"> 10+ short videos a week</strong>, no filming, no editor, no production delay.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.7}>
        <p className="text-sm text-ceyo-muted mt-6">
          <strong className="text-ceyo-text">Clay</strong> hit $0 → $30M revenue in 2 years using almost the same formula: a small community of power users + clear positioning + daily founder posting. Works for B2B, works with a tiny team.
        </p>
      </Reveal>
    </SectionShell>
  );
}
