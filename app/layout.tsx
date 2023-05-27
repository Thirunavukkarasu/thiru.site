import '../styles/global.css'

import { Metadata } from 'next'
import { Providers } from './providers'
import Navbar from 'ui/navbar'
import { Analytics } from '@/ui/analytics'
import Footer from './footer'

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
      <body>
        <Providers>
          <Navbar />
          <div className="mb-10 border-b"></div>
          <div className="mx-auto min-h-screen max-w-5xl">{children}</div>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
