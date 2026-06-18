import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Nav() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light");
    else root.classList.remove("light");
  }, [light]);

  const left = navLinks.slice(0, 3);
  const right = navLinks.slice(3);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <div className="border-b border-border/40 bg-background/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <ul className="hidden items-center gap-7 font-mono text-sm md:flex">
            {left.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-foreground/70 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#home" className="group flex items-center gap-2 font-mono text-primary text-glow">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/50 bg-gradient-to-br from-primary/20 to-primary/5 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)] transition-transform group-hover:rotate-3">
              <span className="font-sans text-base font-extrabold tracking-tighter text-primary">M</span>
              <span className="absolute -bottom-0.5 -right-0.5 font-sans text-[0.6rem] font-bold text-primary/80">A</span>
            </span>
            <span className="hidden font-sans text-sm font-semibold tracking-[0.2em] text-foreground/90 sm:inline">
              MUZAMMIL<span className="text-primary">.</span>
            </span>
          </a>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-6 font-mono text-sm md:flex">
              {right.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              aria-label="Toggle theme"
              onClick={() => setLight((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary/10"
            >
              {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
