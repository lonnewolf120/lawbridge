import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
            href={'/'}
            >
            <Image
              src="/logo2.png"
              alt="LawBridge Logo"
              width={40}
              height={40}
              className="rounded"
            />
            </Link>
            <Link href='/'>
            <span className="font-serif">LawBridge</span></Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="relative hover:text-black-600 transition duration-300">
            <span className="border-b-2 border-transparent hover:border-black transition duration-300">Home</span>
          </Link>
          <Link href="/find-lawyers" className="relative hover:text-black transition duration-300">
            <span className="border-b-2 border-transparent hover:border-black transition duration-300">Find Lawyers</span>
          </Link>
          <Link href="/legal-assistant" className="relative hover:text-black transition duration-300">
            <span className="border-b-2 border-transparent hover:border-black transition duration-300">Legal Assistant</span>
          </Link>
          <Link href="/progress" className="relative hover:text-black transition duration-300">
            <span className="border-b-2 border-transparent hover:border-black transition duration-300">Progress Tracker</span>
          </Link>
          <Link href="/education" className="relative hover:text-black transition duration-300">
            <span className="border-b-2 border-transparent hover:border-black transition duration-300">Education Hub</span>
          </Link>
          </nav>
            <Button className="bg-amber-200 hover:bg-amber-400 text-black text-base">Login</Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-white mb-4">Law Bridge</h3>
              <p className="text-sm">Your trusted partner in legal solutions</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Contact</h4>
              <p className="text-sm">Email: info@lawbridge.com</p>
              <p className="text-sm">Phone: +8801311962091</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-4">Address</h4>
              <p className="text-sm">688/9A Mirpur DOHS, Mirpur</p>
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

