import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Download, CheckCircle2, ChevronRight, Phone } from 'lucide-react'
import { products, getProductBySlug } from '@/data/products'
import { siteConfig } from '@/data/siteConfig'
import SchemaOrg from '@/components/ui/SchemaOrg'
import ProductBagImage from '@/components/ui/ProductBagImage'

interface Props { params: { slug: string } }

// ── Static paths ──────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

// ── Per-product metadata ──────────────────────────────────────────────────────
export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [{ url: product.heroImage }],
    },
    alternates: { canonical: `${siteConfig.url}/products/${product.slug}` },
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = products.filter((p) => product.relatedProducts.includes(p.slug))

  // ── Product + HowTo + FAQPage schema ────────────────────────────────────────
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        brand: { '@type': 'Brand', name: 'Paver Chemco' },
        manufacturer: { '@type': 'Organization', name: siteConfig.company },
        sku: product.code,
        category: product.category,
        url: `${siteConfig.url}/products/${product.slug}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: siteConfig.company },
          areaServed: ['Kerala', 'Tamil Nadu'],
        },
      },
      {
        '@type': 'HowTo',
        name: `How to use ${product.name}`,
        description: `Step-by-step application guide for ${product.name}`,
        step: product.applicationSteps.map((s) => ({
          '@type': 'HowToStep',
          position: s.step,
          name: s.title,
          text: s.description,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: product.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <>
      <SchemaOrg schema={schema} />

      {/* ── Breadcrumb ─────────────────────────────────────────────── */}
      <div className="bg-brand-gray border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-brand-mid-gray">
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-brand-red transition-colors">Products</Link>
          <ChevronRight size={12} />
          <span className="text-brand-dark font-600">{product.name}</span>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label text-brand-gold mb-3">{product.category}</p>
            <h1 className="font-condensed font-800 text-4xl md:text-5xl text-white leading-tight mb-3">{product.name}</h1>
            <p className="text-brand-gold-light text-lg mb-5">{product.tagline}</p>
            <p className="text-gray-300 leading-relaxed mb-8">{product.longDescription}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
              {product.tdsFile && (
                <a href={product.tdsFile} download className="btn-outline-white">
                  <Download size={16} /> Download TDS
                </a>
              )}
            </div>
          </div>
          {/* Product bag image */}
          <div className="hidden lg:flex items-center justify-center">
            <ProductBagImage
              src={product.image}
              alt={product.name}
              code={product.code}
              badge={product.badge}
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <p className="section-label mb-3">Key Features</p>
            <h2 className="section-title text-3xl text-brand-dark mb-6">Why Choose {product.code}?</h2>
            <div className="space-y-3">
              {product.features.map((f) => (
                <div key={f} className="flex gap-3">
                  <CheckCircle2 className="text-brand-red mt-0.5 shrink-0" size={18} />
                  <span className="text-brand-dark">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <p className="section-label mb-3">Applications</p>
            <h2 className="section-title text-3xl text-brand-dark mb-6">Where to Use</h2>
            <div className="space-y-2">
              {product.applications.map((a) => (
                <div key={a} className="flex gap-3 p-3 bg-brand-gray rounded-lg">
                  <ChevronRight className="text-brand-red mt-0.5 shrink-0" size={16} />
                  <span className="text-sm text-brand-dark">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Data Table ────────────────────────────────────── */}
      <section className="py-14 bg-brand-gray" id="technical-data">
        <div className="max-w-7xl mx-auto px-4">
          <p className="section-label mb-3">Technical Specifications</p>
          <h2 className="section-title text-3xl text-brand-dark mb-8">Product Data</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="overflow-x-auto rounded-lg shadow-sm">
              <table className="tds-table">
                <thead>
                  <tr><th>Property</th><th>Value</th></tr>
                </thead>
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.label}>
                      <td>{spec.label}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                <h3 className="font-condensed font-700 text-xl text-brand-dark mb-3">Coverage & Pack Size</h3>
                <p className="text-brand-mid-gray text-sm leading-relaxed">{product.coverage}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="badge badge-red">{product.packSize}</span>
                </div>
              </div>
              {product.colours && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-condensed font-700 text-xl text-brand-dark mb-3">Available Colours</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colours.map((c) => (
                      <span key={c} className="badge badge-dark text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Steps ───────────────────────────────────────── */}
      <section className="py-14 bg-white" id="application">
        <div className="max-w-7xl mx-auto px-4">
          <p className="section-label mb-3">Application Guide</p>
          <h2 className="section-title text-3xl text-brand-dark mb-10">Step-by-Step Instructions</h2>
          <div className="space-y-6">
            {product.applicationSteps.map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-condensed font-800 text-lg shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                  <h3 className="font-condensed font-700 text-xl text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-brand-mid-gray leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-brand-gray" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <p className="section-label mb-3 text-center">FAQs</p>
          <h2 className="section-title text-3xl text-brand-dark mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {product.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-100 rounded-lg overflow-hidden">
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
        </div>
      </section>

      {/* ── Related Products ────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title text-3xl text-brand-dark mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="card p-5 hover:border-brand-red border border-gray-100 transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-xs text-brand-mid-gray">{p.category}</p>
                      <h3 className="font-condensed font-700 text-lg text-brand-dark group-hover:text-brand-red transition-colors">{p.name}</h3>
                    </div>
                    <span className="badge badge-red text-xs">{p.badge}</span>
                  </div>
                  <p className="text-sm text-brand-mid-gray">{p.description.slice(0, 90)}…</p>
                  <div className="mt-3 flex items-center gap-1 text-brand-red font-condensed font-700 text-sm">
                    View <ChevronRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-12 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-condensed font-800 text-3xl text-white">Need {product.name}?</h2>
            <p className="text-white/80">Find a dealer near you in Kerala or Tamil Nadu.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-outline-white">Find Dealer</Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline-white">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
