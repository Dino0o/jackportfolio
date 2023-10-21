import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jack DeGesero',
  description: 'Created with next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head className={inter.className}>      
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {children}
      </Head>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
