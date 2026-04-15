"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const PLATFORMS = [
  {
    name: "LinkedIn",
    weight: "Primary",
    color: "ceyo-accent",
    accent: "border-ceyo-accent/40",
    headline: "Founder-account ads, never company-page ads",
    why: "Posts from a real person's account get **6× the click-through** of company-page ads on LinkedIn. People trust people.",
    tactics: [
      "**Only boost posts that already worked organically.** Every Monday I look at Tom's top 3 posts from the prior week and put ad budget behind them.",
      "**Run 4–6 versions of each ad simultaneously** — LinkedIn's algorithm picks the winner.",
      "Target by **company size + role** (e.g. \"Head of Marketing at SaaS, 10–200 employees\"). Tight, not broad.",
      "Retargeting layer: anyone who clicked the post sees Ceyo Scan a few days later.",
    ],
    stats: [
      { v: "2.68%", l: "click-through on founder ads" },
      { v: "0.42%", l: "click-through on company ads" },
      { v: "$3.06", l: "cost per click (founder)" },
      { v: "$22.54", l: "cost per click (company)" },
    ],
  },
  {
    name: "Google",
    weight: "Defensive + targeted",
    color: "ceyo-blue",
    accent: "border-ceyo-blue/40",
    headline: "Defend our brand. Bid on competitors. Capture high-intent.",
    why: "When someone searches \"Ceyo\" or \"Profound alternative\", that's **proven intent**. We need to be the first result, not their competitor.",
    tactics: [
      "**Brand defense:** bid on \"Ceyo\" so competitors can't run ads against our brand name.",
      "**Competitor conquest:** bid on \"Profound alternative\", \"Peec vs\", \"AthenaHQ alternative\". Catches buyers comparing us.",
      "**High-intent search:** bid on \"best GEO platform\", \"AI visibility tool\", \"track brand in ChatGPT\". Top of buyer's mind.",
      "**No display ads, no Performance Max** until pipeline is proven. Search-only at first.",
    ],
    stats: [
      { v: "Brand", l: "bid on Ceyo to defend" },
      { v: "vs", l: "bid on competitor terms" },
      { v: "Intent", l: "buyer-ready searches only" },
      { v: "$5K-15K", l: "monthly to start, scale by signal" },
    ],
  },
  {
    name: "Meta",
    weight: "Retargeting only",
    color: "ceyo-success",
    accent: "border-ceyo-success/40",
    headline: "Stay in their feed after they've already shown interest",
    why: "Meta is **bad for cold B2B** — but it's **cheap reach for retargeting**. We use it to stay top-of-mind for people who already touched Ceyo.",
    tactics: [
      "Show ads only to people who **visited the website**, **opened a Ceyo Scan result**, or **registered for a webinar**.",
      "**Lead-gen forms** with pre-filled email — for gated webinars and case studies, not for cold lead capture.",
      "**No prospecting**, ever. Meta's targeting for B2B SaaS is too imprecise to spend on cold.",
      "Creative budget: minimal — Remotion-generated short videos and 1–2 static carousels.",
    ],
    stats: [
      { v: "Retarget", l: "site visitors only" },
      { v: "Webinar", l: "lead-gen forms" },
      { v: "<$1K", l: "monthly cap" },
      { v: "Never", l: "cold prospecting" },
    ],
  },
];

function bold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-ceyo-heading">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function S08PaidAds() {
  return (
    <SectionShell id="paid-ads" eyebrow="Paid ads" index={9} total={13}>
      <AuroraBlob className="top-0 right-[-140px]" size={520} color="rgba(79,70,229,0.14)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Three platforms, three jobs. Never run ads cold."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        <p>
          <strong className="text-ceyo-heading">Cold ads are expensive theatre.</strong> You pay the platform to find anyone who&apos;ll click — most won&apos;t buy.
          Industry benchmark: cold LinkedIn ads convert at <strong className="text-ceyo-heading">under 0.5%</strong> for B2B SaaS.
        </p>
        <p>
          When you boost a post <strong className="text-ceyo-heading">that already proved real people care</strong> (organic likes, shares, comments), the same ad spend converts at <strong className="text-ceyo-accent3">2.7%+</strong> — five to six times more efficient.
        </p>
        <p className="text-ceyo-text">
          Rule for every platform below: <strong className="text-ceyo-heading">amplify what&apos;s working, never test in cold.</strong>
        </p>
      </Explainer>

      <div className="grid lg:grid-cols-3 gap-4">
        {PLATFORMS.map((p, i) => (
          <Reveal key={p.name} delay={0.2 + i * 0.12}>
            <div className={`card p-6 h-full ${p.accent}`}>
              <div className="flex items-baseline justify-between mb-2">
                <div className="text-2xl font-semibold text-ceyo-heading">{p.name}</div>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-${p.color}/15 text-${p.color}`}>{p.weight}</span>
              </div>

              <div className="text-sm text-ceyo-heading font-semibold leading-snug mb-3">{p.headline}</div>

              <div className="text-xs text-ceyo-muted leading-relaxed mb-4 pb-4 border-b border-ceyo-borderSoft">
                <span className="eyebrow text-ceyo-accent3 mb-1 block">Why this</span>
                {bold(p.why)}
              </div>

              <ul className="space-y-2 mb-4">
                {p.tactics.map((t, j) => (
                  <li key={j} className="text-[13px] text-ceyo-text/90 leading-relaxed flex gap-2">
                    <span className="text-ceyo-accent mt-1">·</span>
                    <span>{bold(t)}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-ceyo-borderSoft grid grid-cols-2 gap-2">
                {p.stats.map((s, j) => (
                  <div key={j}>
                    <div className="text-base font-semibold text-ceyo-heading tabular">{s.v}</div>
                    <div className="text-[10px] text-ceyo-muted leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.75}>
        <div className="mt-8 p-4 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
          <p className="text-sm text-ceyo-text/90 leading-relaxed">
            <strong className="text-ceyo-heading">LinkedIn carries the weight.</strong> Google captures intent that&apos;s already there.
            Meta keeps us in the feed of people we already touched.
            <strong className="text-ceyo-heading"> Numbers above are LinkedIn industry benchmarks</strong> — not Ceyo&apos;s targets.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
