
import { CourseCard } from "@/components/course/course-card"
import Link from "next/link"

const legalWritingCourses = [
  { 
    id: "legal-drafting",
    title: "Legal Drafting: Contracts and Agreements", 
    description: "Master the art of drafting clear and effective legal documents. This course covers contract drafting, clauses, and best practices in legal writing.",
    imageId: 1,
    price: 89.99
  },
  { 
    id: "legal-research",
    title: "Legal Research and Citation", 
    description: "Learn advanced legal research techniques and proper citation methods. This course covers both online and offline research resources relevant to Bangladesh law.",
    imageId: 2,
    price: 79.99
  },
  { 
    id: "legal-correspondence",
    title: "Professional Legal Correspondence", 
    description: "Improve your skills in writing professional legal letters, emails, and memos. This course focuses on clarity, precision, and etiquette in legal communication.",
    imageId: 3,
    price: 69.99
  },
  { 
    id: "legal-analysis",
    title: "Legal Analysis and Writing", 
    description: "Develop your ability to analyze legal issues and present arguments effectively. This course covers case briefs, legal memoranda, and opinion writing.",
    imageId: 4,
    price: 59.99
  },
  { 
    id: "advocacy-writing",
    title: "Advocacy Writing for Court", 
    description: "Master the art of writing persuasive legal documents for court proceedings. This course covers pleadings, motions, and appellate briefs.",
    imageId: 5,
    price: 49.99
  }
]

export default function LegalWritingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Legal Writing Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Enhance your legal writing skills with our specialized courses. Whether you're a law student, practicing lawyer, or legal professional, these courses will help you communicate more effectively in the legal field.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalWritingCourses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <CourseCard
                title={course.title}
                description={course.description}
                imageId={course.imageId}
                price={course.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

