import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiPython,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiGithub,
  SiVercel,
  SiGooglegemini,
  SiPhonepe,
  SiHuggingface,
  SiMapbox,
  SiGooglemaps
} from 'react-icons/si'
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaAws, FaEdge } from "react-icons/fa";
import type { IconType } from 'react-icons'

export interface TechItem {
  Icon: IconType
  name: string
  color: string
}

export type ProjectTag = 'Personal' | 'Freelance' | 'Professional'

export interface Project {
  id: number
  number: string
  title: string
  description: string
  images: string[]
  techStack: TechItem[]
  githubUrl?: string
  liveUrl: string
  tag: ProjectTag
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    title: 'Raj & Sons Real Estate Developers',
    description: 'Portfolio and booking website for one of Ranchi leading developers, Raj & Sons Real Estate Developers.',
    images: [
      '/projects/rajnsons/1.avif',
      '/projects/rajnsons/2.avif',
      '/projects/rajnsons/3.avif',
      '/projects/rajnsons/4.avif',
    ],
    techStack: [
      { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: SiGooglemaps, name: 'Google Maps', color: '#51d115ff' },
    ],
    liveUrl: 'https://raj-and-sons-developers.vercel.app',
    tag: 'Freelance',
  },
  {
    id: 2,
    number: '02',
    title: 'Zeal.fx',
    description: 'Zeal.fx is a full-featured creative portfolio platform designed to showcase work in multiple categories.',
    images: [
      '/projects/zeal-fx/1.avif',
      '/projects/zeal-fx/2.avif',
      '/projects/zeal-fx/3.avif',
    ],
    techStack: [
      { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: TbBrandFramerMotion, name: 'Framer Motion', color: '#ffffff' },
    ],
    liveUrl: 'https://zealfx.vercel.app',
    tag: 'Freelance',
  },
  {
    id: 3,
    number: '03',
    title: 'Irshika Properties',
    description: 'Discover the pinnacle of excellence in land ownership with Irshika Properties.',
    images: [
      '/projects/irshika/i1.avif',
      '/projects/irshika/i2.avif',
      '/projects/irshika/i3.avif',
      '/projects/irshika/i4.avif',
    ],
    techStack: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: SiMapbox, name: 'Mapbox', color: '#ffffff' },
    ],
    liveUrl: 'https://www.irshikaproperties.in',
    tag: 'Freelance',
  },
  {
    id: 4,
    number: '04',
    title: 'Qeazzy',
    description: 'Qeazzy — Instant home services platform in Ranchi. Book verified electricians, plumbers & more via WhatsApp.',
    images: [
      '/projects/qeazzy/1.avif',
      '/projects/qeazzy/2.avif',
      '/projects/qeazzy/3.avif',

    ],
    techStack: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
    ],
    liveUrl: 'https://www.qeazzy.com',
    tag: 'Freelance',
  },
  {
    id: 5,
    number: '05',
    title: 'Echelon Watches',
    description: 'Echelon Watches is a luxury watch e-commerce platform offering a seamless shopping experience with an intuitive UI, powerful sorting features and an admin panel for easy management.',
    images: [
      '/projects/echelon-watches/1.avif',
      '/projects/echelon-watches/2.avif',
      '/projects/echelon-watches/3.avif',
    ],
    techStack: [
      { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
      { Icon: SiExpress, name: 'Express', color: '#ffffff' },
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    ],
    liveUrl: 'https://echelonwatches.vercel.app',
    tag: 'Freelance',
  },

  {
    id: 6,
    number: '06',
    title: 'TEDxIIITS',
    description: 'Web portal designed to showcase the speaker lineup, events and information for the official TEDx IIITS.',
    images: [
      '/projects/tedxiiits/1.avif',
      '/projects/tedxiiits/2.avif',
      '/projects/tedxiiits/3.avif',
    ],
    techStack: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { Icon: SiPhonepe, name: 'PhonePe', color: '#6666FF' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    ],
    liveUrl: 'https://tedxiiitsricity.com',
    tag: 'Freelance',
  },
  {
    id: 7,
    number: '07',
    title: 'Pinnacle AI',
    description: 'Pinnacle AI is a multi-agent platform designed for Private Equity firms to monitor, analyze and benchmark P&L performance across a diverse portfolio.',
    images: [
      '/projects/pinnacle/1.avif',
      '/projects/pinnacle/2.avif',
    ],
    techStack: [
      { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: SiGithub, name: 'GitHub', color: '#ffffff' },
      { Icon: SiVercel, name: 'Vercel', color: '#ffffff' },
    ],
    githubUrl: 'https://github.com/ankurraj2003/PinnacleAI',
    liveUrl: 'https://pinnacle-ai.duckdns.org',
    tag: 'Personal',
  },
  {
    id: 8,
    number: '08',
    title: 'GitSchema',
    description: 'Paste any public GitHub repository URL and instantly visualize its architecture, file dependencies, and API flow in an interactive map.',
    images: [
      '/projects/gitschema/1.avif',
      '/projects/gitschema/2.avif',
      '/projects/gitschema/3.avif',
    ],
    techStack: [
      { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: SiGithub, name: 'GitHub', color: '#ffffff' },
      { Icon: SiVercel, name: 'Vercel', color: '#ffffff' },
    ],
    githubUrl: 'https://github.com/ankurraj2003/GitSchema',
    liveUrl: 'https://gitschema.vercel.app',
    tag: 'Personal',
  },

  {
    id: 9,
    number: '09',
    title: 'Kira.AI',
    description: 'Kira.AI is a futuristic AI-powered chat application featuring advanced voice interaction, real-time 3D visualizations and seamless integration with the Google Gemini API.',
    images: [
      '/projects/kira-ai/1.avif',
      '/projects/kira-ai/2.avif',
    ],
    techStack: [
      { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiGooglegemini, name: 'Google Gemini', color: '#ffffff' },
      { Icon: FaAws, name: 'AWS', color: '#FF9900' },
    ],
    githubUrl: 'https://github.com/ankurraj2003/Kira.AI',
    liveUrl: 'https://main.d3tkqnktkfzodv.amplifyapp.com',
    tag: 'Personal',
  },
  {
    id: 10,
    number: '10',
    title: 'The Empathy Engine',
    description: 'A web application that takes in arbitrary text, analyzes the underlying emotional sentiment in real-time and generates emotionally resonant Text-to-Speech (TTS) audio.',
    images: [
      '/projects/empathy-engine/1.avif',
      '/projects/empathy-engine/2.avif',
    ],
    techStack: [
      { Icon: SiPython, name: 'Python', color: '#3178C6' },
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiHuggingface, name: 'Hugging Face', color: '#ffffff' },
      { Icon: FaEdge, name: 'Edge', color: '#0078D4' },

    ],
    githubUrl: 'https://github.com/ankurraj2003/The-Empathy-Engine',
    liveUrl: 'https://the-empathy-engine-wine.vercel.app',
    tag: 'Personal',
  },
  {
    id: 11,
    number: '11',
    title: 'InfoIndia',
    description: 'Explore historic state-wise statistics of India including literacy rate, sex ratio, population and population density. Get accurate, in-depth insights on India\'s demographic evolution from 1981 to 2025.',
    images: [
      '/projects/infoindia/1.avif',
      '/projects/infoindia/2.avif',
      '/projects/infoindia/3.avif',
      '/projects/infoindia/4.avif',

    ],
    techStack: [
      { Icon: SiReact, name: 'React', color: '#61DAFB' },
      { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { Icon: SiMapbox, name: 'Mapbox', color: '#ffffff' },
    ],
    githubUrl: 'https://github.com/ankurraj2003/InfoIndia',
    liveUrl: 'https://infoindia.vercel.app',
    tag: 'Personal',
  }
]
