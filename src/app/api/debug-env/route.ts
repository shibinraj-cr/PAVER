import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({
    gmail: !!process.env.GMAIL_USER,
    gmailUser: process.env.GMAIL_USER ?? 'not set',
    gmailPass: !!process.env.GMAIL_APP_PASSWORD,
    sheets: !!process.env.SHEETS_WEBHOOK_URL,
  })
}
