"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const nameWords = ["Arun", "Kumar"]; // TODO: Replace with your name

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.04,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const allChars: { char: string; wordIdx: number }[] = [];
  nameWords.forEach((word, wordIdx) => {
    for (const char of word) {
      allChars.push({ char, wordIdx });
    }
    if (wordIdx < nameWords.length - 1) {
      allChars.push({ char: " ", wordIdx });
    }
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      {/* Subtle warm gradient blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none">
        <div
          className="w-full h-full rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(220, 215, 200, 0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 glass-pill px-4 py-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-black/50">
            {/* TODO: Customize availability message */}
            Available for opportunities
          </span>
        </motion.div>

        {/* Name with letter-by-letter animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight font-serif">
          {allChars.map((item, i) =>
            item.char === " " ? (
              <span key={`space-${i}`}>&nbsp;</span>
            ) : (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className={item.wordIdx === 1 ? "text-black/40" : "text-black"}
                style={{ display: "inline-block" }}
              >
                {item.char}
              </motion.span>
            )
          )}
        </h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-black/50 mb-4 font-normal"
        >
          {/* TODO: Replace with your tagline */}
          Full Stack Developer · Building things for the web
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-black/35 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {/* TODO: Replace with your bio */}
          Passionate about crafting elegant, performant web experiences. I
          specialize in React, Node.js, and cloud architectures — turning
          complex problems into simple, beautiful interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#projects" variant="filled">
            View Projects
          </Button>
          <Button href="/resume.pdf" variant="glass" target="_blank">
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.a
          href="#education"
          className="flex flex-col items-center gap-1 text-black/20 hover:text-black/40 transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Scroll
          </span>
          <ChevronDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
