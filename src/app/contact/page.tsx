import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Dealers Kerala Tamil Nadu | Paver Chemco',
  description: 'Contact Paver Chemco for product enquiries, dealer locations in Kerala and Tamil Nadu, bulk orders, and technical support. Call +91 9994491827.',
  alternates: { canonical: `${siteConfig.url}/contact` },
}

const contactDetails = [
  { icon: Phone, label: 'Phone', values: [siteConfig.phone, siteConfig.phone2] },
  { icon: Mail, label: 'Email', values: [siteConfig.email] },
  { icon: MapPin, label: 'Address', values: [siteConfig.address] },
  { icon: Clock, label: 'Office Hours', values: ['Monday–Saturday: 9:00 AM – 6:00 PM'] },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="section-label text-brand-gold mb-3">Get In Touch</p>
          <h1 className="font-condensed font-800 text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Reach us for product enquiries, dealer information, bulk pricing, or technical advice in Kerala and Tamil Nadu.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="font-condensed font-700 text-3xl text-brand-dark mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {contactDetails.map(({ icon: Icon, label, values }) => (
                <div key={label} className="flex gap-4 bg-white rounded-lg p-4 border border-gray-100">
                  <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-condensed font-700 text-sm text-brand-mid-gray uppercase tracking-wide mb-1">{label}</div>
                    {values.map((v) => (
                      <div key={v} className="text-brand-dark font-500 text-sm">{v}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-condensed font-700 text-xl text-brand-dark mb-3">Distribution Area</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Kerala', 'Tamil Nadu', 'Kochi', 'Thiruvananthapuram', 'Kozhikode',
                  'Thrissur', 'Palakkad', 'Chennai', 'Coimbatore', 'Madurai',
                  'Trichy', 'Salem', 'Tirunelveli', 'Malappuram', 'Kannur',
                ].map((area) => (
                  <span key={area} className="badge badge-dark text-xs">{area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form — client component */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="font-condensed font-700 text-2xl text-brand-dark mb-6">Send an Enquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
