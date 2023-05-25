import '../styles/global.css'

import { Metadata } from 'next'
import { Providers } from './providers'
import Navbar from 'ui/navbar'
import { Analytics } from '@/ui/analytics'

export const metadata: Metadata = {
  title: {
    default: 'Thirunavukkarasu',
    template: '%s | Thirunavukkarasu',
  },
  description: 'Developer, Engineering Leader, and Dad.',
  keywords: [
    'Thirunavukkarasu',
    'Full Stack Developer',
    'Engineering Leader',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
  ],
  authors: [
    {
      name: 'thirunavukkarasu',
      url: 'https://thirunavukkarasu.com',
    },
  ],
  creator: 'thirunavukkarasu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="mx-auto max-w-5xl">
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
