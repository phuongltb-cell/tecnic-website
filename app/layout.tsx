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
  title: 'TECNIC - Kiến tạo giá trị bằng công nghệ',
  description:
    'TECNIC là tập đoàn công nghệ đa ngành hoạt động trong lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics.',
  keywords: [
    'TECNIC',
    'tập đoàn công nghệ',
    'y tế',
    'năng lượng',
    'vật liệu',
    'khoáng sản',
    'logistics',
    'tecnic.com.vn',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'TECNIC - Kiến tạo giá trị bằng công nghệ',
    description:
      'Tập đoàn công nghệ đa ngành hoạt động trong lĩnh vực y tế, năng lượng, vật liệu, khoáng sản và logistics.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'TECNIC',
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
