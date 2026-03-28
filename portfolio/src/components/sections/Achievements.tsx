"use client";

import { motion } from "framer-motion";
import { Star, Award, Trophy, Medal } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { achievements, type Achievement } from "@/data/achievements";

const iconMap = {
  star: Star,
  award: Award,
  trophy: Trophy,
  medal: Medal,
};

const iconColorMap = {
  star: "text-amber-500",
  award: "text-sky-500",
  trophy: "text-amber-600",
  medal: "text-violet-500",
};

const iconBgMap = {
  star: "bg-amber-50",
  award: "bg-sky-50",
  trophy: "bg-amber-50",
  medal: "bg-violet-50",
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Achievements</h2>
          <div className="section-subtitle-line mx-auto" />
        </motion.div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item: Achievement, index: number) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <GlassCard className="p-5 h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${iconBgMap[item.icon]}`}
                    >
                      <Icon
                        size={18}
                        className={iconColorMap[item.icon]}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-black leading-snug">
                          {item.title}
                        </h3>
                        {item.date && (
                          <span className="flex-shrink-0 glass-pill px-2.5 py-0.5 text-[10px] text-black/35">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <p className="text-black/40 text-xs mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
