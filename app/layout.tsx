import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forge Protocol',
  description: 'Exclusive content, unlocked by your Farcaster reputation.',
  openGraph: {
    title: 'Forge Protocol',
    description: 'Exclusive content, unlocked by your Farcaster reputation.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
