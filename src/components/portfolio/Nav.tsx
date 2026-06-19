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

          <a href="#home" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background shadow-[0_0_24px_-6px_hsl(var(--primary)/0.55)] transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_28px_-4px_hsl(var(--primary)/0.85)]">
              <span aria-hidden className="absolute inset-x-1 top-1 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <span aria-hidden className="absolute inset-x-1 bottom-1 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <svg
                viewBox="0 0 48 24"
                className="h-4 w-auto text-primary drop-shadow-[0_0_6px_hsl(var(--primary)/0.8)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 22 L2 4 L10 18 L18 4 L18 22" />
                <path d="M22 22 L30 4 L38 22 M25 16 L35 16" />
                <path d="M42 22 L42 4 M42 13 L48 4 M42 13 L48 22" />
              </svg>
            </span>
            <span className="hidden font-serif text-base font-semibold italic tracking-[0.35em] text-foreground/90 sm:inline">
              MAK<span className="not-italic text-primary">.</span>
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
