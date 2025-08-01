import { NextResponse, NextRequest } from 'next/server'

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      organization,
      country,
      city,
      phone,
      productCategory,
      message,
      referral,
      captchaToken
    } = body

    if (
      !fullName ||
      !email ||
      !organization ||
      !country ||
      !city ||
      !phone ||
      !productCategory ||
      !message
    ) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // 2) Pastikan secret ada
    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
      console.error('TURNSTILE_SECRET_KEY missing')
      return NextResponse.json(
        { error: 'SERVER_MISSING_TURNSTILE_SECRET_KEY' },
        { status: 500 }
      )
    }

    // 3) Token wajib
    if (!captchaToken) {
      return NextResponse.json({ error: 'Missing CAPTCHA' }, { status: 400 })
    }

    const form = new URLSearchParams()
    form.append('secret', secret)
    form.append('response', captchaToken)

    const verifyRes = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
      cache: 'no-store'
    })

    if (!verifyRes.ok) {
      const text = await verifyRes.text()
      console.error('Turnstile HTTP error:', verifyRes.status, text)
      return NextResponse.json(
        { error: 'captcha_verify_http_error' },
        { status: 502 }
      )
    }

    const vr = await verifyRes.json()
    if (!vr.success) {
      // Lihat error codes untuk diagnosa: timeout-or-duplicate, invalid-input-secret, dll.
      console.error('Turnstile verify failed:', vr['error-codes'])
      return NextResponse.json(
        { error: 'Invalid CAPTCHA', details: vr },
        { status: 400 }
      )
    }

    // 5) Lanjut proses…
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API /api/submit error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
