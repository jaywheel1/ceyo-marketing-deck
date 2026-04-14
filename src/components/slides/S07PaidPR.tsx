"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";

const ANALYSTS = [
  {
    name: "Lily Ray",
    role: "VP SEO, Amsive",
    angle: "Currently endorses Peec publicly. I reach with a custom Ceyo dataset tied to a topic she just posted on. Monthly. Offer her early access to our quarterly data.",
  },
  {
    name: "Rand Fishkin",
    role: "SparkToro founder",
    angle: "Pitch a co-research angle: SparkToro's search-behavior data + Ceyo's AI citation data = a crossover report. Joint publication, shared press.",
  },
  {
    name: "Mike King",
    role: "iPullRank, runs SEO Week",
    angle: "Pitch Tom as a GEO speaker for SEO Week 2026. Alternative: contribute data to his ongoing Google leak analysis work.",
  },
];

export function S07PaidPR() {
  return (
    <SectionShell id="paid-pr" eyebrow="Amplification + authority" index={7} total={10}>
      <AuroraBlob className="top-0 left-[-140px]" size={480} color="rgba(99,102,241,0.12)" />

      <div className="mb-10">
        <SplitReveal
          as="h2"
          text="Never run ads from cold. Borrow authority instead of building it."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal delay={0.2}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-4">Paid</div>
            <div className="card p-6 mb-4">
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <div className="eyebrow text-ceyo-muted mb-1">LinkedIn TLA CTR</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-ceyo-heading tabular">
                      <NumberTicker value={2.68} decimals={2} suffix="%" />
                    </span>
                    <span className="text-sm text-ceyo-muted">vs 0.42% standard</span>
                  </div>
                </div>
                <div>
                  <div className="eyebrow text-ceyo-muted mb-1">Cheaper traffic</div>
                  <div className="text-3xl font-semibold text-ceyo-heading tabular">
                    <NumberTicker value={77} suffix="%" />
                  </div>
                  <div className="text-xs text-ceyo-muted mt-1">$3.06 CPC vs $22.54</div>
                </div>
              </div>
              <div className="h-px bg-ceyo-border my-4" />
              <p className="eyebrow text-ceyo-accent3 mb-3">How I run it</p>
              <ul className="space-y-2 text-sm text-ceyo-text/90">
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span><span className="text-ceyo-heading font-semibold">No cold ads ever.</span> Every paid LinkedIn post is an organic post that already earned engagement.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Weekly ritual: agent picks top 3 organic founder posts from prior week → I approve → push via LinkedIn Ads API.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>4–6 variants per campaign. LinkedIn needs variants to optimize.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Google: brand defense on &quot;Ceyo&quot; + competitor conquest (&quot;Profound alternative&quot;, &quot;Peec vs&quot;) + high-intent.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Meta: retargeting only. Site visitors + webinar attendees. Never prospecting.</span></li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-4">PR</div>
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
                <div className="eyebrow text-ceyo-muted mb-2">Pipeline</div>
                <ul className="space-y-1.5 text-sm text-ceyo-text/85">
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>5 Featured + Qwoted pitches per week, Tom or Maxim as expert source.</span></li>
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Target outlets: Search Engine Land, SEJ, Fortune, Digiday, Modern Retail.</span></li>
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Monthly proactive &quot;State of GEO&quot; data pitch to Fortune when ready.</span></li>
                  <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Every placement syndicated to owned channels within 48h.</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.9}>
        <div className="mt-8 p-4 border-l-2 border-ceyo-accent bg-ceyo-surface/40 rounded-r">
          <p className="text-sm text-ceyo-text/90 leading-relaxed">
            I own ad budget allocation, variant creative, pitch strategy, and direct journalist + analyst relationships. End-to-end.
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
