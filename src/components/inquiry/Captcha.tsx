'use client'
import { Turnstile } from '@marsidev/react-turnstile'

export default function Captcha({ onToken }: { onToken: (t: string) => void }) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onSuccess={(t) => {
        onToken(t)
      }}
      options={{ action: 'submit_form', appearance: 'always' }}
    />
  )
}
