import './globals.css'
import localFont from 'next/font/local'

import type { Metadata } from 'next'

// Metadata
export const metadata: Metadata = {
  title: 'Kuldar Kalvik',
  description:
    'My little corner of the web. Work, projects and random thoughts.',
}

// Satoshi
const satoshi = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  display: 'swap',
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
      <body className="h-full w-full overflow-x-hidden bg-gray-1000 text-white selection:bg-green-400 selection:text-gray-900">
        {children}
      </body>
    </html>
  )
}
