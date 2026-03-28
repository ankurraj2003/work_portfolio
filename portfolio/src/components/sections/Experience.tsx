"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Journey</h2>
          <div className="section-subtitle-line mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px timeline-line" />

          <div className="flex flex-col gap-14">
            {experience.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10">
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-black/20 ring-4 ring-background"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: index * 0.4,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`w-full pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-black/[0.04] flex items-center justify-center">
                          <Briefcase size={18} className="text-black/30" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-black">
                            {job.company}
                          </h3>
                          <p className="text-black/50 text-sm">{job.role}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="glass-pill px-3 py-1 text-[11px] text-black/40">
                          {job.dateRange}
                        </span>
                        {job.location && (
                          <span className="text-xs text-black/30">
                            {job.location}
                          </span>
                        )}
                      </div>

                      <ul className="space-y-1.5">
                        {job.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-black/45 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-black/20 mt-1.5 flex-shrink-0 text-[8px]">
                              ●
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
