import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kahler Driver',
  description: 'Kahler Driver application',
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
