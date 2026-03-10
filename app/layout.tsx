import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-mridulsriv.vercel.app'),

  title: 'Mridul Srivastava | Full Stack & Backend Engineer',

  description:
    'Full Stack and Backend Developer specializing in scalable web applications using Java, Node.js, Next.js and modern system design.',

  keywords: [
    'Full Stack Developer',
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'Node.js',
    'Next.js',
    'System Design',
  ],

  authors: [{ name: 'Mridul Srivastava' }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Mridul Srivastava | Full Stack & Backend Engineer',
    description:
      'Developer portfolio showcasing scalable backend systems and modern web applications.',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mridul Srivastava | Full Stack & Backend Engineer',
    description:
      'Developer portfolio showcasing scalable backend systems and modern web applications.',
  },

  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div id="scroll-root" className="min-h-[calc(100vh-4rem)]">
            {children}
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}