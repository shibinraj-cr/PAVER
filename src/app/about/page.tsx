import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Building2, MapPin, Award, Users, Zap, HeartHandshake } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'About Paver Chemco | Construction Chemicals Kerala & Tamil Nadu',
  description: 'Paver Chemco is a brand by Furner RefraCeram Private Limited, manufacturing premium polymer-modified construction chemicals distributed across Kerala and Tamil Nadu.',
  alternates: { canonical: `${siteConfig.url}/about` },
}

const values = [
  {
    icon: Award,
    title: 'Quality',
    desc: 'Every product is formulated to meet international standards. We use only premium raw materials to ensure consistent performance on every project.',
  },
  {
    icon: Zap,
    title: 'Reliability',
    desc: 'Contractors and homeowners across Kerala and Tamil Nadu trust Paver Chemco products to perform — batch after batch, project after project.',
  },
  {
    icon: Users,
    title: 'Accessibility',
    desc: 'Premium construction chemicals should not be limited to large contractors. Our dealer network ensures Paver Chemco is available across both states at fair prices.',
  },
  {
    icon: HeartHandshake,
    title: 'Technical Support',
    desc: 'We do not just sell products. Our technical team advises on the right product for your specific application, substrate, and climate conditions.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Who We Are</p>
          <h1 className="font-condensed font-800 text-5xl md:text-6xl text-white mb-5">
            About Paver Chemco
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A brand built for the South Indian construction industry — bringing
            international-grade construction chemicals within reach of every
            builder, contractor, and homeowner in Kerala and Tamil Nadu.
          </p>
        </div>
      </section>

      {/* ── Company Story ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="section-title text-4xl text-brand-dark mb-6 leading-tight">
              Built in Kerala,<br />Made for India
            </h2>
            <div className="space-y-4 text-brand-mid-gray leading-relaxed">
              <p>
                Paver Chemco is a specialist construction chemicals brand by{' '}
                <strong className="text-brand-dark">Furner RefraCeram Private Limited</strong>, a
                company incorporated in Kerala and committed to manufacturing
                polymer-modified construction chemicals that meet the demands of
                South India's unique climate and construction practices.
              </p>
              <p>
                Founded with a clear purpose — to bring the quality of
                internationally benchmarked tile adhesives, block jointing
                mortars, grouts, and waterproofing membranes to Kerala and Tamil
                Nadu builders, our products are formulated specifically for the
                challenges our contractors face: Kerala's intense monsoon, Tamil
                Nadu's summer heat, and the growing adoption of modern
                lightweight AAC block construction.
              </p>
              <p>
                Our product range covers the full spectrum of construction
                chemical needs — from fixing tiles in interior bathrooms to
                waterproofing exposed terraces, and from laying AAC block walls
                to chemical-resistant grouting for swimming pools and commercial
                kitchens.
              </p>
            </div>
          </div>

          {/* Company details card */}
          <div className="space-y-4">
            <div className="bg-brand-gray rounded-xl p-6 border border-gray-100">
              <h3 className="font-condensed font-700 text-xl text-brand-dark mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-brand-red" /> Company Details
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Brand', value: 'Paver Chemco' },
                  { label: 'Legal Entity', value: 'Furner RefraCeram Private Limited' },
                  { label: 'CIN', value: 'U23913KL2024PTC085623' },
                  { label: 'Email', value: siteConfig.email },
                  { label: 'Phone', value: siteConfig.phone },
                  { label: 'Website', value: 'www.paverchemco.com' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="font-600 text-brand-dark w-32 shrink-0">{label}:</span>
                    <span className="text-brand-mid-gray">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-gray rounded-xl p-6 border border-gray-100">
              <h3 className="font-condensed font-700 text-xl text-brand-dark mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-brand-red" /> Registered Address
              </h3>
              <p className="text-brand-mid-gray text-sm leading-relaxed">
                No 11/891 Malabar Shopping Mahal,<br />
                Mele Pattambi, Kerala – 679306, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Our Mission</p>
          <h2 className="font-condensed font-800 text-4xl md:text-5xl text-white mb-6 leading-tight">
            Making Premium Construction Chemicals Accessible
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Our mission is to make premium polymer-modified construction chemicals
            accessible to builders, contractors, and homeowners across Kerala and
            Tamil Nadu — so that every home is built with materials that perform
            as well as international standards demand, at prices the South Indian
            market can work with.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '6+', label: 'Products' },
              { value: '2', label: 'States' },
              { value: 'ISO', label: 'Quality' },
              { value: '2024', label: 'Founded' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="font-condensed font-800 text-3xl text-brand-gold mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What Drives Us</p>
            <h2 className="section-title text-4xl text-brand-dark">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-red transition-colors group">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-condensed font-700 text-xl text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-brand-mid-gray leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Distribution ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-3">Where We Serve</p>
            <h2 className="section-title text-4xl text-brand-dark mb-6">
              Kerala & Tamil Nadu
            </h2>
            <p className="text-brand-mid-gray leading-relaxed mb-6">
              Paver Chemco products are distributed through an authorised dealer
              network across both states. Our network covers all major cities and
              towns — from Thiruvananthapuram to Kasaragod in Kerala, and from
              Chennai to Tirunelveli in Tamil Nadu.
            </p>
            <div className="space-y-3">
              {[
                'Kerala — All 14 districts',
                'Tamil Nadu — Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, and more',
                'Dealer support and technical advisory',
                'Bulk and project supply available',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="text-brand-red mt-0.5 shrink-0" size={18} />
                  <span className="text-brand-mid-gray text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur',
              'Palakkad', 'Malappuram', 'Kannur', 'Kasaragod',
              'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam',
              'Idukki', 'Wayanad',
              'Chennai', 'Coimbatore', 'Madurai', 'Trichy',
              'Salem', 'Tirunelveli', 'Vellore', 'Erode',
            ].map((city) => (
              <span key={city} className="badge badge-dark text-xs">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ───────────────────────────────────────────── */}
      <section className="py-16 bg-red-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-condensed font-800 text-4xl md:text-5xl text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Contact us for product enquiries, dealer information, or technical advice for your project in Kerala or Tamil Nadu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-outline-white">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="btn-outline-white">
              Our Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
