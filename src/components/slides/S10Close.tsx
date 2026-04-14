"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";

const TIERS = [
  {
    name: "Lean",
    range: "$1K–$5K / mo",
    body: "Zero paid. One freelancer. Content engine, G2 drive, Reddit, Ceyo Scan, organic founder brand all ship. Paid is optional.",
  },
  {
    name: "Mid",
    range: "$5K–$20K / mo",
    body: "Paid added behind proven organic only. Second freelancer. Analyst program activates. Podcast sponsorships possible.",
    featured: true,
  },
  {
    name: "Scale",
    range: "$20K+ / mo",
    body: "Full LinkedIn + Google + retargeting. 3–4 freelancers managed by me. Agency partner program funded. Event presence. Sponsored placements.",
  },
];

const OWNED = [
  "All founder + company social content (Tom, Maxim, Ceyo). Headline approvals only.",
  "All blog, landing page copy, case studies, ad creative, launch bundles.",
  "Paid channel mix, budget allocation, variant testing.",
  "Analyst + PR relationships and placement strategy.",
  "G2 + review site strategy, incentives, badge plan.",
  "The dashboard — what&apos;s measured, what alerts, what I review weekly.",
];

export function S10Close() {
  return (
    <SectionShell id="close" eyebrow="Investment + ownership" index={10} total={10}>
      <AuroraBlob className="top-[-120px] right-[-140px]" size={640} color="rgba(79,70,229,0.2)" duration={20} />
      <AuroraBlob className="bottom-[-180px] left-[-80px]" size={520} color="rgba(99,102,241,0.12)" duration={24} />

      <div className="mb-14">
        <SplitReveal
          as="h2"
          text="Same plan. Different throttle."
          className="text-display-md text-ceyo-heading"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-16">
        {TIERS.map((t, i) => (
          <Reveal key={t.name} delay={0.2 + i * 0.12}>
            <div className={`card p-6 h-full relative ${t.featured ? "border-ceyo-accent/50" : ""}`}>
              {t.featured && (
                <div className="absolute -top-3 left-6 px-2 py-0.5 bg-ceyo-accent text-white text-[10px] font-mono uppercase tracking-wider rounded">
                  Recommended start
                </div>
              )}
              <div className="eyebrow text-ceyo-accent3 mb-2">{t.name}</div>
              <div className="text-2xl font-semibold text-ceyo-heading mb-4 tabular">{t.range}</div>
              <p className="text-sm text-ceyo-text/85 leading-relaxed">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <Reveal delay={0.6}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-5">What I own, end-to-end</div>
            <ul className="space-y-2.5">
              {OWNED.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="font-mono text-[11px] text-ceyo-accent3 tabular mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-ceyo-text/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: o }} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.75}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-5">What I plug you into</div>
            <ul className="space-y-2.5">
              <li className="flex gap-3 items-start">
                <span className="font-mono text-[11px] text-ceyo-accent3 tabular mt-1.5">01</span>
                <span className="text-sm text-ceyo-text/90 leading-relaxed">One 30-minute strategy sync per week with Tom and Maxim.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-mono text-[11px] text-ceyo-accent3 tabular mt-1.5">02</span>
                <span className="text-sm text-ceyo-text/90 leading-relaxed">Ad-hoc alignment on positioning shifts, big launches, pricing changes.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-mono text-[11px] text-ceyo-accent3 tabular mt-1.5">03</span>
                <span className="text-sm text-ceyo-text/90 leading-relaxed">Shared Slack channel for real-time decisions when something urgent breaks.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-mono text-[11px] text-ceyo-accent3 tabular mt-1.5">04</span>
                <span className="text-sm text-ceyo-text/90 leading-relaxed">Headline approvals on founder posts. I don&apos;t wait for sign-off on drafts — I own the voice.</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div className="mt-20 pt-10 border-t border-ceyo-borderSoft flex items-baseline justify-between flex-wrap gap-6">
          <div>
            <div className="text-3xl sm:text-4xl font-semibold text-ceyo-heading max-w-2xl leading-tight">
              If the direction resonates, next conversation is a <span className="accent-text">budget level</span> and a <span className="accent-text">start date</span>.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-ceyo-muted">— Jay</div>
            <div className="h-8 w-px bg-ceyo-border" />
            <div className="font-mono text-xs text-ceyo-accent3 tabular">10 / 10</div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
