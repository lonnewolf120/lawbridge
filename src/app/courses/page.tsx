import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Nav } from "@/components/nav"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
  { name: "Personal Law", description: "Marriage, divorce, inheritance" },
  { name: "Business Law", description: "Contracts, compliance, IP" },
  { name: "Criminal Law", description: "Procedures, rights, defenses" },
  { name: "Civil Law", description: "Property disputes, tenant rights" },
  { name: "Legal Writing", description: "Documentation and reports" },
  { name: "International Law", description: "Immigration, cross-border" },
]

const featuredCourses = [
  {
    title: "Understanding Tenant Rights in Bangladesh",
    description: "Learn about your rights and responsibilities as a tenant or landlord.",
    duration: "4 hours",
    level: "Beginner",
    category: "Civil Law"
  },
  {
    title: "Business Contract Essentials",
    description: "Master the fundamentals of business contract law and drafting.",
    duration: "6 hours",
    level: "Intermediate",
    category: "Business Law"
  },
  {
    title: "Criminal Justice Fundamentals",
    description: "Understand the basics of criminal law and procedure.",
    duration: "8 hours",
    level: "Beginner",
    category: "Criminal Law"
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <Nav /> */}
      
      {/* Header Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black to-slate-900 text-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Law Courses
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-300">
            Empower yourself with legal knowledge at your own pace
          </p>
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-8">
            <Input 
              placeholder="Search for courses..." 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
              Search Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-12 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Browse Courses</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Most Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Duration: {course.duration}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Tracker Preview */}
      <section className="px-4 py-12 bg-brown-50">
        <div className="flex flex-col items-center container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Track Your Progress</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Your Learning Journey</CardTitle>
              <CardDescription className="mb-6">Sign in to track your progress and earn certificates

                
                <Link href={'/auth/login'}> 
              <Button className="w-1/2  bg-yellow-500 text-black hover:bg-yellow-400">
                Sign In to Start Learning
              </Button>
              </Link>  
              </CardDescription>
            </CardHeader>
            {/* <CardFooter> */} 
            {/* </CardFooter> */}
          </Card>
        </div>
      </section>
    </div>
  )
}

