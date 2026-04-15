"use client";
import { SectionShell } from "../SectionShell";
import { SplitReveal } from "../primitives/SplitReveal";
import { Reveal } from "../primitives/Reveal";
import { AuroraBlob } from "../primitives/AuroraBlob";
import { Explainer } from "../primitives/Explainer";

const ANALYSTS = [
  {
    name: "Lily Ray",
    role: "VP SEO Strategy, Amsive",
    why: "She is the most-cited SEO voice writing about AI search today — when she names a tool in her newsletter or on LinkedIn, it travels. She currently endorses Peec.",
    play: "Send her a custom Ceyo data report tied to a topic she just posted about — every month. Offer her **first access to Ceyo's quarterly research** before it goes public. The win condition: she names Ceyo in one of her posts within 90 days.",
  },
  {
    name: "Rand Fishkin",
    role: "Founder of SparkToro, ex-Moz",
    why: "He runs SparkToro, which has data on what real people search and read. Their data + Ceyo's data = **a report neither could write alone**. Joint-research is the cleanest way into his orbit.",
    play: "Pitch one specific crossover study: \"What people search for vs what AI cites for them.\" Co-published. He gets unique data, we get co-signed authority and his audience.",
  },
  {
    name: "Mike King",
    role: "Founder of iPullRank, runs SEO Week",
    why: "He's the most respected technical SEO voice in the world, and he runs **SEO Week** — the largest annual SEO industry conference, held every May in NYC. 1,000+ senior SEO and growth operators in one room.",
    play: "Pitch Tom as a GEO speaker for SEO Week 2026 (or Lightning Talk if main slot is full). Backup: contribute Ceyo data to Mike's Google leak research — he credits sources publicly.",
  },
];

export function S09PR() {
  return (
    <SectionShell id="pr" eyebrow="Borrowed authority" index={9} total={12}>
      <AuroraBlob className="bottom-[-100px] left-[-140px]" size={520} color="rgba(99,102,241,0.12)" />

      <div className="mb-6">
        <SplitReveal
          as="h2"
          text="PR is borrowing trust from people who already have it."
          className="text-display-md text-ceyo-heading max-w-5xl"
        />
      </div>

      <Explainer>
        <p>
          <strong className="text-ceyo-heading">Buyers don&apos;t trust Ceyo&apos;s ads</strong> — they trust the people they already follow.
          When <strong className="text-ceyo-heading">Lily Ray, Rand Fishkin, or a Search Engine Land journalist</strong> mentions Ceyo, the trust transfers.
        </p>
        <p>
          That&apos;s much cheaper than buying the same trust through ads, and it lasts longer.
          The PR plan is two parallel tracks: <strong className="text-ceyo-heading">direct relationships with three named analysts</strong>, and <strong className="text-ceyo-heading">a steady journalist pipeline</strong>.
        </p>
      </Explainer>

      <div className="grid lg:grid-cols-3 gap-4 mb-10">
        {ANALYSTS.map((a, i) => (
          <Reveal key={a.name} delay={0.2 + i * 0.1}>
            <div className="card p-6 h-full">
              <div className="flex items-baseline justify-between mb-2 flex-wrap gap-1">
                <div className="text-xl font-semibold text-ceyo-heading">{a.name}</div>
                <span className="text-[11px] text-ceyo-muted">{a.role}</span>
              </div>

              <div className="mt-4">
                <div className="eyebrow text-ceyo-accent3 mb-2">Why this person</div>
                <p className="text-sm text-ceyo-text/85 leading-relaxed">{a.why}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-ceyo-borderSoft">
                <div className="eyebrow text-ceyo-accent3 mb-2">My play</div>
                <p className="text-sm text-ceyo-text/85 leading-relaxed">
                  {a.play.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j} className="text-ceyo-heading">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.6}>
        <div className="card p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="eyebrow text-ceyo-accent3 mb-3">The journalist pipeline</div>
              <ul className="space-y-2.5 text-sm text-ceyo-text/90">
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span><strong className="text-ceyo-heading">Featured</strong> + <strong className="text-ceyo-heading">Qwoted</strong> — two services where journalists post requests for expert sources. <strong className="text-ceyo-heading">5 pitches per week</strong>, Tom or Maxim as the source.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span><strong className="text-ceyo-heading">Target outlets:</strong> Search Engine Land, Search Engine Journal, Fortune, Digiday, Modern Retail.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span><strong className="text-ceyo-heading">Monthly proactive pitch:</strong> Fortune, with Ceyo&apos;s own State of GEO data.</span></li>
                <li className="flex gap-2"><span className="text-ceyo-accent mt-1">·</span><span>Every placement gets <strong className="text-ceyo-heading">re-shared</strong> on Ceyo&apos;s blog, email, and social within 48 hours.</span></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow text-ceyo-accent3 mb-3">Why PR works for Ceyo specifically</div>
              <p className="text-sm text-ceyo-text/85 leading-relaxed mb-3">
                Ceyo sits on <strong className="text-ceyo-heading">data nobody else has</strong> — AI citation rates across 5 engines, updated daily. That&apos;s catnip for journalists.
              </p>
              <p className="text-sm text-ceyo-text/85 leading-relaxed">
                Most pitches fail because they&apos;re &quot;company X launched feature Y.&quot; Ours win because they&apos;re <strong className="text-ceyo-heading">&quot;here&apos;s what we found in 1,000 prompts across ChatGPT, Claude, Gemini, Perplexity.&quot;</strong> Data first, brand mention second.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
