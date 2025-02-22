import Link from 'next/link'
import { Home, FileText, Calendar, Lightbulb, UserPlus ,ChartCandlestick, ScrollText} from 'lucide-react'
import { parseCookies } from 'nookies'

export function Sidebar() {
  const cookies = parseCookies()
  const lawyer = cookies.lawyer ? JSON.parse(cookies.lawyer) : null

  const navItems = [
    { name: 'Dashboard', href:( lawyer!== null ? '/lawyer/dashboard' : '/auth/cases/dashboard'), icon: Home },
    { name: 'File a Case', href: '/auth/cases/file', icon: FileText },
    { name: 'My Cases', href: '/auth/cases', icon: ScrollText },
    { name: 'Progress Tracker', href: '/auth/cases/progress', icon: ChartCandlestick },
    { name: 'Upcoming Hearings', href: '/auth/cases/hearings', icon: Calendar },
    { name: 'Find a Lawyer', href: '/find-lawyers', icon: UserPlus },
  ]
  
  return (
    <div className="w-64 bg-primary-50 border-xl border-primary rounded-xl h-full p-4 mt-12 py-4 mx-4">
      {/* <h1 className="text-2xl font-bold mb-8">Legal Case Manager</h 1> */}
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
                <Link href={item.href} className="flex items-center p-2 rounded hover:bg-gray-200">
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

