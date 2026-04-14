"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { BorderBeam } from "../primitives/BorderBeam";
import { AuroraBlob } from "../primitives/AuroraBlob";

const WEEKS = [
  {
    w: "Week 1",
    items: [
      "In-app review trigger ships — fires on first meaningful citation lift detected for a customer",
      "One-click G2 link added to every support, onboarding, and success email (permanent)",
      "Personal outreach from me to Ceyo's top 30 current customers asking for a 5-minute review",
    ],
  },
  {
    w: "Week 2",
    items: [
      "Daily submission monitor. Personal thank-you reply to every reviewer within 24h",
      "One reminder to non-responders. No nag follow-ups",
      "Momentum Grid signal agents set up: web presence, employee count, social reach, review velocity — each tracked daily",
    ],
  },
  {
    w: "Week 3–4",
    items: [
      "Push to 20 reviews before April 28 deadline → Summer 2026 \"Users Love Us\" badge locked (free)",
      "Surface 3 strongest reviews on homepage, LinkedIn (Tom + Maxim), ad creative",
      "Upgrade Ceyo to paid G2 plan ($2,999/yr) so Grid badges display publicly the moment they land",
    ],
  },
  {
    w: "Month 2",
    items: [
      "Push to 50+ reviews via the trigger running on autopilot",
      "Target: High Performer contender for Fall report",
      "Claim G2 syndication across AWS + Azure + 10 other marketplaces — free distribution surfaces",
    ],
  },
  {
    w: "Month 3",
    items: [
      "75+ reviews with Momentum signals firing",
      "Target: Leader or Momentum Leader in Fall 2026 report",
      "Quarterly review-velocity program becomes a permanent motion (4+ reviews per week floor)",
    ],
  },
];

export function S02G2() {
  return (
    <SectionShell id="g2" eyebrow="The review play" index={2} total={10}>
      <AuroraBlob className="top-20 right-[-200px]" size={500} />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="G2 to Leader in one quarterly cycle."
            className="text-display-md text-ceyo-heading mb-8"
          />

          <Reveal delay={0.3}>
            <p className="text-lg text-ceyo-text/85 leading-relaxed mb-8">
              Reputation.com ran in-app review prompts for under a year.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="relative card p-6 mb-6">
              <BorderBeam duration={8} />
              <div className="eyebrow text-ceyo-accent3 mb-2">Result</div>
              <div className="flex items-baseline gap-3">
                <NumberTicker value={174} suffix="%" className="text-5xl sm:text-6xl font-semibold text-ceyo-heading tabular" />
                <span className="text-ceyo-muted">ARR lift</span>
              </div>
              <div className="mt-4 space-y-1.5 text-sm text-ceyo-muted">
                <div className="flex justify-between"><span>New opportunities</span><span className="tabular text-ceyo-text">+178%</span></div>
                <div className="flex justify-between"><span>New account requests</span><span className="tabular text-ceyo-text">+200%</span></div>
                <div className="flex justify-between"><span>Time to result</span><span className="tabular text-ceyo-text">&lt; 12 months</span></div>
              </div>
              <div className="mt-4 pt-4 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">
                Source: G2 case study, Reputation.com
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="card-quiet p-4 flex items-center justify-between">
              <div>
                <div className="eyebrow text-ceyo-muted">Ceyo today</div>
                <div className="text-2xl font-semibold text-ceyo-heading tabular">0 reviews</div>
              </div>
              <div className="h-10 w-px bg-ceyo-border" />
              <div>
                <div className="eyebrow text-ceyo-muted">Summer deadline</div>
                <div className="text-2xl font-semibold text-ceyo-danger tabular">Apr 28</div>
              </div>
              <div className="h-10 w-px bg-ceyo-border" />
              <div>
                <div className="eyebrow text-ceyo-muted">Free badge at</div>
                <div className="text-2xl font-semibold text-ceyo-accent3 tabular">20 reviews</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="eyebrow text-ceyo-accent3 mb-5">How I run it</div>
          <div className="space-y-3 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-ceyo-accent/40 via-ceyo-border to-transparent" />
            {WEEKS.map((w, i) => (
              <Reveal key={w.w} delay={0.2 + i * 0.08}>
                <div className="flex gap-4 items-start pl-0">
                  <div className="shrink-0 relative z-10">
                    <div className="h-8 w-8 rounded-full bg-ceyo-ink border border-ceyo-accent/40 flex items-center justify-center text-[10px] font-mono text-ceyo-accent3 tabular">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex-1 card p-4">
                    <div className="eyebrow text-ceyo-accent3 mb-2">{w.w}</div>
                    <ul className="space-y-1.5">
                      {w.items.map((it, j) => (
                        <li key={j} className="text-sm text-ceyo-text/90 leading-relaxed flex gap-2">
                          <span className="text-ceyo-muted mt-1">→</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
