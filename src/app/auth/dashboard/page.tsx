'use client'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, BookOpen, Calendar, FileText, MessageSquare, LogOut,ChartCandlestick } from 'lucide-react'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


export default function DashboardPage() {
  const router = useRouter()
  const cookies = parseCookies()
  const logOut = () => {
    destroyCookie(null, 'token', {path: '/'})
    destroyCookie(null, 'user', {path: '/'})
    router.push('/auth/login')
  }
    useEffect(() => {
      if (!cookies.token) {
        router.push('/auth/login')
      }
    }, [cookies])

  return (
    <div className="container mx-auto py-12 px-4 bg-gradient-to-tl bg-primary-50">
      <div className='flex justify-between items-center mb-8'>
      <h1 className="text-4xl font-bold text-primary-900">Your Dashboard</h1>
      <Button className="m-4 flex items-end text-red-500"
      onClick={logOut}
      >
        Logout
        <LogOut className="h-4 w-4 bg-red" />
      </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Hearings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <Link href="/auth/cases/hearings">
              <Button variant="link" className="p-0">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2</p>
            <Link href="/auth/cases">
              <Button variant="link" className="p-0">
                View Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={60} className="mb-2" />
            <p className="text-sm text-muted-foreground">60% Complete</p>
            <Link href="/courses">
              <Button variant="link" className="p-0">
                Continue Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-primary-700">
          <MessageSquare className="h-6 w-6" />
          <Link href='/legal-assistant'>
          <span>Chat with Legal Assistant</span>
          </Link>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-primary-500 text-accent-600" variant="outline">
          <Calendar className="h-6 w-6" />
          <Link href='/find-lawyers'>
          <span>Find Lawyer</span>
          </Link>
        </Button>
        <Button className="h-auto text-accent-600 py-4 flex flex-col items-center justify-center gap-2 bg-secondary-300" variant="outline">
          <ChartCandlestick className="h-6 w-6" />
          <Link href='/auth/cases/progress'>
          <span>Progress</span></Link>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-primary-200" variant="outline">
          <FileText className="h-6 w-6" />
          <Link href='/blog'>
          <span>Browse Articles</span></Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Appointment with Lawyer John Doe</span>
              <span className="text-sm text-muted-foreground">2 days ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Submitted document for review</span>
              <span className="text-sm text-muted-foreground">5 days ago</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Completed "Introduction to Contract Law" course</span>
              <span className="text-sm text-muted-foreground">1 week ago</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}