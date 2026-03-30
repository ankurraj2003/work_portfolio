'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personal } from '@/data/personal'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      start: 80,
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    })
  }, [])

  const navLinks = [
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
  ]

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Left — Logotype */}
          <Link
            href="#hero"
            className="group flex items-center"
          >
            <Image
              src="/signature.webp"
              alt={`${personal.firstName} ${personal.lastName}`}
              width={140}
              height={45}
              className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              priority
            />
          </Link>

          {/* Center — Nav links (desktop only) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-expo-out origin-left" />
              </Link>
            ))}
          </div>

          {/* Right — Action buttons */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-text-secondary border border-[rgba(255,255,255,0.08)] hover:border-white/30 hover:bg-white/5 hover:text-text-primary transition-all duration-200"
            >
              <FaGithub size={14} />
              GitHub
            </motion.a>

            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-text-secondary border border-[rgba(255,255,255,0.08)] hover:border-white/30 hover:bg-white/5 hover:text-text-primary transition-all duration-200"
            >
              <FaLinkedin size={14} />
              LinkedIn
            </motion.a>

            <motion.a
              href={personal.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-accent text-black hover:bg-accent-hover transition-all duration-200"
            >
              <Globe size={14} />
              Personal Website
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-background flex flex-col p-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end text-text-primary mb-12"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-4xl font-bold text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex items-center gap-6 pb-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-[#0077b5] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href={personal.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-[#00d1ff] transition-colors duration-200"
                aria-label="Website"
              >
                <Globe size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
