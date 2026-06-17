import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export function SectionProgress() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(l.id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-3">
        {navLinks.map((l) => {
          const isActive = active === l.id;
          return (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-widest"
              >
                <span
                  className={`transition-opacity ${
                    isActive ? "text-primary opacity-100" : "text-primary/60 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {l.label}
                </span>
                <span
                  className={`block h-2 w-2 rounded-full border border-primary transition-all ${
                    isActive ? "bg-primary shadow-glow" : "bg-transparent"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
