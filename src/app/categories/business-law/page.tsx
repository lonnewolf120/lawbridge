import { CourseCard } from "@/components/course/course-card"
import Link from "next/link"

const businessLawCourses = [
  { 
    id: "contract-law",
    title: "Contract Law and Negotiation", 
    description: "Master the art of drafting and negotiating contracts in the Bangladeshi business context. This course covers contract formation, terms, breach, and remedies.",
    imageId: 1,
    price: 109.99
  },
  { 
    id: "company-law",
    title: "Company Law and Corporate Governance", 
    description: "Understand the legal framework governing companies in Bangladesh. Learn about company formation, shareholder rights, and corporate governance best practices.",
    imageId: 2,
    price: 99.99
  },
  { 
    id: "intellectual-property",
    title: "Intellectual Property Rights", 
    description: "Explore the world of patents, trademarks, and copyrights in Bangladesh. This course covers IP registration, protection, and enforcement strategies.",
    imageId: 3,
    price: 89.99
  },
  { 
    id: "labor-law",
    title: "Labor Law and Employee Rights", 
    description: "Gain a comprehensive understanding of labor laws in Bangladesh. This course covers employment contracts, workplace safety, and dispute resolution mechanisms.",
    imageId: 4,
    price: 79.99
  },
  { 
    id: "tax-law",
    title: "Taxation Law for Businesses", 
    description: "Navigate the complex world of business taxation in Bangladesh. Learn about corporate tax, VAT, and international tax considerations for businesses.",
    imageId: 5,
    price: 69.99
  }
]

export default function BusinessLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Business Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Master the legal aspects of running a business in Bangladesh. Our business law courses provide essential knowledge for entrepreneurs, managers, and legal professionals working in the corporate sector.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLawCourses.map((course) => (
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

