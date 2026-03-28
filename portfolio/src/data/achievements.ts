export interface Achievement {
  title: string;
  description: string;
  date?: string;
  icon: "star" | "award" | "trophy" | "medal";
}

// TODO: Replace with your actual achievements
export const achievements: Achievement[] = [
  {
    title: "AWS Certified Solutions Architect",
    description:
      "Achieved the AWS Solutions Architect Associate certification, demonstrating proficiency in designing distributed systems on AWS.",
    date: "2024",
    icon: "award",
  },
  {
    title: "Hackathon Winner — TechFest 2023",
    description:
      "Won first place among 200+ teams by building an AI-powered accessibility tool for visually impaired users in 48 hours.",
    date: "2023",
    icon: "trophy",
  },
  {
    title: "Open Source Contributor — React Ecosystem",
    description:
      "Contributed 50+ pull requests to popular open-source React libraries, including bug fixes and feature enhancements.",
    date: "2022 – Present",
    icon: "star",
  },
  {
    title: "Dean's List — Computer Science",
    description:
      "Recognized on the Dean's List for academic excellence across 6 consecutive semesters during undergraduate studies.",
    date: "2019 – 2023",
    icon: "medal",
  },
  {
    title: "Published Technical Blog — 10K+ Readers",
    description:
      "Authored a series of technical blog posts on system design and web performance optimization, reaching over 10,000 monthly readers.",
    date: "2023",
    icon: "star",
  },
];
