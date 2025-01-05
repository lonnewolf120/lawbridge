
import { CourseCard } from "@/components/course/course-card"

const civilLawCourses = [
  { 
    title: "Property Dispute Laws and Procedures", 
    description: "Handling land disputes and understanding ownership rights.",
    image: "property-disputes"
  },
  { 
    title: "Tenant and Landlord Rights", 
    description: "Legal framework for rental agreements and dispute resolution.",
    image: "tenant-landlord"
  },
  { 
    title: "Filing a Civil Case: A Beginner's Guide", 
    description: "Steps to initiate and proceed with a civil case.",
    image: "filing-civil-case" 
  },
  { 
    title: "Consumer Protection Laws", 
    description: "Rights as a consumer and addressing grievances with vendors.",
    image: "consumer-protection"
  },
  { 
    title: "Handling Breach of Agreements", 
    description: "Legal remedies for broken agreements in civil matters.",
    image: "breach-of-agreement" 
  }
]


export default function CivilLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Civil Law Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {civilLawCourses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </main>
    </div>
  )
}