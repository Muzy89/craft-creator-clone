import { profile, socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Built with intent.
        </div>
        <div className="font-mono text-xs text-primary/80">
          {socials.map((s, i) => (
            <span key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                {s.label}
              </a>
              {i < socials.length - 1 && <span className="mx-2 text-primary/40">·</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
