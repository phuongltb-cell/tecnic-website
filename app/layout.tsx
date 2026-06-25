import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tecnic.com.vn'),

  title: {
    default: 'TECNIC - Kiến tạo giá trị bằng công nghệ',
    template: '%s | TECNIC',
  },

  description:
    'TECNIC là tập đoàn công nghệ đa ngành hoạt động trong lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics.',

  keywords: [
    'TECNIC',
    'tecnic.com.vn',
    'tập đoàn công nghệ TECNIC',
    'công nghệ y tế',
    'năng lượng',
    'vật liệu xây dựng',
    'khoáng sản',
    'logistics',
    'TECNIC Medical',
  ],

  authors: [{ name: 'TECNIC' }],
  creator: 'TECNIC',
  publisher: 'TECNIC',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'TECNIC - Kiến tạo giá trị bằng công nghệ',
    description:
      'Tập đoàn công nghệ đa ngành hoạt động trong lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics.',
    url: 'https://tecnic.com.vn',
    siteName: 'TECNIC',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TECNIC - Kiến tạo giá trị bằng công nghệ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TECNIC - Kiến tạo giá trị bằng công nghệ',
    description:
      'TECNIC là tập đoàn công nghệ đa ngành hoạt động trong lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
