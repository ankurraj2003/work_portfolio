"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  {
    label: "GitHub",
    // TODO: Replace with your GitHub URL
    href: "https://github.com",
    icon: SiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    // TODO: Replace with your LinkedIn URL
    href: "https://linkedin.com",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
    external: true,
  },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 shadow-sm backdrop-blur-xl border-b border-black/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Signature / Logo Image */}
            <motion.a
              href="#hero"
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              {/* TODO: Replace /signature.png with your actual signature image */}
              <Image
                src="/signature.png"
                alt="Signature"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-black/60 hover:text-black rounded-full hover:bg-black/[0.04] transition-all duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <IconComp size={15} />
                    {link.label}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black/60 hover:text-black p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white/90 backdrop-blur-xl border-l border-black/5 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-black/5">
                <Image
                  src="/signature.png"
                  alt="Signature"
                  width={100}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-black/40 hover:text-black p-1"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link, i) => {
                  const IconComp = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-black/60 hover:text-black hover:bg-black/[0.03] transition-all"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <IconComp size={16} />
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
