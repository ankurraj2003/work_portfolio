"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <div className="section-subtitle-line mx-auto" />
        </motion.div>

        {/* Education Cards */}
        <div className="flex flex-col gap-5">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-black/[0.04] flex items-center justify-center">
                      <GraduationCap size={22} className="text-black/40" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1.5">
                      <h3 className="text-base font-semibold text-black">
                        {item.institution}
                      </h3>
                      <span className="inline-flex glass-pill px-3 py-1 text-xs text-black/40 whitespace-nowrap">
                        {item.dateRange}
                      </span>
                    </div>
                    <p className="text-black/50 text-sm mb-1">{item.degree}</p>
                    {item.grade && (
                      <p className="text-black/35 text-sm">{item.grade}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
