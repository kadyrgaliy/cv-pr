'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-card border border-border rounded-2xl p-4 shadow-xl shadow-black/20">
      <div className="flex items-start justify-between gap-3 mb-3">
        <p className="text-sm text-foreground font-medium">Куки файлдары</p>
        <button onClick={decline} className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        Сайт жұмысын жақсарту үшін куки файлдарын пайдаланамыз. Қабылдасаңыз, аналитика деректері жиналады.
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 py-2 bg-accent text-accent-foreground rounded-xl text-xs font-medium hover:opacity-90 transition-opacity"
        >
          Қабылдау
        </button>
        <button
          onClick={decline}
          className="flex-1 py-2 bg-secondary border border-border text-muted-foreground rounded-xl text-xs font-medium hover:text-foreground transition-colors"
        >
          Бас тарту
        </button>
      </div>
    </div>
  )
}
