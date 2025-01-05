import { CourseCard } from "@/components/course/course-card"
import Link from "next/link"

const civilLawCourses = [
  { 
    id: "property-law",
    title: "Property Law and Land Rights", 
    description: "Understand the complexities of property law in Bangladesh. This course covers land registration, transfer of property, and dispute resolution mechanisms.",
    imageId: 1,
    price: 99.99
  },
  { 
    id: "civil-procedure",
    title: "Civil Procedure Code: A Comprehensive Study", 
    description: "Master the Civil Procedure Code of Bangladesh. Learn about filing suits, court procedures, and the appeals process in civil cases.",
    imageId: 2,
    price: 89.99
  },
  { 
    id: "tort-law",
    title: "Tort Law and Civil Liabilities", 
    description: "Explore the principles of tort law in Bangladesh. This course covers negligence, defamation, nuisance, and other civil wrongs.",
    imageId: 3,
    price: 79.99
  },
  { 
    id: "contract-disputes",
    title: "Contract Disputes and Remedies", 
    description: "Learn how to handle contract disputes in civil courts. This course covers breach of contract, damages, and alternative dispute resolution methods.",
    imageId: 4,
    price: 69.99
  },
  { 
    id: "consumer-protection",
    title: "Consumer Protection Laws", 
    description: "Understand the legal framework for consumer protection in Bangladesh. This course covers consumer rights, product liability, and redressal mechanisms.",
    imageId: 5,
    price: 59.99
  }
]

export default function CivilLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Civil Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Explore the intricacies of civil law in Bangladesh. Our courses provide essential knowledge for legal professionals, aspiring lawyers, and individuals interested in understanding their rights and obligations in civil matters.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {civilLawCourses.map((course) => (
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

