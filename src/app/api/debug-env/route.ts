import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({
    resend: !!process.env.RESEND_API_KEY,
    sheets: !!process.env.SHEETS_WEBHOOK_URL,
    resendPrefix: process.env.RESEND_API_KEY?.slice(0, 6) ?? 'not set',
  })
}
