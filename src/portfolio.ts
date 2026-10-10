export const profile = {
  name: "Abrar Ul Karim",
  initials: "AK",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "Software Engineer", "ML Researcher"], // ← নতুন
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
  "I enjoy building software from the ground up, from designing how a system should work to creating a final product that feels intuitive and useful to the user.",
  "I'm a Computer Science & Engineering undergraduate at American International University-Bangladesh with a strong interest in full-stack development, software architecture, and machine learning. My experience includes developing web applications and backend systems, as well as exploring machine learning problems through research and experimentation.",
  "Currently, I'm focused on strengthening my software development skills while building a solid foundation in software engineering, design patterns, and intelligent systems.",
];

// ⚠️ নিজের certification দিয়ে বদলাও (খালি রাখলে "coming soon" দেখাবে)
export const certifications: { name: string; issuer: string; year: string }[] = [];



export type Skill = {
  name: string;
  devicon?: string; // Devicon এর logo নাম
  invert?: boolean; // কালো logo dark background এ সাদা করার জন্য
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
      "A web-based internship management platform for managing companies, internships, applications, interviews, and users.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    live: "#",
    github: "#",
  },
  {
    title: "Telecommunication Management System",
    subtitle: "",
    description:
      "A web-based system designed to manage telecommunication-related services, users, and operational information.",
    stack: ["C#","Windows form application",'Guna UI','MetroFramework','Microsoft SQL Server'],
    live: "#",
    github: "#",
  },
];



export const research = {
  status: "Accepted",
  venue: "IEEE RAAICON 2025",
  title: "Optimizing Surgery Room Scheduling with Comparative Metaheuristic Algorithms",
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
  ] as { label: string; icon: "time" | "memory" | "cache" | "efficiency" }[],
  doi: "10.1109/RAAICON69033.2025.11502411",
};



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
