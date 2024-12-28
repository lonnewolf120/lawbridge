import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Sidebar } from '@/components/case-sidebar'
import Layout from '@/components/layout'
import { Providers } from '../providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Legal Case Management',
  description: 'Manage your legal cases and hire lawyers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Layout>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
        </Layout>
      </Providers>
      </body>
    </html>
  )
}
