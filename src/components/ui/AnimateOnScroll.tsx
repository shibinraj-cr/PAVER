'use client'
import { useRef, useEffect, useState, ReactNode } from 'react'

type Variant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fadeIn'

const initialStyles: Record<Variant, string> = {
  fadeUp:    'opacity-0 translate-y-10',
  fadeLeft:  'opacity-0 -translate-x-10',
  fadeRight: 'opacity-0 translate-x-10',
  scaleIn:   'opacity-0 scale-90',
  fadeIn:    'opacity-0',
}

interface Props {
  children: ReactNode
  variant?: Variant
  delay?: number
  className?: string
  once?: boolean
}

export default function AnimateOnScroll({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : initialStyles[variant]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
