import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="// 03 — Education" title="Foundations.">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.school}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 backdrop-blur transition-transform hover:-translate-y-1"
          >
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">{e.degree}</h3>
            <div className="font-mono text-sm text-primary/90">{e.school}</div>
            <div className="mt-1 font-mono text-xs text-muted-foreground">{e.period}</div>
            <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </Section>
  );
}
