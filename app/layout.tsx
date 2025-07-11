import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProductFlow – SaaS Landing Template',
  description: "Modern Next.js 15 + Tailwind SaaS landing page boilerplate.",
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
