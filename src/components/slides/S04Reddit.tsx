"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";

const SUBS = [
  "r/SEO", "r/bigseo", "r/marketing", "r/b2bmarketing",
  "r/SaaS", "r/PerplexityAI", "r/OpenAI", "r/content_marketing",
  "r/digitalmarketing", "r/growmybusiness",
];

const LOOP = [
  { time: "7:00am", who: "Agent", what: "Scans 10 target subreddits every 15 minutes overnight. Queues the most relevant threads with 3 draft response options each." },
  { time: "7:15am", who: "Me", what: "Review queue. Pick best drafts. Voice-match. Ship from the right identity. 3 substantive comments shipped before 9am." },
  { time: "Afternoon", who: "Me", what: "2 more original posts or comments in response to fresh threads. Every comment 300+ words, every comment contains real Ceyo probe data." },
  { time: "Friday", who: "Me", what: "Audit: which comments got upvoted, which threads got cited back in Perplexity (we run the probe to verify)." },
];

export function S04Reddit() {
  return (
    <SectionShell id="reddit" eyebrow="The citation channel" index={4} total={10}>
      <AuroraBlob className="bottom-[-100px] right-[-160px]" size={560} color="rgba(99,102,241,0.14)" />

      <div className="mb-14">
        <SplitReveal
          as="h2"
          text="Reddit is the 24-hour Perplexity citation loop."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
        <Reveal delay={0.3}>
          <p className="text-lg text-ceyo-text/80 mt-6 max-w-3xl leading-relaxed">
            No B2B GEO platform is working it. I would.
          </p>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        <Reveal delay={0.2}>
          <div className="card p-6 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">Perplexity</div>
            <div className="text-5xl font-semibold text-ceyo-heading tabular mb-2">
              <NumberTicker value={46.7} decimals={1} suffix="%" />
            </div>
            <div className="text-sm text-ceyo-muted leading-relaxed">
              of its citations come from Reddit. Higher than any other source on the internet.
            </div>
            <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: Otterly.AI, 2026</div>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="card p-6 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">All AI answers</div>
            <div className="text-5xl font-semibold text-ceyo-heading tabular mb-2">
              <NumberTicker value={68} suffix="%" />
            </div>
            <div className="text-sm text-ceyo-muted leading-relaxed">
              of AI responses across ChatGPT, Gemini, Perplexity, Claude cite Reddit threads.
            </div>
            <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: cross-engine citation analysis, 2026</div>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="card p-6 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">Time to citation</div>
            <div className="text-5xl font-semibold text-ceyo-heading tabular mb-2">
              <NumberTicker value={24} suffix=" hrs" />
            </div>
            <div className="text-sm text-ceyo-muted leading-relaxed">
              from posting a Reddit comment to appearing in a Perplexity answer. Fastest channel in GEO.
            </div>
            <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: AuthorityTech benchmark</div>
          </div>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">
        <div>
          <div className="eyebrow text-ceyo-accent3 mb-4">Target subreddits</div>
          <div className="flex flex-wrap gap-2">
            {SUBS.map((s, i) => (
              <Reveal key={s} delay={0.1 + i * 0.03}>
                <span className="inline-flex items-center gap-2 rounded-md border border-ceyo-border bg-ceyo-surface px-3 py-1.5 text-sm font-mono text-ceyo-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-ceyo-accent pulse-dot" />
                  {s}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-6 card p-4">
              <div className="eyebrow text-ceyo-muted mb-2">Identities</div>
              <p className="text-sm text-ceyo-text/90 leading-relaxed">
                3 authentic accounts (me + 2 Ceyo people), real post histories, no burners.
                I own voice and what ships. No founder approval on individual comments.
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <div className="eyebrow text-ceyo-accent3 mb-4">Daily loop</div>
          <div className="space-y-3">
            {LOOP.map((l, i) => (
              <Reveal key={l.time} delay={0.15 + i * 0.08}>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 font-mono text-xs tabular text-ceyo-accent3 w-20 pt-1">{l.time}</div>
                  <div className="card flex-1 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-ceyo-heading font-semibold">{l.who}</span>
                    </div>
                    <p className="text-sm text-ceyo-muted leading-relaxed">{l.what}</p>
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
