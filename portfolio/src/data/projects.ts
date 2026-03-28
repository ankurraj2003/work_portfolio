export interface Project {
  title: string;
  description: string;
  images: string[];
  techStack: {
    name: string;
    icon: string; // react-icons identifier
    color: string;
  }[];
  githubUrl: string;
  liveUrl: string;
}

// TODO: Replace with your actual projects
export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing via Stripe, and an admin dashboard for analytics and order management.",
    images: [
      "https://picsum.photos/seed/ecom1/800/450",
      "https://picsum.photos/seed/ecom2/800/450",
      "https://picsum.photos/seed/ecom3/800/450",
    ],
    techStack: [
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "Stripe", icon: "SiStripe", color: "#635BFF" },
    ],
    githubUrl: "https://github.com", // TODO: Replace with actual URL
    liveUrl: "https://example.com", // TODO: Replace with actual URL
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by GPT-4o with context-aware conversations, file uploads, and collaborative rooms with real-time WebSocket communication.",
    images: [
      "https://picsum.photos/seed/chat1/800/450",
      "https://picsum.photos/seed/chat2/800/450",
      "https://picsum.photos/seed/chat3/800/450",
    ],
    techStack: [
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Python", icon: "SiPython", color: "#3776AB" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    ],
    githubUrl: "https://github.com", // TODO: Replace with actual URL
    liveUrl: "https://example.com", // TODO: Replace with actual URL
  },
  {
    title: "DevOps Dashboard",
    description:
      "A comprehensive DevOps monitoring dashboard with CI/CD pipeline visualization, server health metrics, and automated incident alerting with Slack integration.",
    images: [
      "https://picsum.photos/seed/devops1/800/450",
      "https://picsum.photos/seed/devops2/800/450",
      "https://picsum.photos/seed/devops3/800/450",
    ],
    techStack: [
      { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
      { name: "Go", icon: "SiGo", color: "#00ADD8" },
      { name: "Redis", icon: "SiRedis", color: "#DC382D" },
      { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
      { name: "Grafana", icon: "SiGrafana", color: "#F46800" },
    ],
    githubUrl: "https://github.com", // TODO: Replace with actual URL
    liveUrl: "https://example.com", // TODO: Replace with actual URL
  },
  {
    title: "Social Media Analytics",
    description:
      "A social media analytics tool that aggregates data from multiple platforms, provides engagement insights, trend analysis, and generates automated reports.",
    images: [
      "https://picsum.photos/seed/social1/800/450",
      "https://picsum.photos/seed/social2/800/450",
      "https://picsum.photos/seed/social3/800/450",
    ],
    techStack: [
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: "FastAPI", icon: "SiFastapi", color: "#009688" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "AWS", icon: "FaAws", color: "#FF9900" },
    ],
    githubUrl: "https://github.com", // TODO: Replace with actual URL
    liveUrl: "https://example.com", // TODO: Replace with actual URL
  },
];
