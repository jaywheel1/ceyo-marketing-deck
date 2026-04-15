"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const ALLOC = [
  {
    band: "Under $5K / month",
    body: "Mostly tooling and AI compute. Subscriptions for what powers the agent layer, content stack, citation tracking, and Remotion's render service. No ad spend. Everything organic — Tom + Maxim's voice, Reddit, Ceyo Scan, programmatic SEO, G2.",
  },
  {
    band: "$5K – $20K / month",
    body: "Adds paid amplification on top of what already works. LinkedIn boosts on proven organic posts, Google brand-defense and competitor-conquest search ads, retargeting on Meta. Sponsored content in 1–2 niche newsletters or podcasts.",
  },
  {
    band: "$20K+ / month",
    body: "Opens up sponsored research, podcast and newsletter sponsorships at scale, in-person events (SaaStr, MAU), and a funded agency partner program. Same plan, much more parallel — every channel running in full instead of in sequence.",
  },
];

const OWNED = [
  "All founder + company social content (Tom, Maxim, Ceyo).",
  "All blog posts, landing page copy, case studies, ad creative, launch bundles.",
  "Ad budget allocation, channel mix, A/B variant testing.",
  "Analyst + PR relationships and placement strategy.",
  "G2 + review site strategy, incentives, badge plan.",
  "The workstation — what's measured, what alerts, what we look at as a team.",
];

export function S12Close() {
  return (
    <SectionShell id="close" eyebrow="Investment + ownership" index={12} total={12}>
      <AuroraBlob className="top-[-120px] right-[-140px]" size={640} color="rgba(79,70,229,0.2)" duration={20} />
      <AuroraBlob className="bottom-[-180px] left-[-80px]" size={520} color="rgba(99,102,241,0.12)" duration={24} />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="How spend would be allocated. What I own."
          className="text-display-md text-ceyo-heading"
        />
      </div>

      <Explainer>
        <p>
          Not packaged tiers — just a rough sense of <strong className="text-ceyo-heading">where dollars go at different levels</strong>.
          The plan stays the same; only how fast it runs changes.
        </p>
        <p>
          <strong className="text-ceyo-heading">No external freelancers or agencies</strong> in the model. The whole engine runs in-house, with AI agents doing the production work and me as the operator.
        </p>
      </Explainer>

      <div className="space-y-3 mb-16">
        {ALLOC.map((a, i) => (
          <Reveal key={a.band} delay={0.2 + i * 0.1}>
            <div className="card p-5">
              <div className="grid lg:grid-cols-[200px_1fr] gap-4 items-start">
                <div>
                  <div className="eyebrow text-ceyo-accent3 mb-1">Spend level</div>
                  <div className="text-lg font-semibold text-ceyo-heading tabular">{a.band}</div>
                </div>
                <p className="text-sm text-ceyo-text/85 leading-relaxed">{a.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <Reveal delay={0.6}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-5">What I own, end-to-end</div>
            <ul className="space-y-2.5">
              {OWNED.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="font-mono text-[11px] text-ceyo-accent3 tabular mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-ceyo-text/90 leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.75}>
          <div>
            <div className="eyebrow text-ceyo-accent3 mb-5">How the team sees what I'm doing</div>
            <p className="text-sm text-ceyo-text/90 leading-relaxed mb-4">
              The <strong className="text-ceyo-heading">workstation page</strong> is the answer.
              It&apos;s the live view of every campaign, every agent, every metric — open to anyone on the team, anytime.
            </p>
            <p className="text-sm text-ceyo-text/85 leading-relaxed">
              Beyond that: <strong className="text-ceyo-heading">no formal weekly reports, no status meetings</strong> required.
              The data is the report. If something needs a real conversation — positioning shift, big launch, pricing — we have it then, not on a calendar.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div className="pt-10 border-t border-ceyo-borderSoft">
          <div className="text-2xl sm:text-3xl font-semibold text-ceyo-heading max-w-3xl leading-snug mb-3">
            That&apos;s the plan.
          </div>
          <div className="text-base sm:text-lg text-ceyo-text/85 leading-relaxed max-w-3xl">
            Happy to dig into any section in more depth, push back on anything that doesn&apos;t fit Ceyo&apos;s reality, and figure out together what the first 30 days actually look like.
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="font-mono text-xs text-ceyo-muted">— Jay</div>
            <div className="h-8 w-px bg-ceyo-border" />
            <div className="font-mono text-xs text-ceyo-accent3 tabular">12 / 12</div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
