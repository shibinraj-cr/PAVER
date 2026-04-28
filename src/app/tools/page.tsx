'use client'
import { useState } from 'react'
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { products } from '@/data/products'

// ── Coverage Calculator ────────────────────────────────────────────────────
function CoverageCalculator() {
  const [area, setArea] = useState('')
  const [productSlug, setProductSlug] = useState('c1t-interior-tile-adhesive')
  const [beds, setBeds] = useState('3')
  const [result, setResult] = useState<{ bags: number; kg: number } | null>(null)

  const coverageMap: Record<string, number> = {
    'c1t-interior-tile-adhesive': 4.25,
    'c1te-exterior-tile-adhesive': 4.25,
    'block-jointing-mortar': 4.5,
    'tile-grout': 0.35,
    'epoxy-grout': 0.20,
    'wp-membrane': 1.1,
  }

  const packMap: Record<string, number> = {
    'c1t-interior-tile-adhesive': 30,
    'c1te-exterior-tile-adhesive': 30,
    'block-jointing-mortar': 40,
    'tile-grout': 5,
    'epoxy-grout': 3,
    'wp-membrane': 20,
  }

  const isWP = productSlug === 'wp-membrane'

  const calculate = () => {
    const a = parseFloat(area)
    if (!a || a <= 0) return
    const cov = coverageMap[productSlug] || 4.25
    const pack = packMap[productSlug] || 30
    const coats = isWP ? parseInt(beds) : 1
    const totalKg = a * cov * coats
    const bags = Math.ceil(totalKg / pack)
    setResult({ bags, kg: Math.round(totalKg * 10) / 10 })
  }

  const selected = products.find((p) => p.slug === productSlug)

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
          <Calculator size={20} className="text-white" />
        </div>
        <div>
          <h2 className="font-condensed font-700 text-2xl text-brand-dark">Coverage Calculator</h2>
          <p className="text-sm text-brand-mid-gray">Calculate how many bags you need</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-600 text-brand-dark mb-2">Select Product</label>
          <select
            value={productSlug}
            onChange={(e) => { setProductSlug(e.target.value); setResult(null) }}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-600 text-brand-dark mb-2">
            {isWP ? 'Number of Coats' : 'Area (sqm)'}
          </label>
          {isWP ? (
            <select
              value={beds}
              onChange={(e) => { setBeds(e.target.value); setResult(null) }}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
            >
              <option value="2">2 coats (bathroom / standard)</option>
              <option value="3">3 coats (swimming pool / terrace)</option>
            </select>
          ) : (
            <input
              type="number"
              value={area}
              onChange={(e) => { setArea(e.target.value); setResult(null) }}
              placeholder="e.g. 100"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
            />
          )}
        </div>

        {isWP && (
          <div>
            <label className="block text-sm font-600 text-brand-dark mb-2">Area (sqm)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => { setArea(e.target.value); setResult(null) }}
              placeholder="e.g. 100"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
            />
          </div>
        )}
      </div>

      <button
        onClick={calculate}
        className="mt-5 btn-primary w-full justify-center"
      >
        Calculate <ArrowRight size={16} />
      </button>

      {result && (
        <div className="mt-5 p-5 bg-red-50 border border-red-100 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="text-center">
              <div className="font-condensed font-800 text-4xl text-brand-red">{result.bags}</div>
              <div className="text-sm text-brand-mid-gray">{selected?.packSize} bags</div>
            </div>
            <div className="text-center">
              <div className="font-condensed font-800 text-4xl text-brand-dark">{result.kg}</div>
              <div className="text-sm text-brand-mid-gray">kg total</div>
            </div>
          </div>
          <p className="text-xs text-brand-mid-gray text-center">
            Estimate for {area} sqm. Add 10% for wastage. Actual may vary.
          </p>
          <div className="mt-3 text-center">
            <Link href="/contact" className="text-brand-red font-condensed font-700 text-sm hover:underline">
              Get a quote for {result.bags} bags →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Product Selector ──────────────────────────────────────────────────────
const selectorQ = [
  {
    id: 'type',
    question: 'What are you working on?',
    options: [
      { label: 'Laying tiles (floor or wall)', value: 'tile' },
      { label: 'Laying AAC / fly ash blocks', value: 'block' },
      { label: 'Waterproofing a surface', value: 'wp' },
      { label: 'Filling tile joints (grouting)', value: 'grout' },
    ],
  },
  {
    id: 'location',
    question: 'Is this for interior or exterior?',
    options: [
      { label: 'Interior (inside the building)', value: 'interior' },
      { label: 'Exterior (outside, terrace, balcony)', value: 'exterior' },
      { label: 'Swimming pool / water tank', value: 'pool' },
      { label: 'Not sure', value: 'notsure' },
    ],
  },
]

function getRecommendation(answers: Record<string, string>): { slug: string; reason: string } {
  const { type, location } = answers
  if (type === 'block') return { slug: 'block-jointing-mortar', reason: 'Paver Chemco Block Jointing Mortar is specifically designed for AAC blocks, fly ash bricks, and concrete blocks.' }
  if (type === 'wp') return { slug: 'wp-membrane', reason: 'Paver Chemco WP Membrane provides a flexible, crack-bridging waterproofing membrane for terraces, bathrooms, pools, and basements.' }
  if (type === 'grout') {
    if (location === 'pool') return { slug: 'epoxy-grout', reason: 'Paver Chemco Epoxy Grout is required for swimming pools — it provides zero water absorption and resistance to chlorine and pool chemicals.' }
    return { slug: 'tile-grout', reason: 'Paver Chemco Tile Grout is the right choice for standard interior and exterior tile joints.' }
  }
  if (location === 'exterior' || location === 'pool') return { slug: 'c1te-exterior-tile-adhesive', reason: 'Paver Chemco C1TE is the recommended choice for exterior tiling, vitrified tiles, tile-on-tile renovation, and outdoor applications.' }
  return { slug: 'c1t-interior-tile-adhesive', reason: 'Paver Chemco C1T is the ideal interior tile adhesive for fixing ceramic tiles on floors and walls inside buildings.' }
}

function ProductSelector() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)

  const handleOption = (value: string) => {
    const newAnswers = { ...answers, [selectorQ[step].id]: value }
    setAnswers(newAnswers)
    if (step < selectorQ.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  const reset = () => { setStep(0); setAnswers({}); setDone(false) }

  if (done) {
    const rec = getRecommendation(answers)
    const product = products.find((p) => p.slug === rec.slug)!
    return (
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="text-center mb-6">
          <CheckCircle2 size={40} className="text-green-500 mx-auto mb-3" />
          <h2 className="font-condensed font-700 text-2xl text-brand-dark">Our Recommendation</h2>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-lg p-5 mb-5">
          <div className="font-condensed font-800 text-2xl text-brand-red mb-1">{product.name}</div>
          <div className="text-sm text-brand-mid-gray mb-3">{rec.reason}</div>
          <div className="text-xs text-brand-mid-gray">{product.coverage}</div>
        </div>
        <div className="flex gap-3">
          <Link href={`/products/${rec.slug}`} className="flex-1 btn-primary justify-center">
            View Product
          </Link>
          <button onClick={reset} className="btn-secondary px-4">Start Over</button>
        </div>
      </div>
    )
  }

  const q = selectorQ[step]
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8" id="selector">
      <div className="mb-6">
        <div className="flex gap-1 mb-5">
          {selectorQ.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded ${i <= step ? 'bg-brand-red' : 'bg-gray-100'}`} />
          ))}
        </div>
        <p className="text-xs text-brand-mid-gray uppercase tracking-wider mb-2">Step {step + 1} of {selectorQ.length}</p>
        <h2 className="font-condensed font-700 text-2xl text-brand-dark">{q.question}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleOption(opt.value)}
            className="w-full text-left p-4 border border-gray-100 rounded-lg hover:border-brand-red hover:bg-red-50 transition-all font-600 text-brand-dark"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ToolsPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Helpful Tools</p>
          <h1 className="font-condensed font-800 text-5xl text-white mb-4">Product Tools</h1>
          <p className="text-gray-300 max-w-xl mx-auto">Calculate how much material you need or find the right product for your project in seconds.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <CoverageCalculator />
          <ProductSelector />
        </div>
      </section>
    </>
  )
}
