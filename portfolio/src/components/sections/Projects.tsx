"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { projects, type Project } from "@/data/projects";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiGrafana,
  SiVuedotjs,
  SiGo,
  SiFastapi,
  SiStripe,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { type IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiGrafana,
  SiVuedotjs,
  SiGo,
  SiFastapi,
  SiStripe,
  FaAws,
};

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-surface-soft">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Project screenshot"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-black/60 w-5"
                : "bg-black/15 w-1.5 hover:bg-black/25"
            }`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TechIcon({
  tech,
}: {
  tech: { name: string; icon: string; color: string };
}) {
  const Icon = iconMap[tech.icon];
  if (!Icon) return null;

  return (
    <div className="group relative">
      <div className="p-1.5 rounded-lg hover:bg-black/[0.04] transition-colors">
        <Icon size={18} style={{ color: tech.color }} />
      </div>
      {/* Tooltip */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black text-white rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {tech.name}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="overflow-hidden flex flex-col" hover={true}>
      <ImageCarousel images={project.images} />

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-black mb-2">
          {project.title}
        </h3>
        <p className="text-black/40 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-0.5 mb-5">
          {project.techStack.map((tech, i) => (
            <TechIcon key={i} tech={tech} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm text-black/50 hover:text-black rounded-full border border-black/8 hover:border-black/15 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <SiGithub size={14} />
            Code
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-neutral-800 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={14} />
            Live
          </motion.a>
        </div>
      </div>
    </GlassCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-subtitle-line mx-auto" />
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
