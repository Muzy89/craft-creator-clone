export const profile = {
  name: "Muhammad Taimoor Khan",
  tag: "AI Researcher & Software Developer",
  tagline: "Master AI & Tech, Unlock the Future!",
  bio: "Specializing in artificial intelligence, data science, and software development with a passion for creating intelligent solutions to complex problems.",
  location: "Karachi, Pakistan",
  email: "hello@taimoor.dev",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/myselftaimoor", icon: "github" as const },
  { label: "LinkedIn", href: "https://linkedin.com/in/myselftaimoor", icon: "linkedin" as const },
  { label: "Twitter", href: "https://twitter.com/myselftaimoor", icon: "twitter" as const },
  { label: "Scholar", href: "https://scholar.google.com", icon: "graduation" as const },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "Years in AI", value: "5+" },
  { label: "Publications", value: "12" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Open Source ★", value: "1.2k" },
];

export const skills = [
  "Python", "PyTorch", "TensorFlow", "Hugging Face", "LangChain",
  "OpenAI API", "TypeScript", "React", "Next.js", "Node.js",
  "FastAPI", "PostgreSQL", "Docker", "AWS", "MLOps", "RAG",
  "Computer Vision", "NLP", "Federated Learning", "Tailwind CSS",
];

export const experience = [
  {
    role: "COO & AI Lead",
    company: "Digipex Solutions",
    period: "2023 — Present",
    bullets: [
      "Leading operations and AI automation across a 20-person engineering org.",
      "Architected an LLM-powered workflow platform serving 30+ enterprise clients.",
      "Built RAG pipelines on top of internal knowledge bases (LangChain + pgvector).",
    ],
    tech: ["LangChain", "OpenAI", "Postgres", "Next.js"],
  },
  {
    role: "AI Research Engineer",
    company: "Independent / Freelance",
    period: "2021 — 2023",
    bullets: [
      "Published research on federated learning for medical imaging.",
      "Shipped computer-vision systems for retail analytics (PyTorch, ONNX).",
      "Consulted on MLOps and model deployment for early-stage startups.",
    ],
    tech: ["PyTorch", "ONNX", "FastAPI", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2019 — 2021",
    bullets: [
      "Built React + Node SaaS dashboards and Shopify/WordPress stores.",
      "Designed UI systems with a focus on conversion and accessibility.",
    ],
    tech: ["React", "Node.js", "Shopify", "Tailwind"],
  },
];

export const education = [
  {
    school: "National University of Sciences & Technology",
    degree: "M.S. — Artificial Intelligence",
    period: "2022 — 2024",
    detail: "Thesis on federated learning for privacy-preserving medical imaging.",
  },
  {
    school: "Capital University of Science & Technology",
    degree: "B.S. — Computer Science",
    period: "2017 — 2021",
    detail: "Graduated with distinction. Focus on software engineering and algorithms.",
  },
];

export const projects = [
  {
    title: "Cognition Engine",
    description: "Multi-agent reasoning framework with tool-use, memory, and self-reflection. Powers production assistants for three SaaS companies.",
    tech: ["Python", "LangGraph", "OpenAI", "Redis"],
    href: "https://github.com/myselftaimoor",
  },
  {
    title: "FedMed",
    description: "Federated learning pipeline for hospital networks. Trains diagnostic models without centralizing patient data.",
    tech: ["PyTorch", "Flower", "Docker"],
    href: "https://github.com/myselftaimoor",
  },
  {
    title: "Retail Vision Suite",
    description: "Real-time foot-traffic and shelf-stock analytics from in-store cameras. Edge-deployed on Jetson.",
    tech: ["YOLOv8", "ONNX", "FastAPI"],
    href: "https://github.com/myselftaimoor",
  },
  {
    title: "Ledger Copilot",
    description: "RAG assistant over financial documents — invoices, contracts, statements — with citation-grounded answers.",
    tech: ["LangChain", "pgvector", "Next.js"],
    href: "https://github.com/myselftaimoor",
  },
  {
    title: "Shopify Pulse",
    description: "Conversion-optimization toolkit for Shopify merchants. A/B tests, heatmaps, and AI copy suggestions.",
    tech: ["Remix", "Shopify", "TypeScript"],
    href: "https://github.com/myselftaimoor",
  },
  {
    title: "Portfolio Engine",
    description: "The site you're looking at. Built with TanStack Start, Tailwind v4, and Framer Motion.",
    tech: ["TanStack", "Tailwind", "Motion"],
    href: "https://github.com/myselftaimoor",
  },
];

export const publications = [
  {
    title: "Privacy-Preserving Federated Learning for Multi-Center Radiology",
    venue: "IEEE TMI",
    year: "2024",
    authors: "Khan, M. T., et al.",
    href: "#",
  },
  {
    title: "On the Sample Efficiency of Retrieval-Augmented Generation",
    venue: "ACL Findings",
    year: "2023",
    authors: "Khan, M. T., Rahman, A.",
    href: "#",
  },
  {
    title: "Edge-Deployed Vision Transformers for Retail Analytics",
    venue: "CVPR Workshop",
    year: "2023",
    authors: "Khan, M. T., et al.",
    href: "#",
  },
];

export const blogPosts = [
  {
    title: "Why Multi-Agent Systems Are the Next Browser",
    excerpt: "A pragmatic look at where agentic frameworks earn their keep — and where they collapse.",
    date: "May 2026",
    tag: "AI",
  },
  {
    title: "Federated Learning Without the Hype",
    excerpt: "What actually works in production federated training, and the failure modes papers don't talk about.",
    date: "March 2026",
    tag: "Research",
  },
  {
    title: "Shipping LLM Features That Don't Break in Production",
    excerpt: "Evals, guardrails, and the unglamorous infrastructure behind a 'simple' chat box.",
    date: "January 2026",
    tag: "Engineering",
  },
];
