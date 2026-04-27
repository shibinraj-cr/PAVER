import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, location, product, message } = body

  console.log('[Contact Form Submission]', {
    name,
    phone,
    email,
    location,
    product,
    message,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json({
    success: true,
    message: 'Thank you, we will contact you shortly',
  })
}
