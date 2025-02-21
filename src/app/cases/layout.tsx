import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { Sidebar } from '@/components/case-sidebar'
// import Layout from '@/components/Navbar'
import { Providers } from '../../providers';

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
    <div lang="en">
      <div className={inter.className}>
      <Providers>
        {/* <Layout> */}
        <div className="flex h-screen">
          <Sidebar />
          {children}
        </div>
        {/* </Layout> */}
      </Providers>
      </div>
    </div>
  )
}
