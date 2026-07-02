'use client'

import { motion } from 'framer-motion'
import { Award, Star, FileText, Briefcase, ExternalLink } from 'lucide-react'
import { useTextReveal } from '@/hooks/useTextReveal'
import { achievements } from '@/data/achievements'
import type { Achievement } from '@/data/achievements'

const iconMap = {
  award: Award,
  star: Star,
  cert: FileText,
  work: Briefcase,
} as const

export default function Achievements() {
  useTextReveal({ selector: '.achievements-reveal' })

  return (
    <section id="achievements" className="surface-bg py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">

        {/* Left — sticky heading */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-mono text-text-muted tracking-[0.3em] uppercase border-b border-[rgba(255,255,255,0.08)] pb-1 mb-6"
            >
              Achievements
            </motion.span>
            <h2 className="achievements-reveal font-display font-bold text-text-primary tracking-editorial"
              style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}>
              Recognition &<br />Milestones
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mt-6 max-w-xs">
              Awards, certifications, and milestones from my journey as a developer.
            </p>
          </div>
        </div>

        {/* Right — achievement list */}
        <div className="md:col-span-8">
          {achievements.map((item: Achievement, i) => {
            const Icon = iconMap[item.iconType]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="section-divider flex flex-col sm:grid sm:grid-cols-12 gap-4 py-7 group"
              >
                {/* Icon */}
                <div className="sm:col-span-1">
                  <Icon
                    size={18}
                    className="text-accent mt-0.5 transition-transform duration-200 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="sm:col-span-9">
                  <p className="text-text-primary text-base font-semibold group-hover:text-white transition-colors duration-200">
                    {item.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                  {item.link && (
                    <a
                      href='https://ieeexplore.ieee.org/document/11555519'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-accent hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={11} />
                      View Paper
                    </a>
                  )}
                </div>

                {/* Year */}
                <div className="sm:col-span-2 flex items-center sm:justify-end">
                  <span className="font-mono text-xs text-text-muted">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
