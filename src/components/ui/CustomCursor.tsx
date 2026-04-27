'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const trowelRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = -200, mouseY = -200
    let ringX = -200, ringY = -200
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const updateHover = (e: MouseEvent) => {
      const target = e.target as Element
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, label')
      setHovering(!!isHoverable)
    }

    const animate = () => {
      // Trowel snaps to mouse instantly
      if (trowelRef.current) {
        trowelRef.current.style.transform =
          `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      }
      // Ring lerps (smooth trail)
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', updateHover)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', updateHover)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
    }
  }, [visible])

  return (
    <>
      {/* Trail ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 transition-all duration-200"
        style={{
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderColor: hovering ? '#E8A020' : 'rgba(192,25,26,0.5)',
          opacity: visible ? 1 : 0,
          transform: 'translate(-200px,-200px)',
        }}
      />

      {/* Trowel cursor */}
      <div
        ref={trowelRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: 'translate(-200px,-200px)',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: `rotate(${clicking ? '30deg' : '0deg'}) scale(${clicking ? 0.85 : 1})`,
            transition: 'transform 0.12s ease',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
          }}
        >
          {/* Trowel blade — kite shape, tip at bottom-right */}
          <path
            d="M4 2 L22 8 L26 26 L8 22 Z"
            fill={hovering ? '#E8A020' : '#C0191A'}
            style={{ transition: 'fill 0.2s' }}
          />
          {/* Blade centre line */}
          <line x1="4" y1="2" x2="26" y2="26" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" />
          {/* Handle */}
          <line x1="4" y1="2" x2="1" y2="1" stroke={hovering ? '#E8A020' : '#C0191A'} strokeWidth="3" strokeLinecap="round" style={{ transition: 'stroke 0.2s' }} />
          {/* Handle grip bands */}
          <circle cx="2.5" cy="1.5" r="2" fill={hovering ? '#E8A020' : '#9A1212'} style={{ transition: 'fill 0.2s' }} />
        </svg>
      </div>
    </>
  )
}
