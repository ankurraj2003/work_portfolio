export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  logo?: string;
}

// TODO: Replace with your actual experience
export const experience: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Full Stack Developer",
    dateRange: "Jan 2024 – Present",
    location: "San Francisco, CA",
    bullets: [
      "Architected and deployed a microservices-based platform serving 2M+ monthly active users with 99.9% uptime",
      "Led a team of 5 engineers to rebuild the core product using Next.js 14, reducing page load times by 60%",
      "Implemented real-time data pipelines using Kafka and Redis, processing 10K+ events per second",
    ],
  },
  {
    company: "Digital Solutions Ltd.",
    role: "Full Stack Developer",
    dateRange: "Jun 2022 – Dec 2023",
    location: "New York, NY",
    bullets: [
      "Built RESTful APIs and GraphQL endpoints serving 500K+ daily requests with sub-100ms response times",
      "Designed and implemented a component library used across 12 internal products, improving dev velocity by 40%",
      "Migrated legacy monolith to containerized microservices on AWS ECS, reducing infrastructure costs by 35%",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Frontend Developer",
    dateRange: "Aug 2021 – May 2022",
    location: "Austin, TX (Remote)",
    bullets: [
      "Developed the customer-facing SPA using React and TypeScript, achieving a Lighthouse score of 95+",
      "Integrated Stripe payments and subscription management, increasing conversion rate by 25%",
      "Collaborated with UX designers to implement responsive, accessible interfaces following WCAG 2.1 guidelines",
    ],
  },
  {
    company: "CodeCraft Agency",
    role: "Junior Developer Intern",
    dateRange: "Jan 2021 – Jul 2021",
    location: "Remote",
    bullets: [
      "Contributed to 8+ client projects using React, Node.js, and PostgreSQL",
      "Developed automated testing suites that increased code coverage from 45% to 85%",
      "Participated in daily standups, code reviews, and sprint planning in an Agile environment",
    ],
  },
];
