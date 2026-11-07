export const profile = {
  name: "Abrar Ul Karim",
  initials: "AK",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Software Engineer", "ML Researcher", "System Design Enthusiast"],
  status: "Available for opportunities",
  tagline:
    "Software engineer focused on full-stack web development and intelligent systems.",
  stack: ["React", "Next.js", "NestJS", "ASP.NET Core MVC", "Python"],
  image: "/images/profile.webp",
  resume: "/resume.pdf",
  email: "abrarakif62@gmail.com",
  phone: "+880 1858779762",
  linkedin: "https://www.linkedin.com/in/abrarulkarim54370",
  github: "https://github.com/Abrar-Ul-Karim",
};


export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const aboutParagraphs = [
  "I’m a Computer Science and Engineering undergraduate at American International University-Bangladesh (AIUB), passionate about building reliable, scalable, and user-focused software solutions.",
  "My interests include full-stack development, software architecture, system design, and machine learning. Through academic and personal projects, I have gained experience developing web applications and backend systems while exploring machine learning techniques through research and experimentation.",
  "I’m continuously working to strengthen my software engineering skills, deepen my understanding of software design principles and design patterns, and build practical solutions that combine thoughtful engineering with real-world problem-solving.",
];

//export const certifications: { name: string; issuer: string; year: string }[] = [];



export type Skill = {
  name: string;
  devicon?: string;
  invert?: boolean;
  icon?: "api" | "key" | "database" | "oop" | "mvc" | "architecture" | "dsa"; // logo না থাকলে lucide icon
};

export const skillGroups: { title: string; wide?: boolean; items: Skill[] }[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "C++", devicon: "cplusplus" },
      { name: "Java", devicon: "java" },
      { name: "C#", devicon: "csharp" },
      { name: "JavaScript", devicon: "javascript" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Python", devicon: "python" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      { name: "React", devicon: "react" },
      { name: "Next.js", devicon: "nextjs", invert: true },
      { name: "NestJS", devicon: "nestjs" },
      { name: "ASP.NET Core MVC", devicon: "dotnetcore" },
      { name: ".NET", devicon: "dotnetcore" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", devicon: "postgresql" },
      { name: "Microsoft SQL Server", icon: "database" },
      { name: "Oracle Database", devicon: "oracle" },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "Git", devicon: "git" },
      { name: "GitHub", devicon: "github", invert: true },
      { name: "Postman", devicon: "postman" },
      { name: "JWT", icon: "key" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    title: "Core Concepts",
    wide: true,
    items: [
      { name: "Object-Oriented Programming (OOP)", icon: "oop" },
      { name: "MVC Architecture", icon: "mvc" },
      { name: "Database Management", icon: "database" },
      { name: "Software Architecture", icon: "architecture" },
      { name: "Data Structures & Algorithms", icon: "dsa" },
    ],
  },
];




export const projects = [
  {
    title: "InternNova",
    subtitle: "Internship Management Platform",
    description:
      "A web based internship management platform for managing companies, internships, applications, interviews, and users.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    live: "#",
    github: "https://github.com/marufbytes/internnova",
  },
  {
    title: "Telecommunication Management System",
    subtitle: "Desktop Application",
    description:
      "A desktop-based telecommunication management system developed to streamline SIM inventory, customer account management, package operations, employee activities, and mobile recharge services.",
    stack: [
      "C#",
      ".NET Framework 4.7.2",
      "Windows Forms",
      "Guna.UI2",
      "MetroModernUI",
      "Microsoft SQL Server",
      "ADO.NET"
    ],
    live: "#",
    github: "https://github.com/Abrar-Ul-Karim/TelecomCore-Telecommunication-Management-System",
  },

  {
    title: "HSC 2026 Wishcard Generator",
    subtitle: "Web Application",
    description:
      "A web-based wishcard generator that allows users to create personalized HSC 2026 greeting cards with Bengali text and download them as high-quality PNG images for sharing.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "html-to-image"
    ],
    github:"https://github.com/Abrar-Ul-Karim/WishCard",
    live: "https://resultwishes.vercel.app/",
  },

];
;


export const research = [
  {
    status: "Accepted",
    venue: "IEEE RAAICON 2025",
    title:
      "Optimizing Surgery Room Scheduling with Comparative Metaheuristic Algorithms",
    summary:
      "Compared five metaheuristic algorithms for emergency surgery room scheduling, analyzing execution time, memory usage, cache behavior, and computational efficiency.",

    algorithms: [
      { short: "PSO", name: "Particle Swarm Optimization" },
      { short: "ACO", name: "Ant Colony Optimization" },
      { short: "GA", name: "Genetic Algorithm" },
      { short: "SA", name: "Simulated Annealing" },
      { short: "TS", name: "Tabu Search" },
    ],

    metrics: [
      { label: "Execution time", icon: "time" },
      { label: "Memory usage", icon: "memory" },
      { label: "Cache behavior", icon: "cache" },
      { label: "Computational efficiency", icon: "efficiency" },
    ] as {
      label: string;
      icon: "time" | "memory" | "cache" | "efficiency";
    }[],

    doi: "10.1109/RAAICON69033.2025.11502411",
  },

  {
    status: "Research Project",
    title:
      "Seasonality-Aware Explainable Demand Forecasting for Power Utility Decision Support",

    summary:
      "Proposed a seasonality-aware framework for one-hour-ahead electricity demand forecasting, abnormality detection, and model explanation. The framework combines gradient boosting, causal anomaly detection, and seasonal-reference SHAP analysis to provide contextually aligned explanations of unusual demand patterns.",

    methodology: [
      {
        category: "Forecasting Model",
        methods: ["LightGBM Regression"],
      },
      {
        category: "Abnormality Detection",
        methods: [
          "Seasonal Decomposition",
          "Robust MAD-Based Detection",
        ],
      },
      {
        category: "Explainability",
        methods: [
          "TreeSHAP",
          "Seasonal-Reference SHAP Analysis",
        ],
      },
    ],

    dataSources: [
      "EIA-930 ERCOT Electricity Demand",
      "NOAA Weather Data",
    ],

    evaluation: [
      { label: "MAE", value: "500.34" },
      { label: "RMSE", value: "711.07" },
      { label: "MAPE", value: "0.888%" },
      { label: "R²", value: "0.9954" },
    ],

    keyFinding: {
      label: "Explanation Direction Agreement",
      value: "98.90%",
      comparison:
        "Compared to 48.76% using previous-observation references",
    },

    period: "2016–2025",
  },
];




export const education = {
  university: "American International University-Bangladesh (AIUB)",
  degree: "B.Sc. in Computer Science & Engineering",
  location: "Dhaka, Bangladesh",
  period: "2023 - Present",
  cgpa: "3.84",
  cgpaScale: "4.00",
  achievement: "Dean's List",
  achievementDetail: "Fall 2024-25 · Fall 2025-26",
  coursework: [
    "Next.js",
    "NestJS",
    "ASP.NET Core MVC",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Software Architecture & Design Pattern",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision & Pattern Recognition",
  ],
};
