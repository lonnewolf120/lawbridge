'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import {parseCookies} from 'nookies'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/find-lawyers', label: 'Find Lawyers' },
  { href: '/legal-assistant', label: 'Legal Assistant' },
  // { href: '/auth/cases', label: 'Cases' },
  { href: '/courses', label: 'Learn' },
  { href: '/templates', label: 'Templates' },
  { href: '/blog', label: 'Articles' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const cookies = parseCookies()

  useEffect(() => {
    if(typeof window === 'undefined') return
    if(cookies){
      console.log("Cookies found", cookies, typeof cookies, cookies.token)
      
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] h-16  px-6 rounded-md shadow-md top-0 z-50 transition-all duration-300 backdrop-blur-md shadow-md ${isScrolled ? 'bg-primary-50/10' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/logo2.png"
                alt="Shalish Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="font-serif text-xl">Shalish</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-md font-medium transition-colors hover:text-primary hover:border-black hover:text-xl transition duration-300 ${
                    pathname === item.href ? 'text-primary text-xl' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              {cookies.token !== null ?
              <Link href={'/auth/dashboard'}> <Button className="w-full bg-primary-200 hover:bg-primary-400 text-black text-base">Dashboard</Button>
              </Link>
              :
              <Link href={'/auth/login'}> <Button className="w-full bg-primary-200 hover:bg-primary-400 text-black text-base">Login</Button>
              </Link>
              }
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="md:hidden p-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-xl">Shalish</span>
                      <SheetTrigger asChild>
                        <Button variant="ghost" className="p-2">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>
                    </div>
                    <nav className="flex flex-col gap-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`text-sm font-medium transition-colors hover:text-primary ${
                            pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto">
                     {cookies.token !== null ?
                     <Link href={'/auth/dashboard'}> <Button className="w-full bg-primary-200 hover:bg-primary-400 text-black text-base">Dashboard</Button>
                     </Link>
                     :
                     <Link href={'/auth/login'}> <Button className="w-full bg-primary-200 hover:bg-primary-400 text-black text-base">Login</Button>
                     </Link>
                     
                     }
                     {/* <Link href={'tel:+8801776225423'}> <Button className="w-full bg-primary-200 hover:bg-primary-400 text-black text-base">Contact us</Button>
                     </Link> */}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 mt-12">{children}</div>
      <footer className="bg-gray-900 text-border-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-white mb-4">Shalish</h3>
              <p className="text-sm">Your trusted partner in legal solutions</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Contact</h4>
              <p className="text-sm">Email: executive@shalish.xyz</p>
              <p className="text-sm">Phone: +8801311962091</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Address</h4>
              <p className="text-sm">123 Legal Street</p>
              <p className="text-sm">Dhaka, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">Twitter</Link>
                <Link href="#" className="hover:text-white">LinkedIn</Link>
                <Link href="#" className="hover:text-white">Facebook</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

