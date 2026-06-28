export const metrics = [
  {value: "4+", label: "Years Experience"},
  {value: "3+", label: "Companies"},
  {value: "10+", label: "Projects/Features Shipped"},
  {value: "100%", label: "Full-Stack"},
];

export const expStats = [
  {value: "38", label: "Federal Ministries Live"},
  {value: "65%", label: "Reduced Approval Cycles"},
  {value: "v1.0", label: "E-Sign Shipped"},
];

// ── WORK EXPERIENCE ──────────────────────────────────────────
export const experiences = [
  {
    id: "crown",
    company: "Crown Interactive Ltd",
    role: "Software Engineer",
    period: "Oct 2021 – Present",
    type: "Full-Time",
    location: "Lagos, Nigeria",
    context:
      "Core contributor on the 1Government Cloud programme — Nigeria's sovereign digital workspace for federal ministries. Delivered production features across three flagship SaaS platforms now live across all 38 federal MDAs.",
    projects: [
      {
        id: "ecms",
        icon: "⊞",
        name: "Gov ECMS",
        fullName: "Enterprise Content Management System",
        status: "In Production",
        desc: "Contributed to the migration of the ECMS from a legacy Yii1 architecture to a high-performance Next.js environment, enabling role-based document workflows for 38 federal ministries.",
        bullets: [
          "Engineered role-based task lifecycle workflows (create, review, approve) reducing inter-ministry approval cycles across all 38 federal MDAs",
          "Maintained legacy Yii1 frontend codebase, rolling out features that enabled ministry-wide adoption",
          "Rebuilt core modules in Next.js, TypeScript and React Query — improving page load speed and eliminating stale-data bugs",
          "Modernised Yii1/Yii2 backend modules with RESTful API patterns, improving response times on multiple endpoints",
        ],
        tags: ["Next.js", "TypeScript", "React Query", "Yii1", "Yii2", "PHP"],
        quote: null,
      },
      {
        id: "govdrive",
        icon: "☁",
        name: "GovDrive",
        fullName: "Sovereign File Management",
        status: "In Production",
        desc: "Shipped a standalone cloud storage module for federal document management, integrated into the wider 1Gov ecosystem and cited in successful government contract negotiations.",
        bullets: [
          "Implemented secure file upload, permission-scoped folder access, and version-controlled document storage",
          "Contributed Context API and Zustand state patterns replacing prop-drilling across the dashboard",
          "Aligned Figma designs with live interfaces, closing usability gaps and reducing navigation-related support tickets",
        ],
        tags: [
          "Next.js",
          "Tailwind CSS",
          "Zustand",
          "Context API",
          "Redux Toolkit",
        ],
        quote: null,
      },
      {
        id: "esign",
        icon: "✍",
        name: "GovE-Sign",
        fullName: "Cross-Platform Document Signing Add-On",
        status: "Live",
        desc: "Built v1 of a cross-platform digital signature add-on enabling legally binding e-signatures across all 1Government Cloud applications — ECMS, GovDrive, and beyond.",
        bullets: [
          "Architected and built v1 end-to-end: document rendering, signee authentication, signature capture and signed-document storage",
          "Designed the reusable integration layer so GovE-Sign plugs into any 1Gov product without duplicating implementation",
        ],
        tags: ["TypeScript", "Laravel", "REST APIs"],
        quote: null,
      },
    ],
  },
  {
    id: "snazbnb",
    company: "Snazbnb",
    role: "Software Engineer",
    period: "Jun 2024 – Sep 2024",
    type: "Contract",
    location: "Lagos, Nigeria",
    context:
      "End-to-end ownership of a property rental platform — sole engineer responsible for frontend, backend, infrastructure, and cross-platform API design.",
    projects: [
      {
        id: "snazbnb-platform",
        icon: "🏠",
        name: "Snazbnb Platform",
        fullName: "Property Rental Web Application",
        status: "Shipped",
        desc: "Sole engineer on a full-stack property rental platform. Owned the entire delivery — from UI components to server configuration — collaborating with mobile developers to ensure consistent API consumption across platforms.",
        bullets: [
          "Built the complete frontend with React.js and Tailwind CSS — dynamic, reusable component library throughout",
          "Built backend services in Laravel: authentication, validation, and API performance optimisation",
          "Managed application hosting, server configuration, and database setup on DigitalOcean end-to-end",
          "Collaborated with mobile developers to ensure efficient API consumption and consistent data flow across platforms",
        ],
        tags: ["React.js", "Tailwind CSS", "Laravel", "MySQL", "DigitalOcean"],
        quote: null,
      },
    ],
  },
  {
    id: "ampersand",
    company: "Ampersand Logistics",
    role: "Software Engineer Intern",
    period: "Apr 2020 – Sep 2020",
    type: "Internship",
    location: "Lagos, Nigeria",
    context:
      "First professional role — built frontend interfaces and backend logic for client web projects, including mobile authentication features.",
    projects: [
      {
        id: "haven-homes",
        icon: "🏡",
        name: "Haven Homes",
        fullName: "Real Estate Web Application",
        status: "Delivered",
        desc: "Contributed to the Haven Homes web application, focusing on responsive UI and user-friendly workflows, plus mobile authentication features.",
        bullets: [
          "Developed frontend interfaces using HTML, CSS, and JavaScript with PHP backend logic",
          "Built registration and authentication features for mobile applications including Google OAuth integration",
          "Focused on responsive UI and user-friendly workflows for the property listing experience",
        ],
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Google OAuth"],
        quote: null,
      },
    ],
  },
];

// Keep flat projects list for any component that still uses it
export const projects = experiences.flatMap((e) => e.projects);

// ── STACK ────────────────────────────────────────────────────
export const stackSections = {
  frontend: {
    title: "Frontend",
    subtitle: "Interfaces & Visualization",
    icon: "⊟",
    items: [
      {name: "Next.js / React", sub: "SSR & Hybrid Rendering"},
      {name: "TypeScript", sub: "Strict Type Safety"},
      {name: "Tailwind CSS", sub: "Utility-First Styling"},
      {name: "Alpine.js", sub: "Lightweight Interactivity"},
      {name: "React Query", sub: "Server State Management"},
      {name: "React Table", sub: "Table Management"},
      {name: "Zustand / MobX", sub: "Client State"},
      {name: "Three.js", sub: "3D Visualization"},
      {name: "Chakra UI", sub: "Component Library"},
    ],
  },
  backend: {
    title: "Backend & APIs",
    subtitle: "Logic & Persistence",
    icon: "⊟",
    items: [
      {name: "Laravel / PHP", sub: "Modern MVC Architectures"},
      {name: "Yii1 / Yii2", sub: "Legacy System Support"},
      {name: "MySQL", sub: "Relational Data Integrity"},
      {name: "RESTful APIs", sub: "API Design & Integration"},
    ],
  },
  infra: [
    "Docker",
    "Linux",
    "CI/CD Pipelines",
    "DigitalOcean",
    "Redis",
    "ActiveMQ",
  ],
  tools: [
    {label: "Design", val: "Figma"},
    {label: "Version Control", val: "Git / GitHub"},
    {label: "API Testing", val: "Postman"},
    {label: "E2E Testing", val: "Cypress"},
  ],
  specialisms: [
    {
      icon: "🏗",
      title: "Full-Stack Ownership",
      desc: "Comfortable owning both frontend and backend. From UI component to database query.",
    },
    {
      icon: "🔄",
      title: "Legacy Modernisation",
      desc: "Proven track record migrating Yii1/Yii2 systems to modern Next.js architectures without breaking production.",
    },
    {
      icon: "🚀",
      title: "Rapid Delivery",
      desc: "From solo contract work to enterprise teams consistent delivery across project types and scales.",
    },
  ],
};
