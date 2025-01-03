import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, BookOpen, Calendar, FileText, MessageSquare } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Hearings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <Link href="/cases/hearings">
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
            <Link href="/cases">
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
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="h-6 w-6" />
          <span>Chat with Legal Assistant</span>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2" variant="outline">
          <Calendar className="h-6 w-6" />
          <span>Schedule Appointment</span>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2" variant="outline">
          <FileText className="h-6 w-6" />
          <span>Submit Document</span>
        </Button>
        <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2" variant="outline">
          <BookOpen className="h-6 w-6" />
          <span>Browse Resources</span>
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
