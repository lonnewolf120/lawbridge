import { CourseCard } from "@/components/course/course-card"
const criminalLawCourses = [
    { title: "Overview of Criminal Law in Bangladesh", description: "Introduction to the Penal Code and common criminal offenses.", image: "image1" },
    { title: "Understanding Bail and Bond Procedures", description: "Guide to bail applications and requirements.", image: "image2" },
    { title: "Your Rights During an Arrest", description: "Step-by-step explanation of rights when dealing with law enforcement.", image: "image3" },
    { title: "Defending Against False Accusations", description: "Legal strategies to protect against baseless charges.", image: "image4" },
    { title: "Cybercrime and Digital Laws", description: "Legal steps to address online fraud, hacking, and cyber harassment.", image: "image5" }
]

export default function CriminalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Criminal Law Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criminalLawCourses.map((course) => (
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

