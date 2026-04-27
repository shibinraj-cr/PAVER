'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"
        style={{ width: `${pct}%`, transition: 'width 0.1s linear' }}
      />
    </div>
  )
}
