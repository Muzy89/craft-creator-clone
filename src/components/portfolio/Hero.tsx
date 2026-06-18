import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import portraitAsset from "@/assets/profile-hero-2.png.asset.json";
const portrait = portraitAsset.url;
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            {profile.tag}
          </span>
          <h1 className="mt-6 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-foreground/95">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="mt-6 max-w-md border-b border-dashed border-primary/40 pb-3 font-mono text-base text-primary/90 text-glow">
            {profile.tagline}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* corner brackets */}
          <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-primary" />
          <span className="absolute -right-3 -top-3 h-10 w-10 border-r-2 border-t-2 border-primary" />
          <span className="absolute -bottom-3 -left-3 h-10 w-10 border-b-2 border-l-2 border-primary" />
          <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-primary" />
          <div className="absolute inset-6 rounded-full shadow-glow">
            <img
              src={portrait}
              alt={`${profile.name} portrait`}
              width={768}
              height={768}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {/* floating dots */}
          <span className="absolute -left-6 top-1/3 h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="absolute -right-2 bottom-10 h-2 w-2 rounded-full bg-primary animate-pulse" />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-primary/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll Down</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
