import { Input } from '@/components/ui/input'
import { useEffect, useMemo, useState } from 'react'

export default function PhoneInput({
  value,
  onChange
}: {
  value: string
  onChange: (v: string) => void
}) {
  // parse initial value -> cc + local
  const initial = useMemo(() => {
    const m = value.match(/^(\+\d{1,3})\s?(.*)$/)
    return { cc: m?.[1] ?? '+62', local: m?.[2] ?? '' }
  }, [value])

  const [cc, setCc] = useState(initial.cc)
  const [local, setLocal] = useState(initial.local)

  // jika parent mengganti value dari luar, sinkronkan
  useEffect(() => {
    setCc(initial.cc)
    setLocal(initial.local)
  }, [initial.cc, initial.local])

  // util: gabungkan ke parent
  const emit = (nextCc: string, nextLocal: string) => {
    const combined = nextLocal ? `${nextCc} ${nextLocal}` : nextCc
    onChange(combined)
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-1 justify-center items-center">
        <Input
          type="tel"
          placeholder="Country Code (e.g. +62)"
          className="w-48 border-gray-300 text-sm px-3 py-3 "
          required
          value={cc}
          onChange={(e) => {
            const next = e.target.value
            setCc(next)
            emit(next, local)
          }}
        />
        <div>-</div>
        {/* ✅ input menampilkan HANYA nomor lokal */}
        <Input
          type="tel"
          placeholder="Phone Number"
          className="flex-1 border-gray-300 py-3  focus:border-orange-500 focus:ring-orange-500"
          required
          value={local}
          onChange={(e) => {
            const next = e.target.value
            setLocal(next)
            emit(cc, next)
          }}
        />
      </div>
    </div>
  )
}
