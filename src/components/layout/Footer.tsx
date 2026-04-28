import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { products } from '@/data/products'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      {/* ── Main footer ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div>
          {/* Logo on white pill so it reads clearly on dark footer */}
          <div className="inline-block bg-white rounded-lg px-3 py-2 mb-3">
            <Image
              src="/images/logo-red.png"
              alt="Paver Chemco"
              width={140}
              height={140}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="text-brand-gold text-xs uppercase tracking-widest mb-4">by Furner RefraCeram</div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Premium construction chemical solutions engineered for tropical monsoon climates. Trusted by builders, contractors, and homeowners.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: siteConfig.socialMedia.facebook },
              { icon: Instagram, href: siteConfig.socialMedia.instagram },
              { icon: Youtube, href: siteConfig.socialMedia.youtube },
              { icon: Linkedin, href: siteConfig.socialMedia.linkedin },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-condensed font-700 text-base uppercase tracking-widest text-white mb-4">Products</h3>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-gray-400 text-sm hover:text-brand-gold transition-colors"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-condensed font-700 text-base uppercase tracking-widest text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: 'Coverage Calculator', href: '/tools' },
              { label: 'Product Selector', href: '/tools#selector' },
              { label: 'Blog & Guides', href: '/blog' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Solutions by Application', href: '/solutions' },
              { label: 'About Paver Chemco', href: '/about' },
              { label: 'Contact & Dealers', href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-condensed font-700 text-base uppercase tracking-widest text-white mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex gap-3">
              <MapPin size={15} className="text-brand-gold mt-0.5 shrink-0" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex gap-3">
              <Phone size={15} className="text-brand-gold mt-0.5 shrink-0" />
              <div>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-gold block transition-colors">{siteConfig.phone}</a>
                <a href={`tel:${siteConfig.phone2}`} className="hover:text-brand-gold block transition-colors">{siteConfig.phone2}</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={15} className="text-brand-gold mt-0.5 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-gold transition-colors">{siteConfig.email}</a>
            </div>
          </div>

          {/* Climate zones */}
          <div className="mt-5">
            <div className="text-xs font-700 font-condensed uppercase tracking-widest text-white mb-2">Suited For</div>
            <div className="flex flex-wrap gap-1.5">
              {['Monsoon Climates', 'High Humidity', 'Coastal Zones', 'Extreme Heat', 'Tropical Regions'].map((zone) => (
                <span key={zone} className="text-xs px-2 py-0.5 bg-white/10 rounded text-gray-300">{zone}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Gold divider ─────────────────────────────────────────────── */}
      <div className="h-0.5 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        <span>© {year} {siteConfig.company} · CIN: {siteConfig.cin}</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
          <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
