import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Phone, Star, ChevronRight, Wrench, BookOpen, HelpCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { products } from '@/data/products'
import { getFeaturedPosts } from '@/data/blog'
import { faqData } from '@/data/faq'
import SchemaOrg from '@/components/ui/SchemaOrg'
import ProductBagImage from '@/components/ui/ProductBagImage'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
}

// ── Structured data for home page ────────────────────────────────────────────
const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.company,
      url: siteConfig.url,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/images/logo.jpg` },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'sales',
        areaServed: ['Kerala', 'Tamil Nadu'],
        availableLanguage: ['English', 'Malayalam', 'Tamil'],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: 'Paver Chemco',
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No: 11/891 Malabar Shopping Mahal, Mele Pattambi',
        addressLocality: 'Pattambi',
        addressRegion: 'Kerala',
        postalCode: '679306',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'State', name: 'Kerala' },
        { '@type': 'State', name: 'Tamil Nadu' },
      ],
    },
  ],
}

const categoryIcons: Record<string, string> = {
  'Tile Adhesive': '🪣',
  'Block Mortar': '🧱',
  'Grout': '🔲',
  'Waterproofing': '💧',
}

const categoryBg: Record<string, string> = {
  'Tile Adhesive': 'bg-red-50 border-red-100',
  'Block Mortar': 'bg-amber-50 border-amber-100',
  'Grout': 'bg-stone-50 border-stone-100',
  'Waterproofing': 'bg-blue-50 border-blue-100',
}

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()
  const topFaqs = faqData[0].questions.slice(0, 4)

  return (
    <>
      <SchemaOrg schema={homeSchema} />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center bg-hero-gradient overflow-hidden">
        {/* Animated diagonal accents */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-red opacity-20 skew-x-[-8deg] origin-top-right animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }} />
        <div className="absolute right-0 top-0 w-1/6 h-full bg-brand-gold opacity-30 skew-x-[-8deg] origin-top-right translate-x-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }} />

        {/* Giant logo watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <Image
            src="/images/logo-transparent.png"
            alt=""
            width={600}
            height={600}
            className="w-[560px] opacity-[0.06] select-none"
            aria-hidden="true"
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { size: 6, top: '15%', left: '8%', delay: '0s',   dur: '4s'  },
            { size: 4, top: '60%', left: '5%', delay: '1s',   dur: '6s'  },
            { size: 8, top: '30%', left: '45%',delay: '2s',   dur: '5s'  },
            { size: 5, top: '75%', left: '35%',delay: '0.5s', dur: '7s'  },
            { size: 3, top: '20%', left: '70%',delay: '1.5s', dur: '4.5s'},
            { size: 7, top: '85%', left: '80%',delay: '3s',   dur: '6.5s'},
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-brand-gold/20"
              style={{
                width: p.size, height: p.size,
                top: p.top, left: p.left,
                animation: `float ${p.dur} ease-in-out ${p.delay} infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy with staggered reveal */}
          <div>
            {/* Prominent logo */}
            <div className="animate-slide-up mb-6" style={{ animationDelay: '0s', animationFillMode: 'both' }}>
              <div className="mb-3">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Paver Chemco"
                  width={840}
                  height={270}
                  className="h-60 w-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px flex-1 bg-brand-gold/30" />
                <span className="text-brand-gold text-xs font-condensed font-700 uppercase tracking-widest">
                  by Furner RefraCeram
                </span>
                <div className="h-px flex-1 bg-brand-gold/30" />
              </div>
            </div>

            {/* Region pill */}
            <div
              className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/30 text-brand-gold-light px-4 py-1.5 rounded-full text-xs font-700 font-condensed uppercase tracking-widest mb-6 animate-slide-up"
              style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
            >
              Kerala &amp; Tamil Nadu
            </div>
            <h1 className="text-white font-condensed font-800 text-5xl md:text-6xl lg:text-7xl leading-none mb-6 overflow-hidden">
              <span className="block animate-slide-up" style={{ animationDelay: '0.25s', animationFillMode: 'both' }}>Superior</span>
              <span className="text-gradient block animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>Construction</span>
              <span className="block animate-slide-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>Chemical Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              Premium tile adhesives, block mortar, grout, and waterproofing products engineered for Kerala&apos;s monsoon climate and Tamil Nadu&apos;s diverse conditions.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.85s', animationFillMode: 'both' }}>
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/tools" className="btn-outline-white">
                Coverage Calculator
              </Link>
            </div>
            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
              {[
                { value: '6+', label: 'Premium Products' },
                { value: 'ISO', label: 'Quality Assured' },
                { value: '2',  label: 'States Served' },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <div className="text-brand-gold font-condensed font-800 text-2xl">{b.value}</div>
                  <div className="text-gray-400 text-xs">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: all 6 products — staggered float-in */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {products.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="card overflow-hidden group animate-slide-right"
                  style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both' }}
                >
                  {/* Bag image */}
                  <div className="bg-brand-dark h-32 flex items-center justify-center relative overflow-hidden">
                    <ProductBagImage
                      src={p.image}
                      alt={p.name}
                      code={p.code}
                      badge={p.badge}
                      size="sm"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="badge badge-gold text-[10px]">{p.code}</span>
                    </div>
                    {/* Hover shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Info */}
                  <div className="p-3 flex items-start justify-between gap-2">
                    <div>
                      <div className="font-condensed font-700 text-brand-dark text-sm leading-tight group-hover:text-brand-red transition-colors">{p.name}</div>
                      <div className="text-[11px] text-brand-mid-gray mt-0.5">{p.category}</div>
                    </div>
                    <span className="badge badge-red text-[10px] shrink-0 mt-0.5">{p.badge}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          <span className="uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-8 bg-brand-gold/50 animate-pulse" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* PRODUCT CATEGORIES                                              */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-12">
            <p className="section-label mb-2">Our Product Range</p>
            <h2 className="section-title text-4xl md:text-5xl text-brand-dark mb-4">
              Professional Grade Solutions
            </h2>
            <p className="text-brand-mid-gray max-w-2xl mx-auto">
              From tile adhesives to waterproofing membranes — every product engineered for Kerala and Tamil Nadu&apos;s construction demands.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.slug} variant="fadeUp" delay={i * 80}>
                <Link
                  href={`/products/${product.slug}`}
                  className={`card group p-6 border h-full block ${categoryBg[product.category] || 'bg-gray-50 border-gray-100'} hover:border-brand-red transition-all`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-700 font-condensed uppercase tracking-widest text-brand-mid-gray mb-1">{product.category}</p>
                      <h3 className="font-condensed font-700 text-xl text-brand-dark leading-tight group-hover:text-brand-red transition-colors">{product.name}</h3>
                    </div>
                    <span className="badge badge-red">{product.badge}</span>
                  </div>
                  <p className="text-sm text-brand-mid-gray leading-relaxed mb-4">{product.description.slice(0, 100)}…</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-mid-gray">{product.packSize}</span>
                    <span className="flex items-center gap-1 text-brand-red font-condensed font-700 text-sm group-hover:gap-2 transition-all">
                      View Product <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fadeUp" delay={200} className="text-center mt-10">
            <Link href="/products" className="btn-secondary">
              View All Products <ArrowRight size={16} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* WHY PAVER CHEMCO                                               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll variant="fadeLeft">
            <p className="section-label text-brand-gold mb-2">Why Choose Us</p>
            <h2 className="font-condensed font-800 text-4xl md:text-5xl text-white leading-tight mb-6">
              Built for Kerala &amp; Tamil Nadu
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Paver Chemco products are specifically formulated for South India&apos;s climate — handling Kerala&apos;s intense monsoon, Tamil Nadu&apos;s heat, and the unique challenges of modern lightweight construction.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Monsoon Ready', desc: "Products tested for Kerala's 3,000+ mm annual rainfall and high humidity" },
                { title: 'Heat Tolerant', desc: "Engineered for Tamil Nadu's 40°C+ summer temperatures" },
                { title: 'AAC Block Compatible', desc: 'Specialised mortar for modern lightweight block construction' },
                { title: 'Kerala & Tamil Nadu Distribution', desc: 'Wide dealer network across both states for fast availability' },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 animate-slide-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
                  <CheckCircle2 className="text-brand-gold mt-0.5 shrink-0" size={18} />
                  <div>
                    <div className="font-600 text-white text-sm">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn-gold">
                About Paver Chemco <ArrowRight size={16} />
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Stats grid */}
          <AnimateOnScroll variant="fadeRight" delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '6', label: 'Product Categories', sub: 'Adhesive, Mortar, Grout, WP' },
                { value: 'C1T/C1TE', label: 'Tile Adhesive Grade', sub: 'Interior & Exterior' },
                { value: '≥0.8', label: 'N/mm² Bond Strength', sub: 'Block Jointing Mortar' },
                { value: '2', label: 'States Covered', sub: 'Kerala & Tamil Nadu' },
              ].map((stat, i) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group">
                  <div className="font-condensed font-800 text-3xl text-brand-gold mb-1 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                  <div className="font-600 text-white text-sm">{stat.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* SOLUTIONS STRIP                                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Find Your Solution</p>
            <h2 className="section-title text-3xl md:text-4xl text-brand-dark">What Are You Building?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'New Home Tiling', icon: '🏠', href: '/solutions#new-home', desc: 'Interior floors & walls' },
              { label: 'Exterior & Terrace', icon: '🌧️', href: '/solutions#exterior', desc: 'Weather resistant systems' },
              { label: 'AAC Block Walls', icon: '🧱', href: '/solutions#block-walls', desc: 'Lightweight block jointing' },
              { label: 'Waterproofing', icon: '💧', href: '/solutions#waterproofing', desc: 'Terrace, bath, basement' },
            ].map((s, i) => (
              <AnimateOnScroll key={s.label} variant="scaleIn" delay={i * 80}>
                <Link
                  href={s.href}
                  className="bg-white rounded-lg p-5 text-center hover:border-brand-red border border-transparent hover:shadow-lg transition-all group block"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <div className="font-condensed font-700 text-brand-dark group-hover:text-brand-red transition-colors text-base">{s.label}</div>
                  <div className="text-xs text-brand-mid-gray mt-1">{s.desc}</div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TOOLS STRIP                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Wrench, title: 'Coverage Calculator', desc: 'Calculate exactly how many bags you need for your project.', href: '/tools', cta: 'Calculate Now' },
            { icon: Star, title: 'Product Selector', desc: 'Answer 3 questions and get the right product recommendation.', href: '/tools#selector', cta: 'Find My Product' },
            { icon: Phone, title: 'Talk to an Expert', desc: 'Our technical team is available to advise on your specific project.', href: '/contact', cta: 'Contact Us' },
          ].map(({ icon: Icon, title, desc, href, cta }) => (
            <div key={title} className="flex gap-4 p-6 rounded-lg bg-brand-gray hover:bg-red-50 transition-colors group">
              <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-condensed font-700 text-brand-dark text-lg mb-1">{title}</h3>
                <p className="text-sm text-brand-mid-gray mb-3">{desc}</p>
                <Link href={href} className="text-brand-red font-600 text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  {cta} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* BLOG PREVIEW                                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="section-label mb-2">
                <BookOpen size={13} className="inline mr-1" /> Knowledge Centre
              </p>
              <h2 className="section-title text-3xl md:text-4xl text-brand-dark">Guides & Articles</h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-1 text-brand-red font-condensed font-700 uppercase text-sm hover:gap-2 transition-all">
              All Articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card bg-white group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-brand-dark to-brand-red/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 font-condensed font-800 text-6xl uppercase">{post.category}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="badge badge-gold text-xs">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-condensed font-700 text-lg text-brand-dark group-hover:text-brand-red transition-colors leading-tight mb-2">{post.title}</h3>
                  <p className="text-sm text-brand-mid-gray leading-relaxed mb-3">{post.excerpt.slice(0, 120)}…</p>
                  <div className="flex items-center justify-between text-xs text-brand-mid-gray">
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/blog" className="btn-secondary">All Articles</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* FAQ PREVIEW                                                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-label mb-2">
              <HelpCircle size={13} className="inline mr-1" /> Frequently Asked
            </p>
            <h2 className="section-title text-3xl md:text-4xl text-brand-dark">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {topFaqs.map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-condensed font-700 text-brand-dark hover:bg-red-50 transition-colors list-none">
                  {faq.question}
                  <ChevronRight size={16} className="text-brand-red group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-brand-mid-gray leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-secondary">
              All FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA BAND                                                        */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-red-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-condensed font-800 text-4xl md:text-5xl text-white mb-4">
            Ready to Build Better?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Find a Paver Chemco dealer near you in Kerala or Tamil Nadu, or contact us directly for bulk orders and project pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              Find a Dealer <ArrowRight size={16} />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline-white">
              <Phone size={16} /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
