import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'business@furner.in'
const FROM_EMAIL = 'Paver Chemco <onboarding@resend.dev>'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, location, product, message } = body

  if (!name || !phone) {
    return NextResponse.json(
      { success: false, message: 'Name and phone are required' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[Contact Form — no RESEND_API_KEY]', { name, phone, email, location, product, message })
    return NextResponse.json({ success: true, message: 'Thank you, we will contact you shortly' })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email || undefined,
    subject: `New Enquiry from ${name} — Paver Chemco`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#c0392b;padding:24px 32px;border-radius:8px 8px 0 0">
          <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700">New Paver Chemco Enquiry</h1>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;padding:0">
          <table style="border-collapse:collapse;width:100%">
            <tr>
              <td style="padding:14px 24px;font-weight:700;color:#555;width:140px;border-bottom:1px solid #f0f0f0">Name</td>
              <td style="padding:14px 24px;color:#222;border-bottom:1px solid #f0f0f0">${name}</td>
            </tr>
            <tr style="background:#fafafa">
              <td style="padding:14px 24px;font-weight:700;color:#555;border-bottom:1px solid #f0f0f0">Phone</td>
              <td style="padding:14px 24px;color:#222;border-bottom:1px solid #f0f0f0">${phone}</td>
            </tr>
            <tr>
              <td style="padding:14px 24px;font-weight:700;color:#555;border-bottom:1px solid #f0f0f0">Email</td>
              <td style="padding:14px 24px;color:#222;border-bottom:1px solid #f0f0f0">${email || '—'}</td>
            </tr>
            <tr style="background:#fafafa">
              <td style="padding:14px 24px;font-weight:700;color:#555;border-bottom:1px solid #f0f0f0">Location</td>
              <td style="padding:14px 24px;color:#222;border-bottom:1px solid #f0f0f0">${location || '—'}</td>
            </tr>
            <tr>
              <td style="padding:14px 24px;font-weight:700;color:#555;border-bottom:1px solid #f0f0f0">Product Interest</td>
              <td style="padding:14px 24px;color:#222;border-bottom:1px solid #f0f0f0">${product || '—'}</td>
            </tr>
            <tr style="background:#fafafa">
              <td style="padding:14px 24px;font-weight:700;color:#555;vertical-align:top">Message</td>
              <td style="padding:14px 24px;color:#222;white-space:pre-wrap">${message || '—'}</td>
            </tr>
          </table>
        </div>
        <p style="color:#aaa;font-size:11px;margin-top:16px;text-align:center">
          Submitted via paverchemco.com
        </p>
      </div>
    `,
  })

  if (error) {
    console.error('[Resend error]', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please call us directly.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true, message: 'Thank you, we will contact you shortly' })
}
