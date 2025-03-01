
import { CourseCard } from "@/components/course/course-card"


const legalWritingCourses = [
  {
    id: "legal-drafting",
    title: "Legal Drafting: Contracts and Agreements",
    description:
      "Master the art of drafting clear and effective legal documents, focusing on contracts and agreements.",
    imageId: 1,
    content: `Legal drafting is a crucial skill for lawyers in Bangladesh, particularly in the context of contracts and agreements. This course covers the principles of clear and effective legal writing, with a focus on the specific requirements of Bangladeshi law. Students will learn the structure and components of various types of contracts, including employment contracts, lease agreements, and business contracts.`,
    resources: [
      { type: "document", name: "Contract Act, 1872" },
      { type: "document", name: "Information and Communication Technology Act, 2006" },
    ],
  },
  {
    id: "legal-research",
    title: "Legal Research and Citation",
    description: "Learn advanced legal research techniques and proper citation methods relevant to Bangladesh law.",
    imageId: 2,
    content: `This course equips students with advanced legal research skills tailored to the Bangladeshi legal system. Participants will learn to navigate both print and digital legal resources, including Bangladeshi law reports, statutes, and secondary sources. The course covers techniques for using legal databases and online resources specific to Bangladesh, as well as international legal databases.`,
    resources: [
      { type: "document", name: "Supreme Court of Bangladesh Citation Guidelines" },
      { type: "document", name: "Bangladesh Code" },
    ],
  },
  {
    id: "legal-correspondence",
    title: "Professional Legal Correspondence",
    description: "Improve your skills in writing professional legal letters, emails, and memos.",
    imageId: 3,
    content: `This course focuses on developing skills in professional legal correspondence within the context of legal practice in Bangladesh. Students will learn the principles of effective communication in various forms of legal writing, including formal letters, emails, and internal memos. The course covers the structure and style of different types of legal correspondence, including demand letters, cease and desist letters, and client communication.`,
    resources: [
      { type: "document", name: "Bangladesh Bar Council Ethics Guidelines" },
      { type: "document", name: "Information and Communication Technology Act, 2006" },
    ],
  },
  {
    id: "legal-analysis",
    title: "Legal Analysis and Writing",
    description: "Develop your ability to analyze legal issues and present arguments effectively in writing.",
    imageId: 4,
    content: `This course is designed to enhance students' skills in legal analysis and argumentation, with a focus on written presentation. Participants will learn techniques for analyzing complex legal issues, identifying relevant facts and legal principles, and constructing persuasive legal arguments. The course covers the IRAC (Issue, Rule, Analysis, Conclusion) method and other frameworks for organizing legal analysis.`,
    resources: [
      { type: "document", name: "Constitution of Bangladesh" },
      { type: "document", name: "Interpretation of Statutes Act, 1897" },
    ],
  },
  {
    id: "advocacy-writing",
    title: "Advocacy Writing for Court",
    description: "Master the art of writing persuasive legal documents for court proceedings.",
    imageId: 5,
    content: `This course focuses on developing skills in advocacy writing for court proceedings in Bangladesh. Students will learn techniques for drafting persuasive legal documents, including plaints, written statements, petitions, and appeals. The course covers the specific requirements of different types of legal documents in the Bangladeshi court system, including the proper format and structure as per the Civil Procedure Code and Criminal Procedure Code.`,
    resources: [
      { type: "document", name: "Civil Procedure Code, 1908" },
      { type: "document", name: "Criminal Procedure Code, 1898" },
      { type: "document", name: "Supreme Court of Bangladesh Practice Directions" },
    ],
  },
]


export default function LegalWritingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Legal Writing Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Enhance your legal writing skills with our specialized courses. Whether you're a law student, practicing
          lawyer, or legal professional, these courses will help you communicate more effectively in the legal field.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalWritingCourses.map((course) => (
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

