"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { BorderBeam } from "../primitives/BorderBeam";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const WEEKS = [
  {
    w: "Week 1",
    items: [
      "Ship a pop-up inside Ceyo that asks for a review the moment a customer sees their **AI visibility go up** — peak-happiness moment",
      "Add a one-click G2 link to every support, onboarding, and success email — **permanent**, not a one-off campaign",
      "I personally email Ceyo's **top customers** with a 5-minute review ask + direct deep-link",
      "Set up the same flow on **Capterra**, **GetApp**, and **Product Hunt** — same effort, more surfaces",
    ],
  },
  {
    w: "Week 2",
    items: [
      "Daily check on submissions across all platforms. **Personal thank-you reply** to every reviewer within 24 hours",
      "One reminder to non-responders. **No nagging**.",
      "**Run a small thank-you incentive** — $25 Amazon gift card per verified review (G2 allows vendor-funded incentives if disclosed). Costs ~$500 to land 20 reviews.",
    ],
  },
  {
    w: "Week 3–4",
    items: [
      "Hit **20 reviews before April 28** → Ceyo locks the Summer 2026 \"Users Love Us\" badge — **free, no paid plan needed**",
      "Pull the 3 strongest reviews onto **homepage**, **Tom + Maxim's LinkedIn**, and **ad creative**",
      "Build a **\"customer love\" page** on ceyo.ai pulling reviews from G2, Capterra, LinkedIn, X, and Reddit — owned social proof, no platform fee",
    ],
  },
  {
    w: "Month 2",
    items: [
      "Push to **50+ reviews across all platforms** — the in-product pop-up runs on autopilot",
      "**Trade strategy:** when a customer leaves us a review, offer to leave one on their tool (only if Ceyo genuinely uses it). Tit-for-tat, no paid relationship.",
      "Start collecting **video testimonials** through Remotion-rendered customer story clips for LinkedIn",
    ],
  },
  {
    w: "Month 3",
    items: [
      "**75+ reviews across all surfaces**, all firing organically",
      "Apply for **G2 \"Momentum Leader\"** — granted on growth signals (review velocity, social, employee count), no paid plan needed",
      "**Quarterly review-velocity target:** 4 new reviews per week minimum, every week — permanent motion",
    ],
  },
];

const PLATFORMS = [
  { n: "G2", note: "Where buyers compare. Free \"Users Love Us\" badge at 20 reviews." },
  { n: "Capterra / GetApp / Software Advice", note: "Gartner-owned. Same review can syndicate across all three." },
  { n: "Product Hunt", note: "Launch + ongoing presence. Reviews drive ranking." },
  { n: "TrustRadius", note: "Enterprise-leaning buyers. Slower to fill but high trust." },
  { n: "LinkedIn recommendations", note: "Founders ask happy customers for direct LinkedIn recs. Public, free, high signal." },
  { n: "Reddit / X mentions", note: "We monitor + amplify organic mentions. Screenshot, post, repeat." },
];

function bold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-ceyo-heading">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function S04G2() {
  return (
    <SectionShell id="g2" eyebrow="The review play" index={4} total={12}>
      <AuroraBlob className="top-20 right-[-200px]" size={500} />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <SplitReveal
            as="h2"
            text="Reviews everywhere buyers look — without paying G2."
            className="text-display-md text-ceyo-heading mb-6"
          />

          <Explainer>
            <strong className="text-ceyo-heading">G2 is the biggest software review site</strong>, but it&apos;s not the only one. Buyers also check <strong className="text-ceyo-heading">Capterra, Product Hunt, LinkedIn recommendations, and Reddit</strong>.
            We collect reviews <strong className="text-ceyo-heading">across all of them</strong> at once — same in-product pop-up, multiple destinations.
            G2&apos;s free <strong className="text-ceyo-heading">&quot;Users Love Us&quot; badge</strong> covers our biggest credibility gap without needing the $2,999/year plan.
          </Explainer>

          <Reveal delay={0.3}>
            <p className="text-base text-ceyo-text/85 leading-relaxed mb-6">
              How: <strong className="text-ceyo-heading">Reputation.com</strong> ran a pop-up inside their product asking for reviews. Just that.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="relative card p-6 mb-6">
              <BorderBeam duration={8} />
              <div className="eyebrow text-ceyo-accent3 mb-2">Result, under 12 months</div>
              <div className="flex items-baseline gap-3">
                <NumberTicker value={174} suffix="%" className="text-5xl sm:text-6xl font-semibold text-ceyo-heading tabular" />
                <span className="text-ceyo-muted">annual revenue lift</span>
              </div>
              <div className="mt-4 space-y-1.5 text-sm text-ceyo-muted">
                <div className="flex justify-between"><span>New sales opportunities</span><span className="tabular text-ceyo-text">+178%</span></div>
                <div className="flex justify-between"><span>New account requests</span><span className="tabular text-ceyo-text">+200%</span></div>
                <div className="flex justify-between"><span>Time to see it work</span><span className="tabular text-ceyo-text">&lt; 12 months</span></div>
              </div>
              <div className="mt-4 pt-4 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">
                Source: G2 published case study — Reputation.com
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="card-quiet p-4">
              <div className="eyebrow text-ceyo-muted mb-3">6 review surfaces, one collection flow</div>
              <ul className="space-y-2">
                {PLATFORMS.map((p) => (
                  <li key={p.n} className="text-[12.5px] leading-snug flex gap-2">
                    <span className="text-ceyo-accent mt-1">·</span>
                    <span><strong className="text-ceyo-heading">{p.n}.</strong> <span className="text-ceyo-muted">{p.note}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="eyebrow text-ceyo-accent3 mb-5">How I run it, week by week</div>
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
                          <span>{bold(it)}</span>
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
