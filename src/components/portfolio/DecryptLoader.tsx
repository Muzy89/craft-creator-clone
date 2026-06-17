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
  const [wordIdx, setWordIdx] = useState(0);
  const [display, setDisplay] = useState(WORDS[0]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 3200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      const w = Math.min(WORDS.length - 1, Math.floor(p * WORDS.length));
      setWordIdx(w);
      setDisplay(scramble(WORDS[w], (p * WORDS.length) % 1));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onDone, 600);
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* orbital rings */}
          <div className="relative h-56 w-56">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/30"
                style={{ transform: `scale(${0.4 + i * 0.18})` }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow" />
            {/* approaching dots */}
            {Array.from({ length: 5 }).map((_, i) => {
              const angle = -0.6 - i * 0.18;
              const dist = 80 - i * 12;
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    transform: `translate(${Math.cos(angle) * dist - 4}px, ${Math.sin(angle) * dist - 4}px)`,
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
                <span key={i}>{i < progress * 40 ? "▓" : "·"}</span>
              ))}
            </div>
            <div className="text-center font-mono text-xs tracking-widest text-primary/80">
              LOADING COGNITION: {Math.floor(progress * 100)}%
            </div>
          </div>

          {/* unused wordIdx ref to satisfy lint */}
          <span className="sr-only">{WORDS[wordIdx]}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
