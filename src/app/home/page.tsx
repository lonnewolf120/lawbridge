import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calendar, FileText, MessageSquare, Search, User } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Shalish</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Legal Assistant
            </CardTitle>
            <CardDescription>Get help with your legal questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/legal-assistant">
              <Button className="w-full bg-primary-100 hover:bg-primary-200 text-black text-base">
                Chat Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Lawyers
            </CardTitle>
            <CardDescription>Search for qualified legal professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/find-lawyers">
              <Button className="w-full bg-secondary-100 hover:bg-secondary-400 text-black text-base">
                Search Lawyers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </CardTitle>
            <CardDescription>Schedule a meeting with a lawyer</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/book-appointment">
              <Button className="w-full bg-red-100 hover:bg-red-400 text-black text-base">
                Book Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Education Hub
            </CardTitle>
            <CardDescription>Learn about legal topics</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/education-hub">
              <Button className="w-full  bg-red-100 hover:bg-red-400 text-black text-base">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Articles
            </CardTitle>
            <CardDescription>Read our latest articles</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/blog">
              <Button className="w-full bg-secondary-200 hover:bg-secondary-500 text-black text-base">
                View Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              My Profile
            </CardTitle>
            <CardDescription>Manage your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/profile">
              <Button className="w-full  bg-secondary-100 hover:bg-secondary-300 text-black text-base">
                View Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
