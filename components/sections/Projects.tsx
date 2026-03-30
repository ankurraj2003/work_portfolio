'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useTextReveal } from '@/hooks/useTextReveal'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'

function ProjectImageCarousel({ images }: { images: string[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface group">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[active]}
            alt="Project screenshot"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === active ? 'bg-accent w-4' : 'bg-white/30'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="section-divider grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 group"
    >
      {/* Image carousel — left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-5"
      >
        <ProjectImageCarousel images={project.images} />
      </motion.div>

      {/* Info — right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-7 flex flex-col justify-center"
      >
        {/* Project number */}
        <span className="font-mono text-xs text-text-muted tracking-[0.3em] mb-3">
          {project.number}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-text-primary tracking-tight leading-tight mb-3"
          style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-base leading-relaxed max-w-lg mb-6">
          {project.description}
        </p>

        {/* Tech stack icons */}
        <div className="flex items-center flex-wrap gap-3 mb-8">
          {project.techStack.map(({ Icon, name, color }) => (
            <span key={name} title={name} className="transition-transform duration-200 hover:scale-110">
              <Icon size={24} style={{ color }} />
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 px-5 py-2.5 text-sm border border-[rgba(255,255,255,0.12)] rounded-full text-text-secondary hover:border-white/30 hover:bg-white/5 hover:text-text-primary transition-all duration-200"
          >
            <FaGithub size={14} />
            View Code
          </motion.a>

          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-black rounded-full hover:bg-accent-hover transition-all duration-200"
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  useTextReveal({ selector: '.projects-reveal' })

  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-mono text-text-muted tracking-[0.3em] uppercase border-b border-[rgba(255,255,255,0.08)] pb-1 mb-6"
        >
          Projects
        </motion.span>

        <h2 className="projects-reveal font-display font-bold text-text-primary tracking-editorial mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
          Things I&apos;ve Built
        </h2>

        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
