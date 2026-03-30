'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only activate on devices with a precise pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setIsVisible(true)

    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0
    let ringX = 0, ringY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnterInteractive = () => setIsHovering(true)
    const onMouseLeaveInteractive = () => setIsHovering(false)

    // Add listeners to all interactive elements
    const interactiveEls = document.querySelectorAll(
      'a, button, [data-cursor-grow]'
    )
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    const animate = () => {
      // Inner dot — fast follow (lerp factor 0.18)
      dotX += (mouseX - dotX) * 0.18
      dotY += (mouseY - dotY) * 0.18

      // Outer ring — slow follow (lerp factor 0.08)
      ringX += (mouseX - ringX) * 0.08
      ringY += (mouseY - ringY) * 0.08

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${dotX - 4}px, ${dotY - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX - 20}px, ${ringY - 20}px)`
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-accent transition-transform duration-75"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-white/30 transition-all duration-300 ${isHovering ? 'w-12 h-12 border-accent/60 scale-125' : 'w-10 h-10'
          }`}
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
