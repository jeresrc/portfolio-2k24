import {Footer, Header, TabBar} from '@/components'
import '@/styles/index.css'
import type {Metadata} from 'next'
import {Montserrat, Playfair_Display} from 'next/font/google'
import localFont from 'next/font/local'
import {Analytics} from '@vercel/analytics/react'
import Lenify from '@/components/Lenify'
import {ThemeProvider} from '@/components/ThemeProvider'
import SectionObersver from '@/components/SectionObserver'
import {Suspense} from 'react'

interface IProps {
  children: React.ReactNode
  contact: React.ReactNode
  chatbot: React.ReactNode
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin-ext'],
  variable: '--font-playfair',
})

const monaSans = localFont({
  src: [
    {
      path: '../fonts/Mona-Sans.woff2',
    },
  ],
  variable: '--font-mona-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jeresc.vercel.app/'),
  title: 'jeresc - Front End Developer',
  description:
    'Explore the portfolio of Jeremias Soruco, a full-stack developer based in Buenos Aires, Argentina, showcasing a variety of projects and skills in web development, design, and more.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
    192: '/android-chrome-192x192.png',
    512: '/android-chrome-512x512.png',
  },
  openGraph: {
    title: 'Jeremias Soruco - Portfolio',
    description:
      'Jeremias Soruco, a full-stack developer based in Buenos Aires, Argentina, showcasing a variety of projects and skills in web development, design, and more.',
    type: 'website',
    images: [
      {
        url: 'https://jeresc.vercel.app/og.jpg',
        width: 1200,
        height: 700,
        alt: 'jeresc - Front End Developer',
        type: 'image/jpeg',
      },
    ],
  },
}

export default function RootLayout({children, contact, chatbot}: IProps) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${playfair.variable} ${monaSans.variable}`}
    >
      <body className='bg-white dark:bg-[#121212]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='mx-auto max-w-7xl p-4'>
            {children}
            {contact}
            {chatbot}
          </main>
          <Analytics />
          <TabBar />
          <Footer />
        </ThemeProvider>
      </body>
      <Lenify />
      <SectionObersver />
    </html>
  )
}
