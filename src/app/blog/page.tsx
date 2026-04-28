import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Blog — Tile Adhesive & Construction Chemical Guides | Paver Chemco',
  description: 'Expert guides on tile adhesive, waterproofing, block construction, and grout selection for tropical monsoon climates — homes and commercial projects.',
  alternates: { canonical: `${siteConfig.url}/blog` },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Knowledge Centre</p>
          <h1 className="font-condensed font-800 text-5xl text-white mb-4">Blog & Guides</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Expert construction tips, product guides, and how-to articles for tropical climates and monsoon-prone environments.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card bg-white group overflow-hidden hover:border-brand-red border border-gray-100 transition-all">
              <div className="h-40 bg-gradient-to-br from-brand-dark to-brand-red/70 relative flex items-end p-4">
                <span className="badge badge-gold text-xs">{post.category}</span>
              </div>
              <div className="p-5">
                <h2 className="font-condensed font-700 text-lg text-brand-dark group-hover:text-brand-red transition-colors leading-tight mb-2">{post.title}</h2>
                <p className="text-sm text-brand-mid-gray leading-relaxed mb-4">{post.excerpt.slice(0, 110)}…</p>
                <div className="flex items-center justify-between text-xs text-brand-mid-gray">
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1 text-brand-red font-condensed font-700 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
