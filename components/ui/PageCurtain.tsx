'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function PageCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!curtainRef.current) return

    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setDone(true)
      }
    })

    tl.to(nameRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.2,
    })
      .to(nameRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        delay: 0.3,
      })
      .to(curtainRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
      }, '-=0.1')

    console.log(
      '%c Ankur Raj ',
      'background:#C8FF00;color:#000;font-weight:bold;font-size:16px;padding:4px 12px;border-radius:4px'
    )
    console.log(
      '%c Portfolio — Next.js 14 · TypeScript · Tailwind · GSAP · Lenis ',
      'color:#C8FF00;font-size:11px'
    )
  }, [])

  if (done) return null

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[99999] bg-background flex items-center justify-center"
      style={{ willChange: 'transform' }}
    >
      <span
        ref={nameRef}
        className="font-display text-2xl tracking-widest text-text-primary opacity-0 translate-y-4"
        style={{ letterSpacing: '0.3em' }}
      >
        Ankur
        <span className="text-accent">Raj</span>
      </span>
    </div>
  )
}
