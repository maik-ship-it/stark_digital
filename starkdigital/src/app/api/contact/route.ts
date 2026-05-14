import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, business, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Stark Digital Contact <onboarding@resend.dev>',
      to: 'maik@starkdigital.ie',
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business type: ${business || '—'}`,
        ``,
        `Message:`,
        message || '(no message)',
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact/route]', err)
    return NextResponse.json({ error: 'Something went wrong. Please email maik@starkdigital.ie directly.' }, { status: 500 })
  }
}
