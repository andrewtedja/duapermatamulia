'use client'

import { Partner } from '@/data/solutions'
import { Download } from 'lucide-react'

interface DownloadSolutionButtonProps {
  partner: Partner
  className?: string
  label?: string
}

export default function DownloadSolutionButton({
  partner,
  className = 'inline-flex items-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-xs font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95',
  label = 'Download Document'
}: DownloadSolutionButtonProps) {
  const handleDownload = () => {
    if (!partner.pdfPath) return
    const link = document.createElement('a')
    link.href = partner.pdfPath
    link.setAttribute(
      'download',
      partner.name ? `${partner.name}.pdf` : 'file.pdf'
    )
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <button onClick={handleDownload} className={className}>
      <Download className="h-4 w-4" />
      {label}
    </button>
  )
}
