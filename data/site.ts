export const siteMetadata = {
  name: "Green Harbor Labs",
  domain: "greenharborlabs.com",
  url: "https://greenharborlabs.com",
  title: "Green Harbor Labs | AI-Assisted Software Engineering",
  description:
    "Green Harbor Labs builds AI-assisted software products, developer tools, prototypes, and modern web experiences with production-grade engineering.",
  keywords: [
    "AI software engineering",
    "software product studio",
    "AI-assisted development",
    "developer tools",
    "Paygate",
    "Spring Boot starter",
    "L402",
    "MPP",
    "LNbits",
    "LND",
    "Lightning payments",
    "payment-gated APIs",
    "Green Harbor Labs",
  ],
};

export const navItems = [
  { label: "Approach", href: "/#approach" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const ctas = {
  primary: { label: "Get in Touch", href: "/#contact" },
  secondary: { label: "View Project", href: "/products/paygate" },
};

export const contactLinks = {
  // Fill these before launch. Empty values are intentionally not rendered.
  email: "",
  github: "",
  linkedin: "",
};

export const buildAreas = [
  {
    title: "AI-Assisted Applications",
    body: "Products and tools that use AI as a core capability, from agent workflows to intelligent interfaces.",
  },
  {
    title: "Developer Tools",
    body: "Utilities, automation, and workflows that help engineers plan, build, test, and ship faster.",
  },
  {
    title: "Web Products",
    body: "Fast, polished browser products with clean UX, modern frontend architecture, and scalable foundations.",
  },
  {
    title: "Prototypes & Experiments",
    body: "Focused builds that explore product ideas, AI workflows, tools, and technical concepts.",
  },
] as const;

export const capabilities = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "responsive UI", "animation"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "event-driven systems", "data modeling"],
  },
  {
    title: "AI Workflows",
    items: ["AI coding agents", "planning workflows", "model-assisted development", "automation"],
  },
  {
    title: "Cloud & Data",
    items: ["AWS", "SQS", "S3", "relational databases", "graph databases", "batch processing"],
  },
  {
    title: "Product Engineering",
    items: ["PRDs", "prototypes", "MVPs", "internal tools", "technical documentation", "QA workflows"],
  },
] as const;

export const processSteps = ["Idea", "PRD", "Architecture", "Build", "Test", "Ship", "Iterate"] as const;
