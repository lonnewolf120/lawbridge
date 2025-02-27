'use client'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Briefcase, Calendar, FileText, MessageSquare, LogOut, ChartCandlestick } from 'lucide-react'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, scaleUp } from "@/lib/animation"

export default function DashboardPage() {
  const router = useRouter()
  const cookies = parseCookies()
  const user = cookies.user ? JSON.parse(cookies.user) : null
  const logOut = () => {
    destroyCookie(null, 'token', { path: '/' })
    destroyCookie(null, 'user', { path: '/' })
    router.push('/auth/login')
  }
  useEffect(() => {
    if (!cookies.token) {
      router.push('/auth/login')
    }
  }, [cookies])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="container mx-auto py-12 px-4 bg-gradient-to-tl bg-primary-50"
    >
      {user ?
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
            className='flex justify-between items-center mb-8'
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold text-primary-900"
            >
              Your Dashboard
            </motion.h1>
            <Button className="m-4 flex items-end text-red-500"
              onClick={logOut}
            >
              Logout
              <LogOut className="h-4 w-4 bg-red" />
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Personal Info</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.username ?? ''}</div>
                <p className="text-1xl text-muted-foreground">{user.email ?? ''}</p>
              </CardContent>
            </Card>
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
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8"
          >
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
          </motion.div>
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
        </>
        :
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col items-center justify-center h-full py-12 px-4 bg-gradient-to-tl bg-primary-50"
        >
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Please login or signup to view your dashboard</h2>
          <Button onClick={() => router.push('/auth/login')} className="mb-4">
            Login
          </Button>
          <div className="w-full max-w-sm">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-4"></div>
            </div>
          </div>
        </motion.div>
      }
    </motion.div>
  )
}