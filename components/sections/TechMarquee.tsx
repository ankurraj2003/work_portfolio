'use client'

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiTailwindcss, SiPostgresql, SiMongodb, SiDocker,
  SiPython, SiGit, SiVercel, SiJavascript, SiExpress, SiOpenai, SiSupabase
} from 'react-icons/si'
import { FaAws } from "react-icons/fa";

const techs = [
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { Icon: SiJavascript, name: 'Javascript', color: '#FFCA28' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { Icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { Icon: SiExpress, name: 'Express', color: '#06B6D4' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: SiSupabase, name: 'Supabase', color: '#b1e25cff' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiPython, name: 'Python', color: '#3776AB' },
  { Icon: SiGit, name: 'Git', color: '#F05032' },
  { Icon: SiVercel, name: 'Vercel', color: '#ffffff' },
  { Icon: FaAws, name: 'Amazon', color: '#FFCA28' },
  { Icon: SiOpenai, name: 'AI', color: '#ffffff' },

]

// Helper to shift and double the array for seamless loops
const getRow = (offset: number) => {
  const shifted = [...techs.slice(offset), ...techs.slice(0, offset)]
  return [...shifted, ...shifted] // Duplicate for seamless looping
}

const rows = [
  getRow(0),
  getRow(5),
  getRow(10),
]

export default function TechMarquee() {
  return (
    <div className="py-20 border-y border-[rgba(255,255,255,0.08)] overflow-hidden">
      <p className="text-center text-xs font-mono text-text-muted tracking-[0.3em] uppercase mb-10">
        Technologies I Work With
      </p>
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {rows.map((rowItems, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-0 shrink-0 animate-marquee"
            style={{
              animationDuration: `${9 + rowIndex * 4}s`,
              animationDirection: 'normal'
            }}
          >
            {rowItems.map(({ Icon, name, color }, i) => (
              <div
                key={`${rowIndex}-${i}`}
                className="flex items-center gap-3 px-8 border-r border-[rgba(255,255,255,0.06)] shrink-0 group"
              >
                <Icon
                  size={22}
                  style={{ color }}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-text-muted text-sm font-mono whitespace-nowrap
                                 group-hover:text-text-secondary transition-colors duration-200">
                  {name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
