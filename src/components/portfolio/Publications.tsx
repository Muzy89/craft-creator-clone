import { FileText } from "lucide-react";
import { Section } from "./Section";
import { publications } from "@/data/portfolio";

export function Publications() {
  return (
    <Section id="publications" eyebrow="// 05 — Publications" title="Research output.">
      <ul className="divide-y divide-border rounded-xl border border-border bg-card backdrop-blur">
        {publications.map((p) => (
          <li key={p.title}>
            <a
              href={p.href}
              className="group flex flex-col gap-2 p-6 transition-colors hover:bg-primary/5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-4">
                <FileText className="mt-1 h-5 w-5 flex-none text-primary" />
                <div>
                  <h3 className="font-sans text-base font-medium text-foreground transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    {p.authors} · {p.venue} · {p.year}
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
