"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const ANALYSTS = [
  {
    name: "Lily Ray",
    role: "VP SEO, Amsive",
    angle: "She currently recommends Peec publicly. I reach out with a custom Ceyo data report tied to a topic she just posted about. Monthly. Offer her first look at Ceyo's quarterly research.",
  },
  {
    name: "Rand Fishkin",
    role: "SparkToro founder",
    angle: "Pitch joint research: SparkToro's search-behavior data + Ceyo's AI citation data = one crossover report. Published together, promoted by both.",
  },
  {
    name: "Mike King",
    role: "iPullRank, runs SEO Week",
    angle: "Pitch Tom as a GEO speaker at SEO Week 2026. Backup: contribute data to Mike's ongoing Google leak research.",
  },
];

export function S07PaidPR() {
  return (
    <SectionShell id="paid-pr" eyebrow="Amplification + authority" index={7} total={10}>
      <AuroraBlob className="top-0 left-[-140px]" size={480} color="rgba(99,102,241,0.12)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Never run ads cold. Borrow authority instead of building it."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        Paid = ads. PR = getting quoted in trusted publications and podcasts.
        Both amplify what we&apos;ve already built — they don&apos;t create demand from nothing.
        Rule: only put ad money behind posts already working organically. Only pitch stories with real data to back them up.
      </Explainer>

      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal delay={0.2}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-4">Paid ads</div>
            <div className="card p-6 mb-4">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="eyebrow text-ceyo-muted mb-1">LinkedIn founder-account ads</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-ceyo-heading tabular">
                      <NumberTicker value={2.68} decimals={2} suffix="%" />
                    </span>
                    <span className="text-sm text-ceyo-muted">click-through</span>
                  </div>
                  <div className="text-[11px] text-ceyo-muted mt-1">6× the rate of company-page ads</div>
                </div>
                <div>
                  <div className="eyebrow text-ceyo-muted mb-1">Cheaper traffic</div>
                  <div className="text-3xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={77} suffix="%" />
                  </div>
                  <div className="text-xs text-ceyo-muted mt-1">$3.06 per click vs $22.54</div>
                </div>
              </div>
              <div className="h-px bg-ceyo-border my-4" />
              <p className="eyebrow text-ceyo-accent3 mb-3">How I run it</p>
              <ul className="space-y-2 text-sm text-ceyo-text/90">
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span><span className="text-ceyo-heading font-semibold">No cold ads ever.</span> Every paid LinkedIn post is an organic post that already earned engagement.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Every Monday: pick Tom&apos;s top 3 organic posts from the prior week → boost them as ads.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Run 4–6 versions of each ad at once — LinkedIn&apos;s algorithm picks the winner.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Google: bid on &quot;Ceyo&quot; (so competitors can&apos;t steal our brand searches), bid on competitor names, bid on &quot;best GEO tool&quot;-type searches.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Meta: only show ads to people who already visited our site. No cold targeting.</span></li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-4">PR · Direct analyst relationships</div>
            <div className="space-y-3 mb-4">
              {ANALYSTS.map((a, i) => (
                <Reveal key={a.name} delay={0.4 + i * 0.1}>
                  <div className="card p-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-ceyo-heading font-semibold">{a.name}</span>
                      <span className="text-xs text-ceyo-muted">{a.role}</span>
                    </div>
                    <p className="text-sm text-ceyo-muted leading-relaxed">{a.angle}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.75}>
              <div className="card-quiet p-4">
                <div className="eyebrow text-ceyo-muted mb-2">Plus: journalist pipeline</div>
                <ul className="space-y-1.5 text-sm text-ceyo-text/85">
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Featured + Qwoted: 2 sites where journalists post requests for expert sources. 5 pitches per week, Tom or Maxim as the expert.</span></li>
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Target outlets: Search Engine Land, Search Engine Journal, Fortune, Digiday, Modern Retail.</span></li>
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Monthly: proactive pitch to Fortune with Ceyo&apos;s own data.</span></li>
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Every placement reshared on our blog, email, and social within 48 hours.</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.9}>
        <div className="mt-8 p-4 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
          <p className="text-sm text-ceyo-text/90 leading-relaxed">
            I own the ad budget, creative variations, pitch strategy, and direct journalist + analyst relationships. End-to-end.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
