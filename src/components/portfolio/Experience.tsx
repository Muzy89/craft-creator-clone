import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="// 02 — Experience" title="Where I've shipped.">
      <ol className="relative space-y-10 border-l border-primary/30 pl-8">
        {experience.map((e) => (
          <li key={e.role + e.company} className="relative">
            <span className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-background">
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6 backdrop-blur">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-xl font-semibold text-foreground">
                  {e.role}{" "}
                  <span className="text-primary">@ {e.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-primary/25 bg-primary/5 px-2 py-0.5 font-mono text-xs text-primary/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
