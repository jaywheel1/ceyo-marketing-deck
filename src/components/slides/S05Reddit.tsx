"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { NumberTicker } from "../primitives/NumberTicker";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const SUBS = [
  "r/SEO", "r/bigseo", "r/marketing", "r/b2bmarketing",
  "r/SaaS", "r/PerplexityAI", "r/OpenAI", "r/content_marketing",
  "r/digitalmarketing", "r/growmybusiness",
];

const LOOP = [
  { time: "7:00am", who: "AI assistant", what: "Scans 10 target subreddits overnight every 15 minutes. Picks the most relevant threads and writes 3 draft reply options for each." },
  { time: "7:15am", who: "Me", what: "Review the queue. Pick the best reply, edit, post from the right Ceyo account. 3 substantive comments live before 9am." },
  { time: "Afternoon", who: "Me", what: "2 more comments or posts on fresh threads. Every comment 300+ words, every comment shares real Ceyo data, zero pitching." },
  { time: "Friday", who: "Me", what: "Audit: which comments got upvoted, which threads AI chatbots cited back to Ceyo (we run our own tool to check)." },
];

export function S05Reddit() {
  return (
    <SectionShell id="reddit" eyebrow="The citation channel" index={5} total={12}>
      <AuroraBlob className="bottom-[-100px] right-[-160px]" size={560} color="rgba(99,102,241,0.14)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="Reddit is the 24-hour shortcut into AI answers."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        <strong className="text-ceyo-heading">AI chatbots like ChatGPT and Perplexity</strong> pull their answers from Reddit more than any other website.
        If we&apos;re helpful in Reddit conversations about AI search, those comments show up in AI answers <strong className="text-ceyo-heading">within a day</strong>.
        No other GEO tool is working Reddit seriously — it&apos;s the <strong className="text-ceyo-heading">fastest visibility lever</strong> available.
      </Explainer>

      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        <Reveal delay={0.2}>
          <div className="card p-6 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">Perplexity</div>
            <div className="text-5xl font-semibold text-ceyo-heading tabular mb-2">
              <NumberTicker value={46.7} decimals={1} suffix="%" />
            </div>
            <div className="text-sm text-ceyo-muted leading-relaxed">
              of its answers come from Reddit. <strong className="text-ceyo-text">Higher than any other website</strong> on the internet.
            </div>
            <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: Otterly.AI, 2026</div>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="card p-6 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">All AI chatbots</div>
            <div className="text-5xl font-semibold text-ceyo-heading tabular mb-2">
              <NumberTicker value={68} suffix="%" />
            </div>
            <div className="text-sm text-ceyo-muted leading-relaxed">
              of answers from <strong className="text-ceyo-text">ChatGPT, Gemini, Perplexity and Claude</strong> cite Reddit threads as a source.
            </div>
            <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: cross-platform citation analysis, 2026</div>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="card p-6 h-full">
            <div className="eyebrow text-ceyo-accent3 mb-3">Speed to AI answer</div>
            <div className="text-5xl font-semibold text-ceyo-heading tabular mb-2">
              <NumberTicker value={24} suffix=" hrs" />
            </div>
            <div className="text-sm text-ceyo-muted leading-relaxed">
              from posting a Reddit comment to seeing it appear in a Perplexity answer. <strong className="text-ceyo-text">Nothing else is this fast.</strong>
            </div>
            <div className="mt-4 pt-3 border-t border-ceyo-borderSoft text-[11px] text-ceyo-muted/80">Source: AuthorityTech benchmark</div>
          </div>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10">
        <div>
          <div className="eyebrow text-ceyo-accent3 mb-4">10 subreddits where Ceyo&apos;s buyers hang out</div>
          <div className="flex flex-wrap gap-2">
            {SUBS.map((s) => (
              <Reveal key={s}>
                <span className="inline-flex items-center gap-2 rounded-md border border-ceyo-border bg-ceyo-surface px-3 py-1.5 text-sm font-mono text-ceyo-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-ceyo-accent pulse-dot" />
                  {s}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-6 card p-4">
              <div className="eyebrow text-ceyo-muted mb-2">Real accounts, not bots</div>
              <p className="text-sm text-ceyo-text/90 leading-relaxed">
                <strong className="text-ceyo-heading">3 genuine Ceyo accounts</strong> (me and 2 others), each with real posting histories. Nothing fake.
                I own what gets posted — I move fast when a thread appears.
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <div className="eyebrow text-ceyo-accent3 mb-4">My daily Reddit routine</div>
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
