import { CourseCard } from "@/components/course/course-card"
import Link from "next/link"

const internationalLawCourses = [
  { 
    id: "public-international-law",
    title: "Public International Law", 
    description: "Explore the principles and practices of public international law. This course covers international treaties, state responsibility, and dispute resolution mechanisms.",
    imageId: 1,
    price: 109.99
  },
  { 
    id: "international-trade-law",
    title: "International Trade Law", 
    description: "Understand the legal framework governing international trade. This course covers WTO agreements, trade disputes, and Bangladesh's position in global trade.",
    imageId: 2,
    price: 99.99
  },
  { 
    id: "human-rights-law",
    title: "International Human Rights Law", 
    description: "Learn about international human rights standards and their implementation. This course covers major human rights treaties and their impact on Bangladesh.",
    imageId: 3,
    price: 89.99
  },
  { 
    id: "international-arbitration",
    title: "International Arbitration", 
    description: "Master the principles and procedures of international arbitration. This course covers commercial disputes, investment arbitration, and enforcement of awards.",
    imageId: 4,
    price: 79.99
  },
  { 
    id: "immigration-law",
    title: "Immigration and Refugee Law", 
    description: "Understand the legal aspects of immigration and refugee protection. This course covers visa regulations, asylum procedures, and international protection mechanisms.",
    imageId: 5,
    price: 69.99
  }
]

export default function InternationalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">International Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Explore the complexities of international law and its impact on Bangladesh. Our courses offer insights into global legal frameworks, cross-border regulations, and international relations from a legal perspective.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalLawCourses.map((course) => (
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
      </main>
    </div>
  )
}

