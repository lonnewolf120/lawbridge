import Link from 'next/link'
import { Home, FileText, Calendar, Lightbulb, UserPlus } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/auth/dashboard', icon: Home },
  { name: 'File a Case', href: '/cases/file', icon: FileText },
  { name: 'My Cases', href: '/cases', icon: FileText },
  { name: 'Upcoming Hearings', href: '/cases/hearings', icon: Calendar },
  { name: 'Legal Tips', href: '/cases/tips', icon: Lightbulb },
  { name: 'Find a Lawyer', href: '/find-lawyers', icon: UserPlus },
]

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-full p-4">
      <h1 className="text-2xl font-bold mb-8">Legal Case Manager</h1>
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

