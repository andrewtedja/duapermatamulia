'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import Captcha from './Captcha'
import PhoneInput from './PhoneInput'
import { useState } from 'react'

import CustomAlert from './CustomAlert'

export default function InquiryForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    country: '',
    city: '',
    phone: '',
    productCategory: '',
    message: '',
    referral: ''
  })

  const [captchaToken, setCaptchaToken] = useState('')

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  const handlePhoneChange = (v: string) =>
    setForm((prev) => ({ ...prev, phone: v }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!captchaToken) {
      setResponse('❌ CAPTCHA salah. Silakan coba lagi.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          captchaToken
        })
      })

      const data = await res.json()
      console.log(data)
      console.log(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)

      setResponse(
        data?.success ? '✅ Submitted successfully' : `❌ ${data.error}`
      )
    } catch (error) {
      setResponse(`❌ ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const dismissAlert = () => setResponse(null)

  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-md border-0">
          <CardContent className="px-8 py-4">
            <h1 className="text-md text-gray-700 mb-4">
              All fields are required*
            </h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Input
                  id="fullName"
                  placeholder="Name"
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm((f) => {
                      return { ...f, fullName: e.target.value }
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => {
                      return { ...f, email: e.target.value }
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="organization"
                  placeholder="Organization"
                  required
                  value={form.organization}
                  onChange={(e) =>
                    setForm((f) => {
                      return { ...f, organization: e.target.value }
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Select
                    value={form.country}
                    onValueChange={(v) =>
                      setForm((f) => ({ ...f, country: v }))
                    }
                  >
                    <SelectTrigger className="w-full">
                      {' '}
                      {/* ✅ Force full width */}
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="af">Afghanistan</SelectItem>
                      <SelectItem value="al">Albania</SelectItem>
                      <SelectItem value="dz">Algeria</SelectItem>
                      <SelectItem value="ar">Argentina</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="at">Austria</SelectItem>
                      <SelectItem value="bd">Bangladesh</SelectItem>
                      <SelectItem value="be">Belgium</SelectItem>
                      <SelectItem value="br">Brazil</SelectItem>
                      <SelectItem value="bg">Bulgaria</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="cl">Chile</SelectItem>
                      <SelectItem value="cn">China</SelectItem>
                      <SelectItem value="co">Colombia</SelectItem>
                      <SelectItem value="hr">Croatia</SelectItem>
                      <SelectItem value="cz">Czech Republic</SelectItem>
                      <SelectItem value="dk">Denmark</SelectItem>
                      <SelectItem value="eg">Egypt</SelectItem>
                      <SelectItem value="fi">Finland</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="gr">Greece</SelectItem>
                      <SelectItem value="hk">Hong Kong</SelectItem>
                      <SelectItem value="hu">Hungary</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="id">Indonesia</SelectItem>
                      <SelectItem value="ir">Iran</SelectItem>
                      <SelectItem value="ie">Ireland</SelectItem>
                      <SelectItem value="il">Israel</SelectItem>
                      <SelectItem value="it">Italy</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                      <SelectItem value="jo">Jordan</SelectItem>
                      <SelectItem value="ke">Kenya</SelectItem>
                      <SelectItem value="kr">South Korea</SelectItem>
                      <SelectItem value="kw">Kuwait</SelectItem>
                      <SelectItem value="my">Malaysia</SelectItem>
                      <SelectItem value="mx">Mexico</SelectItem>
                      <SelectItem value="ma">Morocco</SelectItem>
                      <SelectItem value="nl">Netherlands</SelectItem>
                      <SelectItem value="nz">New Zealand</SelectItem>
                      <SelectItem value="ng">Nigeria</SelectItem>
                      <SelectItem value="no">Norway</SelectItem>
                      <SelectItem value="pk">Pakistan</SelectItem>
                      <SelectItem value="ph">Philippines</SelectItem>
                      <SelectItem value="pl">Poland</SelectItem>
                      <SelectItem value="pt">Portugal</SelectItem>
                      <SelectItem value="qa">Qatar</SelectItem>
                      <SelectItem value="ro">Romania</SelectItem>
                      <SelectItem value="ru">Russia</SelectItem>
                      <SelectItem value="sa">Saudi Arabia</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="za">South Africa</SelectItem>
                      <SelectItem value="es">Spain</SelectItem>
                      <SelectItem value="se">Sweden</SelectItem>
                      <SelectItem value="ch">Switzerland</SelectItem>
                      <SelectItem value="tw">Taiwan</SelectItem>
                      <SelectItem value="th">Thailand</SelectItem>
                      <SelectItem value="tr">Turkey</SelectItem>
                      <SelectItem value="ua">Ukraine</SelectItem>
                      <SelectItem value="ae">United Arab Emirates</SelectItem>
                      <SelectItem value="gb">United Kingdom</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="vn">Vietnam</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Input
                    id="city"
                    placeholder="City"
                    required
                    className="w-full"
                    value={form.city}
                    onChange={(e) =>
                      setForm((f) => {
                        return { ...f, city: e.target.value }
                      })
                    }
                  />{' '}
                  {/* ✅ */}
                </div>
              </div>

              <PhoneInput value={form.phone} onChange={handlePhoneChange} />
              <div className="space-y-2">
                <Select
                  value={form.productCategory}
                  onValueChange={(v) =>
                    setForm((f) => ({ ...f, productCategory: v }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Product Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pro-av">Pro AV</SelectItem>
                    <SelectItem value="video-conferencing">
                      Video Conferencing Camera and System
                    </SelectItem>
                    <SelectItem value="smart-classroom">
                      Smart Classroom Solution
                    </SelectItem>
                    <SelectItem value="control-box">
                      Control Box/Streaming Audio System
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  placeholder="Tell us what you need..."
                  className="min-h-32 resize-none"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Select
                  value={form.referral}
                  onValueChange={(v) => setForm((f) => ({ ...f, referral: v }))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Where did you hear about us?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exhibition">
                      Exhibition or Event{' '}
                    </SelectItem>
                    <SelectItem value="socialMedia">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>

                    <SelectItem value="onlineNews">Online News</SelectItem>
                    <SelectItem value="eNewsletter">e-Newsletter</SelectItem>

                    <SelectItem value="keywordSearch">
                      Keyword Search
                    </SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Captcha onToken={setCaptchaToken} />

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-orange-500 text-white"
                >
                  {loading ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </div>

              {response && (
                <CustomAlert
                  message={response.replace(/^✅\s?|^❌\s?/, '')}
                  type={response.startsWith('✅') ? 'success' : 'error'}
                  onDismiss={dismissAlert}
                  className="mt-4"
                />
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
