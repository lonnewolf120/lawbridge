import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/Navbar'
// import { ThemeProvider } from '@/contexts/theme-context'

import { Toaster } from "@/components/ui/toaster" 
import {Providers} from "./providers";
import Footer from '@/components/Footer';
import { Divide } from 'lucide-react';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shalish সালিশ - Legal aid for all. Your Trusted Legal Partner',
  description: 'Find lawyers, book appointments, get real-time legal help from us. Professional legal services made simple and accessible. Get expert legal advice and representation from Shalish, your trusted legal partner.',
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
          <Layout>
            <div className="flex flex-grow h-screen">
            {children}
            </div>
            <Divide className="w-full h-1 bg-gray-100" />
        {/*   <Footer/> */}
          </Layout><Toaster />
        </Providers>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

