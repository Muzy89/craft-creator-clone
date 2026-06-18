export const profile = {
  name: "Muzammil Ahmed Khilji",
  tag: "ML Engineer · Python Developer · AI & Data",
  tagline: "Build with Data. Ship with AI.",
  bio: "Final-year Computer Science student at Mehran UET Jamshoro (GPA 3.96/4.00) with hands-on experience in machine learning, Python automation, and full-stack web development. Currently building AI-driven ML pipelines as a Machine Learning Intern at FlyRank AI, with 20+ delivered freelance projects on Fiverr.",
  location: "Hyderabad, Pakistan",
  email: "mskhilji89@gmail.com",
  phone: "+92 311 3040898",
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/muzammilkhilji", icon: "github" as const },
  { label: "LinkedIn", href: "https://linkedin.com/in/muzammilahmedkhilji", icon: "linkedin" as const },
  { label: "Email", href: "mailto:mskhilji89@gmail.com", icon: "twitter" as const },
  { label: "Phone", href: "tel:+923113040898", icon: "graduation" as const },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "GPA", value: "3.96" },
  { label: "Fiverr Projects", value: "20+" },
  { label: "Client Rating", value: "5★" },
  { label: "YOLO mAP", value: "88%+" },
];

export const skills = [
  "Python", "Java", "JavaScript", "Machine Learning", "Deep Learning",
  "YOLOv8", "scikit-learn", "TensorFlow", "NLP", "Prompt Engineering",
  "RapidMiner", "React", "Node.js", "HTML5", "CSS3", "REST APIs",
  "MySQL", "MongoDB", "Oracle", "Git", "GitHub", "Postman",
  "Selenium", "Web Scraping", "Data Analysis", "Automation",
];

export const experience = [
  {
    role: "Machine Learning Intern",
    company: "FlyRank AI",
    period: "June 2026 — Present",
    bullets: [
      "Collaborate on ML model development and optimization, contributing to AI pipelines that process and analyze large-scale datasets.",
      "Apply Python-based ML frameworks (scikit-learn, TensorFlow) to build, train, and evaluate predictive models for production-level AI products.",
      "Conduct data preprocessing, feature engineering, and model tuning to iteratively improve model performance.",
      "Participate in code reviews, documentation, and deployment of ML components using GitHub and cloud-based tools.",
    ],
    tech: ["Python", "scikit-learn", "TensorFlow", "GitHub"],
  },
  {
    role: "Freelance Web Developer",
    company: "Fiverr",
    period: "2023 — May 2026",
    bullets: [
      "Delivered 20+ full-stack web development projects to international clients with a consistent 5-star rating.",
      "Built responsive, cross-device websites using HTML, CSS, JavaScript and React, integrating Node.js + MySQL/MongoDB backends.",
      "Managed end-to-end project lifecycles: requirements, development, testing, deployment, and client iteration.",
      "Reduced average project delivery time by 20% via reusable component libraries and standardized workflows.",
    ],
    tech: ["React", "Node.js", "MySQL", "MongoDB"],
  },
];

export const education = [
  {
    school: "Mehran University of Engineering & Technology, Jamshoro",
    degree: "B.S. — Computer Science (GPA 3.96 / 4.00)",
    period: "2022 — 2026",
    detail: "Ranked in the top 5% of the CS department. Coursework: Machine Learning, DSA, Database Systems, Software Engineering, Computer Networks, OOP.",
  },
];

export const projects = [
  {
    title: "UrbanEye — AI Civic Issue Detection",
    description: "Real-time civic issue detector built on YOLOv8 and trained on 1,000+ labeled images of potholes, cracks, and sewerage problems. Achieves 88%+ mAP and assigns Low/Medium/Critical severity. Final Year Project recognized for smart-city impact.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    href: "https://github.com/muzammilkhilji",
  },
  {
    title: "EagleType — GUI Typing Speed Analyzer",
    description: "Java Swing desktop app that measures typing speed (WPM) and accuracy in real time. Built on an MVC architecture for a modular, maintainable codebase.",
    tech: ["Java", "OOP", "Swing", "MVC"],
    href: "https://github.com/muzammilkhilji",
  },
  {
    title: "Responsive Portfolio Website",
    description: "Fully responsive personal portfolio with advanced hover animations, lazy loading, and CSS Grid/Flexbox layouts — Google PageSpeed score 90+.",
    tech: ["JavaScript", "HTML5", "CSS3", "UI/UX"],
    href: "https://github.com/muzammilkhilji",
  },
  {
    title: "URL Shortener Application",
    description: "Python + Tkinter desktop tool that integrates a third-party REST API to generate and manage short links, with clipboard copy and link history tracking.",
    tech: ["Python", "Tkinter", "REST API"],
    href: "https://github.com/muzammilkhilji",
  },
];

export const publications = [
  {
    title: "Google Data Analytics: Ask Questions to Make Data-Driven Decisions",
    venue: "Coursera",
    year: "2025",
    authors: "Google Certificate",
    href: "https://coursera.org/share/230e081330840c40abe5d145654ce4cc",
  },
  {
    title: "Start Writing Prompts like a Pro",
    venue: "Coursera · Google",
    year: "2025",
    authors: "Google Certificate",
    href: "https://coursera.org/share/86c2948a7590087a3406e71e38e8e7ae",
  },
  {
    title: "Google Prompting Essentials (Specialization)",
    venue: "Coursera · Google",
    year: "2025",
    authors: "Specialization",
    href: "https://coursera.org/share/bed3b76bf00baefb4ef6ad70ba729bcd",
  },
  {
    title: "Speed Up Data Analysis and Presentation Building",
    venue: "Coursera · Google",
    year: "2025",
    authors: "Google Certificate",
    href: "https://coursera.org/share/49f3476458b95d50f7fb31e96a84c34e",
  },
  {
    title: "Use AI as a Creative or Expert Partner",
    venue: "Coursera · Google",
    year: "2025",
    authors: "Google Certification",
    href: "https://coursera.org/share/d40bd65a7e3a8bb7b878c6a88a857cf5",
  },
  {
    title: "DigiSkills Freelancing Certificate",
    venue: "DigiSkills",
    year: "2024",
    authors: "Certificate",
    href: "https://drive.google.com/file/d/1QFftgqCZpxO6FRfTpk7XE4Nvd-lx-LzY/view",
  },
];

export const blogPosts: { title: string; excerpt: string; date: string; tag: string }[] = [];
