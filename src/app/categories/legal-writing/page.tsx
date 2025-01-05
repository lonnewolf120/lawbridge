
import { CourseCard } from "@/components/course/course-card"
const legalWritingCourses = [
    { title: "Drafting a Legal Contract", description: "Template-based course for writing effective contracts.", image: "contract.jpg" },
    { title: "Complaint Writing: Civil and Criminal Cases", description: "Step-by-step guide to drafting a complaint.", image: "complaint.jpg" },
    { title: "Drafting Wills and Testaments", description: "Writing a legally valid will.", image: "wills.jpg" },
    { title: "Legal Research and Citation Methods", description: "How to conduct legal research and cite references properly.", image: "research.jpg" },
    { title: "Report Writing for Legal Professionals", description: "Crafting professional and concise legal reports.", image: "report.jpg" }
]

export default function LegalWritingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Legal Writing & Documentation Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalWritingCourses.map((course) => (
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

