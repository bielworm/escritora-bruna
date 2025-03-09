import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import 'swiper/css/bundle'
import '../styles/index.scss'
const inter = Inter({ subsets: ['latin'] })
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Bruna Leite',
  description:
    'Este é o meu canto, onde as palavras encontram abrigo e os sentimentos se desenham em versos.',
  keywords: ['leitura', 'poesia', 'escritora', 'versos', 'escrita'],
  openGraph: {
    title: 'Bruna Leite',
    description:
      'Este é o meu canto, onde as palavras encontram abrigo e os sentimentos se desenham em versos.',
    images: [
      {
        url: '/seo-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Este é o meu canto, onde as palavras encontram abrigo e os sentimentos se desenham em versos.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bruna Leite',
    description:
      'Este é o meu canto, onde as palavras encontram abrigo e os sentimentos se desenham em versos.',
    images: ['/seo-image.jpg'], // Mesma imagem usada para Open Graph
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-V7KJF6JS26`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-V7KJF6JS26');
            `,
          }}
        /> */}

        <link
          rel="stylesheet"
          href={`https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css`}
        />
        <script
          async
          src={`https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js`}
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Delius&display=swap"
          rel="stylesheet"
        />
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
      </body>
    </html>
  )
}
