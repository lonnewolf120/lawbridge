import { CourseCard } from "@/components/course/course-card"
const internationalLawCourses = [
    { title: "Immigration Laws and Visa Processes", description: "Understanding legal steps for immigration and visa applications.", image: "immigration-laws.jpg" },
    { title: "Cross-Border Trade Laws", description: "Legal requirements for international business operations.", image: "cross-border-trade.jpg" },
    { title: "Asylum and Refugee Rights", description: "Rights and legal processes for refugees seeking asylum.", image: "asylum-rights.jpg" },
    { title: "International Human Rights Law", description: "Understanding treaties and laws protecting human rights globally.", image: "human-rights-law.jpg" },
    { title: "Conflict of Laws in Cross-Border Disputes", description: "Handling cases involving jurisdictions of multiple countries.", image: "conflict-of-laws.jpg" }
]

export default function InternationalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">International Law Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalLawCourses.map((course) => (
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

