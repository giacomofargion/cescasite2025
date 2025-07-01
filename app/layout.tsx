import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francesca Fargion',
  description: 'Official website of Francesca Fargion',
  generator: 'Francesca Fargion',
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
