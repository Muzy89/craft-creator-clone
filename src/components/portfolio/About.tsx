import { Section } from "./Section";
import { profile, skills, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="// 01 — About" title="A builder at the AI / product seam.">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I&apos;m a researcher and engineer based in {profile.location}. I work on agentic
            systems, retrieval-augmented generation, and federated learning — usually with one
            foot in research and one foot in production.
          </p>
          <p>
            Past lives include leading operations at an AI consultancy, shipping computer-vision
            systems for retail, and freelancing on a long tail of React, Node, and Shopify
            builds. The thread connecting all of it: turning ideas into things people actually
            use.
          </p>
          <p className="font-mono text-sm text-primary/80">
            $ currently → building multi-agent infrastructure & publishing on federated ML.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-xs text-primary/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-5 backdrop-blur"
            >
              <div className="font-mono text-3xl font-bold text-primary text-glow">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
