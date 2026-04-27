'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { navLinks, siteConfig } from '@/data/siteConfig'

const productDropdown = [
  { label: 'C1T — Interior Tile Adhesive', href: '/products/c1t-interior-tile-adhesive' },
  { label: 'C1TE — Exterior Tile Adhesive', href: '/products/c1te-exterior-tile-adhesive' },
  { label: 'Block Jointing Mortar', href: '/products/block-jointing-mortar' },
  { label: 'Tile Grout', href: '/products/tile-grout' },
  { label: 'Epoxy Grout', href: '/products/epoxy-grout' },
  { label: 'WP Membrane', href: '/products/wp-membrane' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* ── Top bar ────────────────────────────────────────────────────── */}
      <div className="bg-brand-dark text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="text-gray-400">
            Distributing across <span className="text-brand-gold font-semibold">Kerala & Tamil Nadu</span>
          </span>
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Phone size={11} />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-gold transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav ────────────────────────────────────────────────────── */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo-red.png"
                alt="Paver Chemco"
                width={120}
                height={120}
                className="h-11 w-auto object-contain"
                priority
              />
              <div className="hidden sm:block">
                <div className="text-[9px] text-brand-mid-gray leading-tight tracking-widest uppercase">
                  Construction Chemicals
                </div>
                <div className="text-[9px] text-brand-mid-gray leading-tight">
                  Kerala &amp; Tamil Nadu
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.label === 'Products') {
                  return (
                    <div key="products" className="relative group">
                      <button
                        className="flex items-center gap-1 px-3 py-2 text-sm font-600 text-brand-dark hover:text-brand-red transition-colors uppercase tracking-wide font-condensed"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                      >
                        Products <ChevronDown size={13} />
                      </button>
                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border-t-2 border-brand-red rounded-b-lg overflow-hidden transition-all ${productsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                      >
                        {productDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-brand-dark hover:bg-red-50 hover:text-brand-red transition-colors border-b border-gray-50 last:border-0"
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="block px-4 py-3 text-xs font-700 font-condensed uppercase tracking-wide text-brand-red bg-red-50 hover:bg-brand-red hover:text-white transition-colors"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link-sweep px-3 py-2 text-sm font-600 text-brand-dark hover:text-brand-red transition-colors uppercase tracking-wide font-condensed"
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm px-4 py-2">
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded text-brand-dark hover:text-brand-red transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-600 font-condensed uppercase tracking-wide text-brand-dark hover:text-brand-red hover:bg-red-50 rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 px-3 py-2 text-brand-dark">
                  <Phone size={14} className="text-brand-red" /> {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
