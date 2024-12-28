import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
// import { ThemeProvider } from '@/contexts/theme-context'

import {Providers} from "./providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LawBridge - Your Trusted Legal Partner',
  description: 'Professional legal services made simple and accessible',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

