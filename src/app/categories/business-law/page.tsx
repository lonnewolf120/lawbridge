
import { CourseCard } from "@/components/course/course-card"

const businessLawCourses = [
  { title: "Basics of Contract Drafting and Negotiation", description: "Learn to create valid and enforceable business contracts.", image: "contract-drafting" },
  { title: "Corporate Compliance Essentials", description: "Legal responsibilities for startups and small businesses.", image: "corporate-compliance" },
  { title: "Intellectual Property Basics", description: "Protecting trademarks, copyrights, and patents in Bangladesh.", image: "intellectual-property" },
  { title: "Employment Law and Workplace Rights", description: "Understanding employee rights and employer obligations.", image: "employment-law" },
  { title: "Taxation Laws for Businesses", description: "Tax compliance and filing requirements for businesses.", image: "taxation-laws" }
]
export default function BusinessLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Business Law Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLawCourses.map((course) => (
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

