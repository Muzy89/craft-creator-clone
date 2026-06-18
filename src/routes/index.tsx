import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Starfield } from "@/components/portfolio/Starfield";
import { DecryptLoader } from "@/components/portfolio/DecryptLoader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Publications } from "@/components/portfolio/Publications";

import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SectionProgress } from "@/components/portfolio/SectionProgress";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.tag}` },
      { name: "description", content: profile.bio },
      { property: "og:title", content: `${profile.name} — ${profile.tag}` },
      { property: "og:description", content: profile.bio },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.tag,
          email: `mailto:${profile.email}`,
          address: profile.location,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      {loading && <DecryptLoader onDone={() => setLoading(false)} />}
      <Nav />
      <SectionProgress />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
