"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { parseCookies } from "nookies"
import { motion } from "framer-motion"

const navItems = [
  { href: "/find-lawyers", label: "Find Lawyers" },
  { href: "/legal-assistant", label: "Legal Assistant" },
  // { href: "/auth/cases", label: "Cases" },
  { href: "/courses", label: "Learn" },
  { href: "/templates", label: "Templates" },
  { href: "/blog", label: "Articles" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const cookies = parseCookies()
  const lawyer = cookies.lawyer

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen min-w-screen mx-12 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 z-50 w-[90%] h-16 
          px-6 rounded-xl backdrop-blur-md border border-gray-200 shadow-lg
          ${isScrolled ? "bg-primary-30/10" : "bg-white/90"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Link href="/">
                <Image src="/logo2.png" alt="Shalish Logo" width={120} height={120} className="rounded" />
              </Link>
              <Link href="/">
                <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                  Shalish
                </span>
              </Link>
            </motion.div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className={`relative text-md font-medium transition-colors hover:text-primary-600 group`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full h-0.5 w-full bg-primary-600"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                {cookies.token ? (
                  <Link href={lawyer !== null ? "/lawyer/dashboard" : "/auth/cases/dashboard"}>
                    <Button className=" bg-primary-600 hover:bg-primary-700 text-white font-medium">Dashboard</Button>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <Button className=" bg-primary-600 hover:bg-primary-700 text-white font-medium">Login</Button>
                  </Link>
                )}
              </motion.div>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="md:hidden p-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-xl">Shalish</span>
                      {/*<SheetTrigger asChild>
                        <Button variant="ghost" className="p-2">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>*/}
                    </div>
                    <nav className="flex flex-col gap-4">
                      {navItems.map((item) => (
                        <motion.div key={item.href} whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                              pathname === item.href ? "text-primary-600" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                    <div className="mt-auto">
                      {cookies.token ? (
                        <Link href={lawyer !== null ? "/lawyer/dashboard" : "/auth/cases/dashboard"}>
                          <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium">
                            Dashboard
                          </Button>
                        </Link>
                      ) : (
                        <Link href="/auth/login">
                          <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium">
                            Login
                          </Button>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
      <div className="mt-20 w-full h-full">{children}</div>
    </div>
  )
}

