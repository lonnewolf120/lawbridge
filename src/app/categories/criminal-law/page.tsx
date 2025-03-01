
import { CourseCard } from "@/components/course/course-card"

const criminalLawCourses = [
  {
    id: "criminal-procedure",
    title: "Criminal Procedure in Bangladesh",
    description: "Comprehensive study of criminal procedures, including arrest, bail, and trial processes.",
    imageId: 1,
    content: `The criminal procedure in Bangladesh is primarily governed by the Code of Criminal Procedure, 1898 (CrPC), which provides a comprehensive framework for the conduct of criminal trials. This colonial-era law, with subsequent amendments, continues to be the backbone of criminal proceedings in the country. The CrPC outlines procedures for investigation, arrest, bail, trial, and appeal in criminal cases.`,
    resources: [
      { type: "document", name: "Code of Criminal Procedure, 1898" },
      { type: "document", name: "Evidence Act, 1872" },
    ],
  },
  {
    id: "penal-code",
    title: "Bangladesh Penal Code: In-depth Analysis",
    description: "Detailed exploration of major offenses, defenses, and recent amendments to the Penal Code.",
    imageId: 2,
    content: `The Bangladesh Penal Code, originally enacted in 1860 during the British colonial era, remains the primary criminal code of Bangladesh. This comprehensive legislation defines various criminal offenses and prescribes punishments for them. Despite its colonial origins, the Penal Code has undergone several amendments to adapt to the changing social and legal landscape of Bangladesh.`,
    resources: [
      { type: "document", name: "Bangladesh Penal Code, 1860" },
      { type: "document", name: "Information and Communication Technology Act, 2006" },
      { type: "document", name: "Anti-Terrorism Act, 2009" },
    ],
  },
  {
    id: "evidence-law",
    title: "Law of Evidence in Criminal Cases",
    description: "Master the rules of evidence in criminal proceedings in Bangladeshi courts.",
    imageId: 3,
    content: `The law of evidence in criminal cases in Bangladesh is primarily governed by the Evidence Act, 1872. This Act, inherited from the British colonial era, provides the framework for the admissibility and evaluation of evidence in both civil and criminal proceedings. In criminal cases, the application of evidence law is particularly crucial as it directly impacts the fundamental rights of the accused and the pursuit of justice.`,
    resources: [
      { type: "document", name: "Evidence Act, 1872" },
      { type: "document", name: "Information and Communication Technology Act, 2006" },
    ],
  },
  {
    id: "cybercrime",
    title: "Cybercrime and Digital Forensics",
    description: "Understand the legal framework surrounding cybercrimes in Bangladesh.",
    imageId: 4,
    content: `Cybercrime and digital forensics are increasingly important areas of law and law enforcement in Bangladesh, reflecting the country's rapid digitalization and the growing use of information and communication technologies (ICTs). The legal framework for addressing cybercrime in Bangladesh is primarily based on the Information and Communication Technology Act, 2006 (amended in 2013) and the Digital Security Act, 2018.`,
    resources: [
      { type: "document", name: "Information and Communication Technology Act, 2006" },
      { type: "document", name: "Digital Security Act, 2018" },
      { type: "document", name: "Evidence Act, 1872" },
    ],
  },
  {
    id: "juvenile-justice",
    title: "Juvenile Justice System",
    description: "Learn about the specialized legal system for minors in conflict with the law.",
    imageId: 5,
    content: `The juvenile justice system in Bangladesh is designed to address the unique needs of children in conflict with the law, emphasizing rehabilitation over punishment. The primary legislation governing juvenile justice in Bangladesh is the Children Act, 2013, which replaced the earlier Children Act of 1974. The Children Act, 2013 defines a child as anyone below the age of 18.`,
    resources: [
      { type: "document", name: "Children Act, 2013" },
      { type: "document", name: "UN Convention on the Rights of the Child" },
    ],
  },
]

export default function CriminalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Criminal Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Delve into the complexities of criminal law in Bangladesh. Our courses offer comprehensive knowledge for legal
          professionals, law enforcement officers, and anyone interested in understanding the criminal justice system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criminalLawCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageId={course.imageId}
              content={course.content}
              resources={course.resources}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

