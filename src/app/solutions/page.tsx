import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Construction Chemical Solutions Kerala & Tamil Nadu | Paver Chemco',
  description: 'Find the right Paver Chemco construction chemical solution for your project — tiling, waterproofing, AAC block construction, or exterior applications in Kerala and Tamil Nadu.',
  alternates: { canonical: `${siteConfig.url}/solutions` },
}

const solutions = [
  {
    id: 'new-home',
    icon: '🏠',
    title: 'New Home Tiling',
    subtitle: 'Interior floors & walls',
    problem:
      'You are tiling bedrooms, living rooms, kitchen walls, or bathroom walls inside a new home. You want a strong, reliable bond without the thickness and weight of traditional cement mortar.',
    description:
      'For standard interior ceramic tile fixing on walls and floors, Paver Chemco C1T is the ideal choice. Its polymer modification ensures consistent bond strength even in humid bathroom conditions, while the thin 3–4 mm bed keeps floors level and reduces load on the structure.',
    recommended: [
      {
        code: 'C1T',
        name: 'Paver Chemco C1T',
        role: 'Primary — Interior Tile Adhesive',
        desc: 'Fix all interior ceramic wall and floor tiles with confidence.',
        slug: 'c1t-interior-tile-adhesive',
        badge: 'Interior',
      },
    ],
    tips: [
      'Pre-wet highly absorbent surfaces before application',
      'Use notched trowel (6×6 mm for standard tiles)',
      'Allow 24 hours before grouting',
      'For bathroom floors requiring waterproofing, apply WP Membrane before tiling',
    ],
    accentColor: 'border-red-200 bg-red-50',
    badgeBg: 'bg-red-100 text-brand-red',
  },
  {
    id: 'exterior',
    icon: '🌧️',
    title: 'Exterior & Terrace',
    subtitle: 'Outdoor floors, walls, balconies',
    problem:
      'You are laying tiles on a terrace, balcony, exterior floor, or outdoor wall — exposed to rain, heat, and UV. Standard cement mortar or interior-grade adhesives fail in these conditions.',
    description:
      'Exterior applications require enhanced polymer content to handle thermal movement, rain exposure, and the smooth back surface of vitrified tiles. Paver Chemco C1TE is specifically formulated for Kerala monsoon and Tamil Nadu heat conditions. Pair with WP Membrane under tiles for full weather protection on terraces.',
    recommended: [
      {
        code: 'C1TE',
        name: 'Paver Chemco C1TE',
        role: 'Primary — Exterior Tile Adhesive',
        desc: 'Superior grip for vitrified tiles, tile-on-tile, and all outdoor surfaces.',
        slug: 'c1te-exterior-tile-adhesive',
        badge: 'Exterior',
      },
      {
        code: 'WP',
        name: 'Paver Chemco WP Membrane',
        role: 'System Add-on — Waterproofing Under Tiles',
        desc: 'Apply before C1TE on terraces and wet outdoor areas for full water protection.',
        slug: 'wp-membrane',
        badge: 'Waterproofing',
      },
    ],
    tips: [
      'Use C1TE for all vitrified tile installations indoors and outdoors',
      'For terraces: apply WP Membrane (2 coats) before laying tiles',
      'Use expansion joints every 3–4 m in exterior flooring',
      'Back-butter large-format tiles for full coverage',
    ],
    accentColor: 'border-amber-200 bg-amber-50',
    badgeBg: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'block-walls',
    icon: '🧱',
    title: 'AAC Block Construction',
    subtitle: 'Lightweight block jointing',
    problem:
      'You are building walls with AAC blocks, fly ash bricks, or concrete blocks and want to avoid the thick 12–15 mm cement-sand mortar joints that cause cracks and reduce the thermal value of AAC blocks.',
    description:
      'Paver Chemco Block Jointing Mortar is engineered for modern lightweight block construction. It requires only a 3 mm joint — preserving AAC block thermal performance, reducing material use, and dramatically lowering the risk of joint cracking. With ≥0.8 N/mm² tensile strength, it outperforms conventional mortar in every dimension.',
    recommended: [
      {
        code: 'BJM',
        name: 'Paver Chemco Block Jointing Mortar',
        role: 'Primary — AAC Block & Fly Ash Brick Mortar',
        desc: '3 mm joints, >10 MPa compressive strength, self-curing. For all lightweight block types.',
        slug: 'block-jointing-mortar',
        badge: 'AAC Blocks',
      },
    ],
    tips: [
      'Joints must be exactly 3 mm — use a notched applicator',
      'Pre-wet AAC block surfaces before applying mortar',
      'Mix only as much as can be used in 90 minutes',
      'Mist cure in hot Tamil Nadu summer conditions',
    ],
    accentColor: 'border-stone-200 bg-stone-50',
    badgeBg: 'bg-stone-100 text-stone-700',
  },
  {
    id: 'waterproofing',
    icon: '💧',
    title: 'Waterproofing',
    subtitle: 'Terrace, bathroom, basement, pool',
    problem:
      'You have a leaking terrace before Kerala monsoon, a bathroom that needs waterproofing under the tiles, a basement with water ingress, or a swimming pool that needs a long-lasting waterproof lining.',
    description:
      'Paver Chemco WP Membrane is a single-component flexible cementitious waterproofing membrane. Applied in 2–3 coats, it forms a seamless, crack-bridging membrane that bonds directly to concrete, plaster, and masonry. Safe for potable water tanks and resistant to pool chemicals after full cure.',
    recommended: [
      {
        code: 'WP-01',
        name: 'Paver Chemco WP Membrane',
        role: 'Primary — Flexible Cementitious Waterproofing',
        desc: 'For terraces, bathrooms, basements, overhead tanks, and swimming pools.',
        slug: 'wp-membrane',
        badge: 'Crack-Bridging',
      },
    ],
    tips: [
      'Repair all cracks wider than 0.5 mm before applying',
      'Embed polyester fabric at all corners and junctions',
      'Allow 4–6 hours between coats',
      'Conduct ponding test after 7 days before completing project',
    ],
    accentColor: 'border-blue-200 bg-blue-50',
    badgeBg: 'bg-blue-100 text-blue-700',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">What Are You Building?</p>
          <h1 className="font-condensed font-800 text-5xl md:text-6xl text-white mb-5">
            Find Your Solution
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Every construction project has a specific challenge. Find the right
            Paver Chemco product system for your application — whether you are
            tiling, waterproofing, or building walls with AAC blocks.
          </p>
          {/* Quick jump links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-600 hover:bg-white/20 transition-colors"
              >
                <span>{s.icon}</span> {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Cards ─────────────────────────────────────── */}
      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {solutions.map((sol) => (
            <div key={sol.id} id={sol.id} className="scroll-mt-20">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{sol.icon}</div>
                <div>
                  <p className="section-label mb-0.5">{sol.subtitle}</p>
                  <h2 className="font-condensed font-800 text-3xl md:text-4xl text-brand-dark">{sol.title}</h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Problem & Solution — 2 cols */}
                <div className="lg:col-span-2 space-y-6">
                  {/* The Problem */}
                  <div className={`rounded-xl p-6 border ${sol.accentColor}`}>
                    <h3 className="font-condensed font-700 text-lg text-brand-dark mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-800">?</span>
                      The Challenge
                    </h3>
                    <p className="text-brand-mid-gray leading-relaxed text-sm">{sol.problem}</p>
                  </div>

                  {/* The Solution */}
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h3 className="font-condensed font-700 text-lg text-brand-dark mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-800">✓</span>
                      The Solution
                    </h3>
                    <p className="text-brand-mid-gray leading-relaxed text-sm mb-4">{sol.description}</p>
                    <h4 className="font-condensed font-700 text-sm uppercase tracking-widest text-brand-mid-gray mb-2">Pro Tips</h4>
                    <div className="space-y-2">
                      {sol.tips.map((tip) => (
                        <div key={tip} className="flex gap-2 text-sm text-brand-mid-gray">
                          <ChevronRight size={14} className="text-brand-red mt-0.5 shrink-0" />
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommended products — 1 col */}
                <div className="space-y-4">
                  <h3 className="font-condensed font-700 text-lg text-brand-dark">Recommended Products</h3>
                  {sol.recommended.map((prod) => (
                    <div key={prod.slug} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-brand-red transition-all group">
                      <div className="bg-brand-dark p-4 flex items-center justify-between">
                        <span className="font-condensed font-800 text-2xl text-brand-gold">{prod.code}</span>
                        <span className={`badge text-xs ${sol.badgeBg}`}>{prod.badge}</span>
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-700 font-condensed uppercase tracking-widest text-brand-red mb-1">{prod.role}</div>
                        <div className="font-condensed font-700 text-brand-dark mb-2 group-hover:text-brand-red transition-colors">{prod.name}</div>
                        <p className="text-xs text-brand-mid-gray leading-relaxed mb-3">{prod.desc}</p>
                        <Link
                          href={`/products/${prod.slug}`}
                          className="inline-flex items-center gap-1 text-brand-red font-condensed font-700 text-sm hover:gap-2 transition-all"
                        >
                          View Product <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  ))}
                  <Link href="/contact" className="block text-center py-3 border-2 border-brand-red text-brand-red rounded-lg font-condensed font-700 text-sm hover:bg-brand-red hover:text-white transition-all uppercase tracking-wide">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Band ───────────────────────────────────────────── */}
      <section className="py-16 bg-red-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-condensed font-800 text-4xl md:text-5xl text-white mb-4">
            Not Sure Which Product?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Use our product selector to get a personalised recommendation in 2 steps — or call our technical team directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tools#selector" className="btn-outline-white">
              Product Selector <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
