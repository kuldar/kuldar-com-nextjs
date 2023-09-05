import './globals.css'
import localFont from 'next/font/local'
import meta from '@/utils/meta'
import { ThemeProvider } from '@/components/shared/theme-provider'

import type { Metadata } from 'next'

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL(meta.website.url),
  title: meta.website.title,
  description: meta.website.description,
  openGraph: {
    url: meta.website.url,
    siteName: meta.name,
    images: '/og',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kkuldar',
    creator: '@kkuldar',
  },
}

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
})

// Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full scroll-smooth`}>
      <body className="h-full w-full overflow-x-hidden bg-white text-gray-1000 selection:bg-green-400 selection:text-gray-900 dark:bg-gray-1000 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
