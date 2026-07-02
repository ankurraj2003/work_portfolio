export interface Experience {
  company: string
  role: string
  dateRange: string
  location?: string
  logo?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'CoinDCX',
    role: 'Intern - Engineering',
    dateRange: 'May 2026 — Present',
    location: 'Bengaluru, India',
    logo: '/coindcx.png',
    bullets: [
      'To be Updated.....'
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    dateRange: 'Nov 2025 — Present',
    location: 'India',
    logo: '/freelance.png',
    bullets: [
      'Delivered 5+ production-grade applications, including e-commerce platforms and business portfolios, by managing the full software development lifecycle from requirements gathering to deployment. Utilizing a technical stack of React.js, Next.js, Node.js, Express.js, and MongoDB, I consistently provided high-quality, self-managed solutions that fostered client trust, resulting in repeat contracts and professional referrals.',

    ],
  },
  {
    company: 'Bluestock',
    role: 'SDE Intern',
    dateRange: 'Aug 2025 — Oct 2025',
    location: 'Remote',
    logo: '/bluestock.webp',
    bullets: [
      'Engineered high-throughput REST APIs for the StockTicker pipeline using Node.js, Express.js, and PostgreSQL, successfully processing over 500 requests per minute within an agile environment.By implementing composite indexing, query optimization, PgBouncer connection pooling, and strategic caching, I reduced latency by 62% (from 120ms to 45ms) to handle high-load scenarios efficiently. Additionally, I streamlined cross-functional integration and accelerated UI testing by authoring comprehensive Swagger specifications and Postman collections.'
    ],
  },
  {
    company: 'TEDx IIITS',
    role: 'Software Developer',
    dateRange: 'September 2024 — Feb 2025',
    location: 'Sri City, Andhra Pradesh',
    logo: '/tedx.png',
    bullets: [
      'Developed a high-traffic, responsive website for over 500 attendees using React.js and Tailwind CSS, achieving a 3-second reduction in load time and significantly improved Lighthouse metrics. By implementing lazy-loading for heavy assets and server-side compression, I reduced the average page payload, which successfully lowered the bounce rate from 45% to 31% during peak event traffic. Furthermore, I leveraged Chrome DevTools to perform deep-dive analysis of API latency, identifying and resolving bottlenecks to ensure a seamless user experience across all tested devices.'
    ],
  },
]
