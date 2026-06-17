import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["cognition", "neurons", "vectors", "agents", "datasets", "weights"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

function scramble(target: string, progress: number) {
  const revealed = Math.floor(target.length * progress);
  let out = "";
  for (let i = 0; i < target.length; i++) {
    out += i < revealed ? target[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return out;
}

export function DecryptLoader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState(WORDS[0]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 3000;
    const tickMs = 60;
    let elapsed = 0;
    const id = setInterval(() => {
      elapsed += tickMs;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);
      const w = Math.min(WORDS.length - 1, Math.floor(p * WORDS.length));
      const sub = (p * WORDS.length) % 1;
      setDisplay(scramble(WORDS[w], sub));
      if (p >= 1) {
        clearInterval(id);
        setTimeout(() => setVisible(false), 300);
        setTimeout(onDone, 900);
      }
    }, tickMs);
    return () => clearInterval(id);
  }, [onDone]);

  const pct = Math.max(0, Math.round(progress * 100));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative h-56 w-56">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/30"
                style={{ transform: `scale(${0.4 + i * 0.18})` }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow" />
            {Array.from({ length: 5 }).map((_, i) => {
              const angle = -0.6 - i * 0.18;
              const dist = 80 - i * 12;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-primary"
                  style={{
                    transform: `translate(${Math.cos(angle) * dist - 4}px, ${Math.sin(angle) * dist - 4}px)`,
                    opacity: 0.4 + (i / 5) * 0.6,
                  }}
                />
              );
            })}
          </div>

          <div className="mt-10 font-mono text-primary text-glow">
            <span>Decrypting </span>
            <span className="inline-block min-w-[8ch] text-left">{display}</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
          </div>

          <div className="mt-16 w-72">
            <div className="mb-2 flex flex-wrap justify-center gap-1 font-mono text-xs text-primary/60">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i}>{i < (pct / 100) * 40 ? "▓" : "·"}</span>
              ))}
            </div>
            <div className="text-center font-mono text-xs tracking-widest text-primary/80">
              LOADING COGNITION: {pct}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
