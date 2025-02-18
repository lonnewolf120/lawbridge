import Link from "next/link"
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-semibold">
          <Image
            src="/logo2.png"
            alt="Shalish Logo"
            width={40}
            height={40}
            className="rounded"
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/find-lawyers" className="text-sm font-medium">
            Find Lawyer
          </Link>
          <Link href="/legal-assistant" className="text-sm font-medium">
            Legal Assistant
          </Link>
          <Link href="/medical" className="text-sm font-medium">
            Dashboard
          </Link>
          {/* <Link href="/ask" className="text-sm font-medium">
            Ask
          </Link> */}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline">Choose User</Button>
        <Button variant="destructive" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Alert
        </Button>
      </div>
    </nav>
  )
}
