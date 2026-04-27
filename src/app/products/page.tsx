import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download } from 'lucide-react'
import { products, productCategories } from '@/data/products'
import { siteConfig } from '@/data/siteConfig'
import ProductBagImage from '@/components/ui/ProductBagImage'

export const metadata: Metadata = {
  title: 'Construction Chemical Products Kerala & Tamil Nadu | Paver Chemco',
  description: 'Browse Paver Chemco\'s full range — tile adhesive (C1T, C1TE), block jointing mortar, tile grout, epoxy grout, and waterproofing membrane. Available across Kerala and Tamil Nadu.',
  alternates: { canonical: `${siteConfig.url}/products` },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Complete Range</p>
          <h1 className="font-condensed font-800 text-5xl md:text-6xl text-white mb-4">Our Products</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Premium construction chemicals for tile fixing, block laying, grouting, and waterproofing — distributed across Kerala and Tamil Nadu.</p>
        </div>
      </section>

      {/* Products by category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {productCategories.map((category) => {
            const catProducts = products.filter((p) => p.category === category)
            return (
              <div key={category} className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-8 bg-brand-red" />
                  <h2 className="font-condensed font-700 text-2xl text-brand-dark">{category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catProducts.map((p) => (
                    <div key={p.slug} className="card border border-gray-100 overflow-hidden group hover:border-brand-red transition-all">
                      {/* Card top — bag image on dark background */}
                      <div className="bg-brand-dark relative overflow-hidden h-52 flex items-center justify-center">
                        <ProductBagImage
                          src={p.image}
                          alt={p.name}
                          code={p.code}
                          badge={p.badge}
                          size="md"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="badge badge-red text-xs">{p.badge}</span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <span className="font-condensed font-800 text-brand-gold text-xl">{p.code}</span>
                        </div>
                      </div>
                      {/* Card body */}
                      <div className="p-5">
                        <h3 className="font-condensed font-700 text-lg text-brand-dark mb-2 group-hover:text-brand-red transition-colors">{p.name}</h3>
                        <p className="text-sm text-brand-mid-gray mb-4 leading-relaxed">{p.description}</p>
                        <div className="text-xs text-brand-mid-gray mb-4">
                          <span className="font-600">Pack:</span> {p.packSize}
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/products/${p.slug}`} className="flex-1 btn-primary text-sm py-2 justify-center">
                            View Details <ChevronRight size={14} />
                          </Link>
                          {p.tdsFile && (
                            <a href={p.tdsFile} download className="px-3 py-2 border border-gray-200 rounded hover:border-brand-red text-brand-mid-gray hover:text-brand-red transition-colors">
                              <Download size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
