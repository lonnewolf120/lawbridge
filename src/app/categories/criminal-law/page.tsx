import { CourseCard } from "@/components/course/course-card"
import Link from "next/link"

const criminalLawCourses = [
  { 
    id: "criminal-procedure",
    title: "Criminal Procedure in Bangladesh", 
    description: "Gain a comprehensive understanding of criminal procedure in Bangladesh. This course covers arrest, bail, trial processes, and appeals in the criminal justice system.",
    imageId: 1,
    price: 99.99
  },
  { 
    id: "penal-code",
    title: "Bangladesh Penal Code: In-depth Analysis", 
    description: "Explore the Bangladesh Penal Code in detail. This course covers major offenses, defenses, and recent amendments to the code.",
    imageId: 2,
    price: 89.99
  },
  { 
    id: "evidence-law",
    title: "Law of Evidence in Criminal Cases", 
    description: "Master the rules of evidence in criminal proceedings. Learn about admissibility, relevance, and the presentation of evidence in Bangladeshi courts.",
    imageId: 3,
    price: 79.99
  },
  { 
    id: "cybercrime",
    title: "Cybercrime and Digital Forensics", 
    description: "Understand the legal framework surrounding cybercrimes in Bangladesh. This course covers investigation techniques, digital evidence, and prosecution of cyber offenses.",
    imageId: 4,
    price: 69.99
  },
  { 
    id: "juvenile-justice",
    title: "Juvenile Justice System", 
    description: "Learn about the specialized legal system for minors in conflict with the law. This course covers juvenile courts, rehabilitation programs, and child rights in the criminal justice system.",
    imageId: 5,
    price: 59.99
  }
]

export default function CriminalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Criminal Law Courses</h1>
        <p className="text-xl mb-8 text-border-600">
          Delve into the complexities of criminal law in Bangladesh. Our courses offer comprehensive knowledge for legal professionals, law enforcement officers, and anyone interested in understanding the criminal justice system.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criminalLawCourses.map((course) => (
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

