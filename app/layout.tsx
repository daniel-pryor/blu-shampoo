import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blu.',
  description: 'Landing page for anti dandruff shampoo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
