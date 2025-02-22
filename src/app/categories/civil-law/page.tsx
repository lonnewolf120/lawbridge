
import { CourseCard } from "@/components/course/course-card"


const civilLawCourses = [
  {
    id: "property-law",
    title: "Property Law and Land Rights",
    description:
      "Understand the complexities of property law in Bangladesh, including land registration and dispute resolution.",
    imageId: 1,
    content: `Property law in Bangladesh is a complex area governed by a mix of statutory laws, common law principles, and customary practices. The primary legislation dealing with property rights is the Transfer of Property Act, 1882, which provides the basic framework for property transactions. Land rights in Bangladesh are particularly complex due to historical factors and the country's high population density.`,
    resources: [
      { type: "document", name: "Transfer of Property Act, 1882" },
      { type: "document", name: "Registration Act, 1908" },
      { type: "document", name: "Land Reform Ordinance, 1984" },
      { type: "document", name: "State Acquisition and Tenancy Act, 1950" },
    ],
  },
  {
    id: "civil-procedure",
    title: "Civil Procedure Code: A Comprehensive Study",
    description: "Master the Civil Procedure Code of Bangladesh, covering filing suits, court procedures, and appeals.",
    imageId: 2,
    content: `The Civil Procedure Code (CPC) of 1908 is the primary legislation governing civil litigation in Bangladesh. It provides a comprehensive framework for the conduct of civil suits, from the filing of a case to its final disposal, including appeals. The CPC outlines the jurisdiction of various civil courts and the procedures they must follow.`,
    resources: [
      { type: "document", name: "Civil Procedure Code, 1908" },
      { type: "document", name: "Arbitration Act, 2001" },
    ],
  },
  {
    id: "tort-law",
    title: "Tort Law and Civil Liabilities",
    description: "Explore the principles of tort law in Bangladesh, including negligence, defamation, and nuisance.",
    imageId: 3,
    content: `Tort law in Bangladesh, while not codified in a single statute, is based on common law principles inherited from the British legal system. It deals with civil wrongs that cause harm or loss to individuals or their property. The primary types of torts recognized in Bangladesh include negligence, defamation, nuisance, and trespass.`,
    resources: [
      { type: "document", name: "Penal Code, 1860 (Relevant Sections)" },
      { type: "document", name: "Environmental Conservation Act, 1995" },
    ],
  },
  {
    id: "contract-disputes",
    title: "Contract Disputes and Remedies",
    description: "Learn how to handle contract disputes in civil courts and alternative dispute resolution methods.",
    imageId: 4,
    content: `Contract disputes in Bangladesh are primarily governed by the Contract Act, 1872, which provides the basic framework for contract formation, performance, and breach. When disputes arise, parties can seek remedies through the civil courts or alternative dispute resolution methods. In court proceedings, the aggrieved party can file a suit for breach of contract, seeking remedies such as damages, specific performance, or injunction.`,
    resources: [
      { type: "document", name: "Contract Act, 1872" },
      { type: "document", name: "Specific Relief Act, 1877" },
      { type: "document", name: "Arbitration Act, 2001" },
    ],
  },
  {
    id: "consumer-protection",
    title: "Consumer Protection Laws",
    description: "Understand the legal framework for consumer protection in Bangladesh and redressal mechanisms.",
    imageId: 5,
    content: `Consumer protection in Bangladesh is primarily governed by the Consumer Rights Protection Act, 2009. This Act aims to safeguard consumers' interests and provide mechanisms for addressing grievances. The Act established the Directorate of National Consumer Rights Protection, which is responsible for implementing consumer protection measures.`,
    resources: [
      { type: "document", name: "Consumer Rights Protection Act, 2009" },
      { type: "document", name: "Food Safety Act, 2013" },
      { type: "document", name: "Competition Act, 2012" },
    ],
  },
]

export default function CivilLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Civil Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Explore the intricacies of civil law in Bangladesh. Our courses provide essential knowledge for legal
          professionals, aspiring lawyers, and individuals interested in understanding their rights and obligations in
          civil matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {civilLawCourses.map((course) => (
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

