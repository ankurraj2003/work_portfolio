export interface Education {
  institution: string;
  degree: string;
  dateRange: string;
  grade?: string;
}

// TODO: Replace with your actual education
export const education: Education[] = [
  {
    institution: "Anna University",
    degree: "B.E. Computer Science & Engineering",
    dateRange: "2019 – 2023",
    grade: "CGPA: 8.7 / 10",
  },
  {
    institution: "DAV Senior Secondary School",
    degree: "Higher Secondary (XII) — Science Stream",
    dateRange: "2017 – 2019",
    grade: "Percentage: 92%",
  },
];
