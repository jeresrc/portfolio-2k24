import { Footer, Header, TabBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Merriweather } from 'next/font/google'
import localFont from 'next/font/local'

interface IProps {
  children: React.ReactNode
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  variable: '--font-merriweather',
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
  title: 'jeresc - Front End Developer',
  description:
    'Jeremias Soruco is a Front End Developer based in Buenos Aires, Argentina.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'jeresc - Front End Developer',
    description:
      'Jeremias Soruco is a Front End Developer based in Buenos Aires, Argentina.',
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

export default function RootLayout({ children }: IProps) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${merriweather.variable} ${monaSans.variable} dark`}
    >
      <body className='bg-white transition-colors duration-700 dark:bg-[#121212]'>
        <Header />
        <main className='mx-auto max-w-7xl p-4'>{children}</main>
        <div className='m-96 min-h-screen' />
        <TabBar />
        <Footer />
      </body>
    </html>
  )
}
