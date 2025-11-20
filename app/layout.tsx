import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import React, { useState, useEffect } from 'react'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chaos Zero Nightmare Deck Tracker',
  description: 'Track your progress through the ongoing nightmare',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Accessibility theme state (persisted in localStorage)
  const [accessibilityMode, setAccessibilityMode] = useState(false)
  useEffect(() => {
    const stored = localStorage.getItem('accessibilityMode')
    if (stored === 'true') setAccessibilityMode(true)
  }, [])
  useEffect(() => {
    if (accessibilityMode) {
      document.body.classList.add('accessibility-theme')
    } else {
      document.body.classList.remove('accessibility-theme')
    }
    localStorage.setItem('accessibilityMode', accessibilityMode ? 'true' : 'false')
  }, [accessibilityMode])

  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <div className="w-full flex justify-start pt-2 pb-2 pl-4 z-50 sticky top-0 bg-transparent">
          <button
            aria-label={accessibilityMode ? 'Disable Accessibility Theme' : 'Enable Accessibility Theme'}
            onClick={() => setAccessibilityMode((prev) => !prev)}
            className={`px-2 py-1 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#19F7E1] shadow-md
              ${accessibilityMode
                ? 'bg-[#222] text-[#FFD700] border border-[#FFD700] hover:bg-[#333]'
                : 'bg-[#19F7E1] text-[#0A0B0F] border border-[#19F7E1] hover:bg-[#5B1FAF] hover:text-white'}
            `}
            style={{ fontSize: accessibilityMode ? '1rem' : '0.9rem', letterSpacing: accessibilityMode ? '0.03em' : 'normal' }}
          >
            {accessibilityMode ? 'Accessibility Theme: ON' : 'Accessibility Theme: OFF'}
          </button>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
