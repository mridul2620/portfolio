import './globals.css'
import type { Metadata } from 'next'
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

/**
 * Syne — geometric display font, futuristic energy for headings
 * Inter — industry-standard UI body font, supremely readable
 * JetBrains Mono — premium developer monospace for code/labels
 */
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-mridulsriv.vercel.app'),

  title: 'Mridul Srivastava | Full Stack Developer',

  description:
    'Full Stack Developer specializing in scalable web applications and backend systems using React, Next.js, Node.js, Java, and modern system design.',

  keywords: [
    'Full Stack Developer',
    'Backend Engineer',
    'Java',
    'Spring Boot',
    'Node.js',
    'Next.js',
    'React',
    'System Design',
  ],

  authors: [{ name: 'Mridul Srivastava' }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Mridul Srivastava | Full Stack Developer',
    description:
      'Developer portfolio showcasing scalable systems and modern web applications.',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mridul Srivastava | Full Stack Developer',
    description:
      'Developer portfolio showcasing scalable systems and modern web applications.',
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
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
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