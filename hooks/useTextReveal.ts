'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

interface UseTextRevealOptions {
  selector?: string
  delay?: number
  stagger?: number
  start?: string
}

export function useTextReveal({
  selector = '.gsap-reveal',
  delay = 0,
  stagger = 0.1,
  start = 'top 85%',
}: UseTextRevealOptions = {}) {

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const elements = gsap.utils.toArray<HTMLElement>(selector)
    if (!elements.length) return

    elements.forEach((el) => {
      const split = new SplitText(el, { type: 'lines' })

      // Wrap each line in overflow:hidden div so text "rises up"
      split.lines.forEach((line) => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        wrapper.style.display = 'block'
        line.parentNode?.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      gsap.fromTo(
        split.lines,
        { y: '105%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.0,
          ease: 'power4.out',
          stagger,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [selector, delay, stagger, start])
}
