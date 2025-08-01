import { NextResponse, NextRequest } from 'next/server'
import { Resend } from 'resend'

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const resend = new Resend(process.env.RESEND_API_KEY)

const now = Date.now()

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

    // ================= EMAIL ===================
    const to = process.env.NOTIFY_TO!
    const from = process.env.FROM_EMAIL! // gunakan domain yang sudah diverifikasi di Resend

    const subject = `New Inquiry (DPM) — ${fullName} (${productCategory})`
    const html = `
      <h2>Pengajuan Barang - ${now}}</h2>
      <table>
        <tr><td><b>Full Name</b></td><td>${fullName}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Organization</b></td><td>${organization}</td></tr>
        <tr><td><b>Location</b></td><td>${city}, ${country}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Product Category</b></td><td>${productCategory}</td></tr>
        <tr><td><b>Referral</b></td><td>${referral ?? '-'}</td></tr>
      </table>
      <p><b>Message:</b></p>
      <pre style="white-space:pre-wrap;font-family:ui-monospace,monospace">${message}</pre>
    `

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'email_send_failed' }, { status: 502 })
    }

    // 5) Lanjut proses…
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API /api/submit error:', err)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
