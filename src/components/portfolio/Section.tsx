import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-primary" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
