'use client'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  alt: string
  code: string
  badge?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { px: 96,  cls: 'w-24 h-24' },
  md: { px: 192, cls: 'w-48 h-48' },
  lg: { px: 320, cls: 'w-72 h-80' },
}

export default function ProductBagImage({ src, alt, code, badge, className = '', size = 'lg' }: Props) {
  const [error, setError] = useState(false)
  const { px, cls } = sizes[size]

  if (error) {
    return (
      <div className={`${cls} bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="font-condensed font-800 text-5xl text-brand-red mb-2">{code}</div>
          {badge && <span className="badge badge-gold text-xs">{badge}</span>}
        </div>
      </div>
    )
  }

  return (
    <div className={`${cls} flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className="w-full h-full object-contain drop-shadow-2xl"
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  )
}
