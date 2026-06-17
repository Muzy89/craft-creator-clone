import { Section } from "./Section";
import { blogPosts } from "@/data/portfolio";

export function Blog() {
  return (
    <Section id="blog" eyebrow="// 06 — Blog" title="Writing.">
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60"
          >
            <div className="flex items-center justify-between font-mono text-xs text-primary/80">
              <span>{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-4 font-sans text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            <span className="mt-5 font-mono text-xs text-primary">Read more →</span>
          </article>
        ))}
      </div>
    </Section>
  );
}
