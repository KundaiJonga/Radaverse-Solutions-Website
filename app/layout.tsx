import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Radaverse Solutions | Innovative Technology Solutions',
  description: 'Radaverse Solutions Private Limited - Building innovative technology solutions for businesses. Discover OceanKart, our flagship bulky water delivery platform.',
  keywords: ['Radaverse Solutions', 'OceanKart', 'water delivery', 'technology', 'Zimbabwe', 'logistics'],
  authors: [{ name: 'Radaverse Solutions' }],
  openGraph: {
    title: 'Radaverse Solutions | Innovative Technology Solutions',
    description: 'Building innovative technology solutions for businesses. Discover OceanKart, our flagship bulky water delivery platform.',
    type: 'website',
    siteName: 'Radaverse Solutions',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1f2e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
