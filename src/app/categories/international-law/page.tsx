
import { CourseCard } from "@/components/course/course-card"


const internationalLawCourses = [
  {
    id: "public-international-law",
    title: "Public International Law",
    description:
      "Explore the principles and practices of public international law, focusing on Bangladesh's perspective.",
    imageId: 1,
    content: `This course provides a comprehensive overview of public international law with a focus on Bangladesh's perspective and involvement in the international legal system. Students will study the sources of international law, including treaties, customary international law, and general principles of law. The course covers key areas of public international law such as state responsibility, diplomatic relations, and the law of the sea, with particular emphasis on how these areas affect Bangladesh.`,
    resources: [
      { type: "document", name: "UN Charter" },
      { type: "document", name: "Vienna Convention on the Law of Treaties" },
      { type: "document", name: "UN Convention on the Law of the Sea" },
    ],
  },
  {
    id: "international-trade-law",
    title: "International Trade Law",
    description:
      "Understand the legal framework governing international trade and Bangladesh's position in global trade.",
    imageId: 2,
    content: `This course examines the legal framework governing international trade, with a particular focus on Bangladesh's position and interests in the global trading system. Students will study the World Trade Organization (WTO) agreements and their impact on Bangladesh's trade policies and practices. The course covers key principles of international trade law, including most-favored-nation treatment, national treatment, and tariff bindings.`,
    resources: [
      { type: "document", name: "WTO Agreement" },
      { type: "document", name: "GATT 1994" },
      { type: "document", name: "TRIPS Agreement" },
      { type: "document", name: "SAFTA Agreement" },
    ],
  },
  {
    id: "human-rights-law",
    title: "International Human Rights Law",
    description: "Learn about international human rights standards and their implementation in Bangladesh.",
    imageId: 3,
    content: `This course provides a comprehensive study of international human rights law and its application in Bangladesh. Students will examine the major international human rights instruments, including the Universal Declaration of Human Rights, the International Covenant on Civil and Political Rights, and the International Covenant on Economic, Social and Cultural Rights. The course will analyze Bangladesh's obligations under these treaties and the mechanisms for their implementation in domestic law.`,
    resources: [
      { type: "document", name: "Universal Declaration of Human Rights" },
      { type: "document", name: "International Covenant on Civil and Political Rights" },
      { type: "document", name: "International Covenant on Economic, Social and Cultural Rights" },
      { type: "document", name: "Bangladesh National Human Rights Commission Act, 2009" },
    ],
  },
  {
    id: "international-arbitration",
    title: "International Arbitration",
    description:
      "Master the principles and procedures of international arbitration for commercial and investment disputes.",
    imageId: 4,
    content: `This course focuses on international arbitration as a method of resolving cross-border commercial and investment disputes, with particular emphasis on its relevance to Bangladesh. Students will study the legal framework for international arbitration, including the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards and the UNCITRAL Model Law on International Commercial Arbitration. The course will examine the Arbitration Act 2001 of Bangladesh and its provisions relating to international arbitration.`,
    resources: [
      { type: "document", name: "New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards" },
      { type: "document", name: "UNCITRAL Model Law on International Commercial Arbitration" },
      { type: "document", name: "Arbitration Act 2001 of Bangladesh" },
    ],
  },
  {
    id: "immigration-law",
    title: "Immigration and Refugee Law",
    description: "Understand the legal aspects of immigration and refugee protection from a Bangladeshi perspective.",
    imageId: 5,
    content: `This course examines immigration and refugee law from a Bangladeshi perspective, covering both domestic legislation and international legal frameworks. Students will study the key principles of international refugee law, including the 1951 Refugee Convention and its 1967 Protocol, and analyze Bangladesh's approach to refugee protection, particularly in the context of the Rohingya refugee crisis. The course will cover Bangladesh's immigration laws and policies, including visa regulations, work permits, and citizenship laws.`,
    resources: [
      { type: "document", name: "1951 Refugee Convention" },
      { type: "document", name: "1967 Protocol Relating to the Status of Refugees" },
      { type: "document", name: "Bangladesh Citizenship Act, 1951" },
      { type: "document", name: "Prevention and Suppression of Human Trafficking Act, 2012" },
    ],
  },
]

export default function InternationalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">International Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Explore the complexities of international law and its impact on Bangladesh. Our courses offer insights into
          global legal frameworks, cross-border regulations, and international relations from a legal perspective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalLawCourses.map((course) => (
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

