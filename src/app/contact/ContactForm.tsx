'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', location: '', product: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setFormData({ name: '', phone: '', email: '', location: '', product: '', message: '' })
      } else {
        setError('Submission failed. Please try again or call us directly.')
      }
    } catch {
      setError('Network error. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle2 size={48} className="text-green-500 mb-4" />
        <h3 className="font-condensed font-700 text-2xl text-brand-dark mb-2">Thank You!</h3>
        <p className="text-brand-mid-gray">We have received your enquiry. Our team will contact you shortly.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 btn-secondary">
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-600 text-brand-dark mb-1.5">Name *</label>
          <input
            name="name" type="text" required value={formData.name}
            onChange={handleChange} placeholder="Your name"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
          />
        </div>
        <div>
          <label className="block text-sm font-600 text-brand-dark mb-1.5">Phone *</label>
          <input
            name="phone" type="tel" required value={formData.phone}
            onChange={handleChange} placeholder="+91 XXXXX XXXXX"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-600 text-brand-dark mb-1.5">Email</label>
        <input
          name="email" type="email" value={formData.email}
          onChange={handleChange} placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
        />
      </div>
      <div>
        <label className="block text-sm font-600 text-brand-dark mb-1.5">Location (City / State)</label>
        <input
          name="location" type="text" value={formData.location}
          onChange={handleChange} placeholder="e.g. City, Region"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
        />
      </div>
      <div>
        <label className="block text-sm font-600 text-brand-dark mb-1.5">Product of Interest</label>
        <select
          name="product" value={formData.product} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red"
        >
          <option value="">Select a product</option>
          <option>C1T — Interior Tile Adhesive</option>
          <option>C1TE — Exterior Tile Adhesive</option>
          <option>Block Jointing Mortar</option>
          <option>Tile Grout</option>
          <option>Epoxy Grout</option>
          <option>WP Membrane</option>
          <option>Dealer / Distribution enquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-600 text-brand-dark mb-1.5">Message</label>
        <textarea
          name="message" rows={4} value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project or requirement…"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-red resize-none"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}
      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
