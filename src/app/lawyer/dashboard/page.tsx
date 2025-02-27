'use client'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Briefcase, Calendar, DollarSign, Users, FileText, Clock, LogOut } from 'lucide-react'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer, scaleUp } from "@/lib/animation"

export default function LawyerDashboardPage() {
  const router = useRouter()
  const cookies = parseCookies()
  const user = cookies.user ? JSON.parse(cookies.user) : null
  const lawyer = cookies.lawyer ? JSON.parse(cookies.lawyer) : null

  useEffect(() => {
    if (!cookies.token) {
      router.push('/auth/login')
    }
    if (!cookies.lawyer) {
      router.push('/auth/cases/dashboard')
    }
  }, [cookies])

  const logOut = async () => {
    destroyCookie(null, 'token', { path: '/' })
    destroyCookie(null, 'lawyer', { path: '/' })
    destroyCookie(null, 'user', { path: '/' })
    const cookies = await parseCookies()
    console.log("Cookies after logout", cookies)
    console.log("Logged out")
    router.push('/auth/login')
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="container py-12 m-8"
    >
      {lawyer ? (
        <>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl font-bold mb-8"
          >
            Lawyer Dashboard
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Personal Info</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user?.username ?? ''}</div>
                <p className="text-1xl text-foreground">{user.email ?? ''}</p>
              </CardContent>
            </Card>
            <Link href={'/lawyer/cases'}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
            </Link>
            <Link href={'/lawyer/clients'}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+3 new this month</p>
                </CardContent>
              </Card>
            </Link>
            <Link href={'/lawyer/schedule'}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">For the next 7 days</p>
                </CardContent>
              </Card>
            </Link>
            <Link href={'/lawyer/revenue'}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$15,231</div>
                  <p className="text-xs text-muted-foreground">+20% from last month</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Case Load</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={75} className="mb-2" />
                <p className="text-sm text-muted-foreground">75% of maximum case load</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2">4.8/5.0</div>
                <p className="text-sm text-muted-foreground">Based on 50 reviews</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Case #1234 Brief Due</span>
                    <span className="text-sm text-muted-foreground">2 days</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Case #5678 Court Date</span>
                    <span className="text-sm text-muted-foreground">1 week</span>
                  </li>
                </ul>
                <Link href="/lawyer/deadlines" className="text-sm text-primary hover:underline mt-2 inline-block">
                  View all deadlines
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Updated Case #1234 documents</span>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Client meeting with John Doe</span>
                    <span className="text-sm text-muted-foreground">Yesterday</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Filed motion for Case #5678</span>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Link href="/lawyer/cases/new">
                  <Button className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4 text-primary-400" />
                    <p className='text-primary-50'>File New Case</p>
                  </Button>
                </Link>
                <Link href="/lawyer/clients">
                  <Button className="w-full justify-start bg-primary-100" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    <p className='text-accent-700'>View Client List</p>
                  </Button>
                </Link>
                <Link href="/lawyer/schedule">
                  <Button className="w-full justify-start bg-primary-200" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    <p className='text-accent-700'>Manage Schedule</p>
                  </Button>
                </Link>
                <Link href="/lawyer/deadlines">
                  <Button className="w-full justify-start bg-primary-300" variant="outline">
                    <Clock className="mr-2 h-4 w-4" />
                    <p className='text-accent-700'>View Deadlines</p>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex justify-center gap-4"
          >
            <Link href="/lawyer/cases">
              <Button>
                View All Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button className="p-0 text-red-500 ml-4 p-4" onClick={logOut}>
              Logout
              <LogOut className="ml-2 h-4 w-4 bg-red" />
            </Button>
          </motion.div>
        </>
      ) : (
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
      )}
    </motion.div>
  )
}