import { useState, type FormEvent } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, GraduationCap, Send } from "lucide-react";
import { Section } from "./Section";
import { profile, socials } from "@/data/portfolio";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  graduation: GraduationCap,
};

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const subject = String(data.get("subject") || "Hello");
    const message = String(data.get("message") || "");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="// 07 — Contact" title="Let's build something.">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-6 md:col-span-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            Open to research collaborations, advisory, and well-scoped consulting on agentic
            systems and ML infrastructure. Drop a line — I read everything.
          </p>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-3 text-foreground/90">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${profile.email}`} className="hover:text-primary">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-foreground/90">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-all hover:bg-primary/10 hover:shadow-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-border bg-card p-6 backdrop-blur md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" />
            <Field name="email" label="Email" type="email" />
          </div>
          <Field name="subject" label="Subject" />
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-primary/80">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-md border border-input bg-background/40 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:bg-background/60"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            {sent ? "Opening mail…" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-wider text-primary/80">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary focus:bg-background/60"
      />
    </div>
  );
}
