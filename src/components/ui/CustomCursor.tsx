'use client'
import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const trowelRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    let mouseX = -200, mouseY = -200
    let ringX = -200, ringY = -200
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    const updateHover = (e: MouseEvent) => {
      const target = e.target as Element
      setHovering(!!target.closest('a, button, [role="button"], input, textarea, select, label'))
    }

    const animate = () => {
      if (trowelRef.current) {
        trowelRef.current.style.transform =
          `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      }
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', updateHover)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', updateHover)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
    }
  }, [visible])

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 transition-all duration-200"
        style={{
          width:  hovering ? 52 : 40,
          height: hovering ? 52 : 40,
          borderColor: hovering ? '#E8A020' : 'rgba(192,25,26,0.45)',
          opacity: visible ? 1 : 0,
          transform: 'translate(-200px,-200px)',
        }}
      />

      {/* Trowel image cursor */}
      <div
        ref={trowelRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          opacity: visible ? 1 : 0,
          transform: 'translate(-200px,-200px)',
          transition: 'opacity 0.2s',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cursor-trowel.png"
          alt=""
          width={40}
          height={40}
          style={{
            width: hovering ? 44 : 38,
            height: hovering ? 44 : 38,
            transform: `rotate(-45deg) scale(${clicking ? 0.82 : 1})`,
            transition: 'transform 0.12s ease, width 0.15s ease, height 0.15s ease',
            filter: hovering
              ? 'drop-shadow(0 0 6px rgba(232,160,32,0.8))'
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
          }}
        />
      </div>
    </>
  )
}
