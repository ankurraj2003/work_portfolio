'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTextReveal } from '@/hooks/useTextReveal'
import { experience } from '@/data/experience'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  useTextReveal({ selector: '.experience-reveal' })

  useEffect(() => {
    if (!lineRef.current) return

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          scrub: 1.5,
        },
      }
    )
  }, [])

  return (
    <section id="experience" className="surface-bg py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-mono text-text-muted tracking-[0.3em] uppercase border-b border-[rgba(255,255,255,0.08)] pb-1 mb-6"
        >
          Experience
        </motion.span>

        <h2 className="experience-reveal font-display font-bold text-text-primary tracking-editorial mb-20"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
          Where I&apos;ve Worked
        </h2>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-8">
          {/* Growing vertical line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, #C8FF00, rgba(200,255,0,0.15), transparent)',
            }}
          />

          <div className="flex flex-col gap-16 pl-10 md:pl-16">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Glowing timeline dot */}
                <motion.div
                  className="absolute -left-[44px] md:-left-[60px] top-1.5 w-2 h-2 rounded-full bg-accent"
                  style={{ boxShadow: '0 0 10px rgba(200,255,0,0.7)' }}
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Job header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                  <div className="flex items-center gap-4">
                    {/* Company Logo */}
                    {job.logo && (
                      <div className="w-12 h-12 shrink-0 rounded-full border border-[rgba(255,255,255,0.08)] bg-white/5 overflow-hidden flex items-center justify-center">
                        <Image src={job.logo} alt={`${job.company} logo`} width={48} height={48} className="object-cover" />
                      </div>
                    )}
                    
                    <div>
                      <h3 className="text-text-primary text-xl font-bold">
                        {job.company}
                      </h3>
                      <p className="text-accent text-base font-medium mt-0.5">
                        {job.role}
                      </p>
                      {job.location && (
                        <p className="text-text-muted text-sm mt-0.5 font-mono">{job.location}</p>
                      )}
                    </div>
                  </div>

                  {/* Date badge */}
                  <span className="shrink-0 text-xs font-mono text-text-muted border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1 self-start">
                    {job.dateRange}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-2 mt-4">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-sm bg-accent mt-2.5 shrink-0" />
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
