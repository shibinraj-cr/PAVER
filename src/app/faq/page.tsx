import type { Metadata } from 'next'
import { faqData, getAllFAQs } from '@/data/faq'
import { siteConfig } from '@/data/siteConfig'
import SchemaOrg from '@/components/ui/SchemaOrg'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ — Tile Adhesive, Waterproofing & Block Mortar Questions | Paver Chemco',
  description: 'Answers to common questions about tile adhesive, block jointing mortar, waterproofing, and grout in Kerala and Tamil Nadu. Paver Chemco technical FAQ.',
  alternates: { canonical: `${siteConfig.url}/faq` },
}

export default function FAQPage() {
  const allFaqs = getAllFAQs()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <SchemaOrg schema={faqSchema} />

      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Got Questions?</p>
          <h1 className="font-condensed font-800 text-5xl text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Technical answers for homeowners, contractors, and architects in Kerala and Tamil Nadu.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="max-w-3xl mx-auto px-4">
          {faqData.map((cat) => (
            <div key={cat.category} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-6 bg-brand-red" />
                <h2 className="font-condensed font-700 text-2xl text-brand-dark">{cat.category}</h2>
              </div>
              <div className="space-y-3">
                {cat.questions.map((faq, i) => (
                  <details key={i} className="group bg-white border border-gray-100 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-condensed font-700 text-brand-dark hover:bg-red-50 transition-colors list-none">
                      {faq.question}
                      <ChevronRight size={16} className="text-brand-red group-open:rotate-90 transition-transform shrink-0 ml-3" />
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-sm text-brand-mid-gray leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
