"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-14 px-4 border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com" // TODO: Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-black/[0.04] flex items-center justify-center text-black/30 hover:text-black hover:bg-black/[0.08] transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGithub size={16} />
            </motion.a>
            <motion.a
              href="https://linkedin.com" // TODO: Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-black/[0.04] flex items-center justify-center text-black/30 hover:text-black hover:bg-black/[0.08] transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={16} />
            </motion.a>
          </div>

          {/* Credit */}
          <p className="text-black/25 text-sm text-center">
            {/* TODO: Replace with your name */}
            Designed & Built by{" "}
            <span className="text-black/40">Arun Kumar</span>
          </p>

          {/* Back to Top */}
          <motion.a
            href="#hero"
            className="flex items-center gap-1.5 text-black/20 hover:text-black/50 transition-colors text-[11px] tracking-[0.15em] uppercase font-medium"
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
