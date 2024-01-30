import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Framer RSS Feeds',
  description: 'Generate RSS Feeds for your Framer Site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
