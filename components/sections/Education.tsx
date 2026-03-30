'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTextReveal } from '@/hooks/useTextReveal'
import { education } from '@/data/education'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
  useTextReveal({ selector: '.education-reveal' })

  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-mono text-text-muted tracking-[0.3em] uppercase border-b border-[rgba(255,255,255,0.08)] pb-1 mb-6"
        >
          Education
        </motion.span>

        {/* Section heading */}
        <h2 className="education-reveal font-display font-bold text-text-primary tracking-editorial mb-12"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
          Where I Studied
        </h2>

        {/* Education list */}
        <div className="flex flex-col">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="section-divider flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 sm:items-center group"
            >
              {/* Icon */}
              <div className="sm:col-span-2 flex justify-start">
                <div className="w-20 h-20 overflow-hidden rounded-full border border-[rgba(0, 0, 0, 1)] bg-white/5 flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                  <Image src={item.logo} width={100} height={100} alt="Logo" className="object-contain" />
                </div>
              </div>

              {/* Institution + Degree */}
              <div className="sm:col-span-8">
                <p className="text-text-primary text-xl font-semibold">
                  {item.institution}
                </p>
                <p className="text-text-secondary text-base mt-1">{item.degree}</p>
              </div>

              {/* Date range */}
              <div className="sm:col-span-2 sm:text-right">
                <span className="text-text-muted text-xs font-mono">
                  {item.dateRange}
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
