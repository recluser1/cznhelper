import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cznhelper.vercel.app'

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const pathname = params ? `/${params.pathname || ''}` : '/'

  // Default metadata
  const defaultTitle = 'CZN Helper'
  const defaultDescription = 'Chaos Zero Nightmare Helper'

  const getPageMetadata = () => {
    if (pathname.startsWith('/guides')) {
      return {
        title: 'Character Guides | CZN Helper',
        description: 'Find detailed Epiphany guides and Save Data for Chaos Zero Nightmare'
      }
    } else if (pathname.startsWith('/calculator')) {
      return {
        title: 'Save Data Calculator | CZN Helper',
        description: 'Track your progress and calculate Faint Memory points'
      }
    } else if (pathname.startsWith('/about')) {
      return {
        title: 'About | CZN Helper',
        description: 'Learn more about CZN Helper'
      }
    }
    return {
      title: defaultTitle,
      description: defaultDescription
    }
  }

  const { title, description } = getPageMetadata()
  const fullTitle = title === defaultTitle ? title : `${title} | CZN Helper`

  return {
    title: fullTitle,
    description,
    generator: 'v0.app',
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${pathname}`,
      siteName: 'CZN Helper',
      images: [
        {
          url: '/images/unnamed.gif',
          width: 498,
          height: 498,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/images/unnamed.gif'],
      creator: '@luciezinha',
    },
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
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.className} antialiased bg-[#0f0f16]`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}