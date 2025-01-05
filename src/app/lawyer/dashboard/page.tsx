import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Briefcase, Calendar, DollarSign, Users, FileText, Clock } from 'lucide-react'

export default function LawyerDashboardPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Lawyer Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+3 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">For the next 7 days</p>
          </CardContent>
        </Card>
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
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Case Load</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="mb-2 " />
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
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
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
                <FileText className="mr-2 h-4 w-4 text-amber-400" />
                <p className='text-amber-400'>File New Case</p> 
              </Button>
            </Link>
            <Link href="/lawyer/clients">
              <Button className="w-full justify-start bg-amber-100" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                View Client List
              </Button>
            </Link>
            <Link href="/lawyer/schedule">
              <Button className="w-full justify-start bg-amber-200" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Manage Schedule
              </Button>
            </Link>
            <Link href="/lawyer/deadlines">
              <Button className="w-full justify-start bg-amber-300" variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                View Deadlines
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Link href="/lawyer/cases">
          <Button>
            View All Cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

