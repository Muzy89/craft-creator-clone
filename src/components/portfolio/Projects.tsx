import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="// 04 — Projects" title="Selected work.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-sans text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <ArrowUpRight className="h-5 w-5 text-primary/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[11px] text-primary/90"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </Section>
  );
}
