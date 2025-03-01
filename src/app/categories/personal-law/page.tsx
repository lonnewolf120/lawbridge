
import { CourseCard } from "@/components/course/course-card"


const personalLawCourses = [
  {
    id: "marriage-laws",
    title: "Marriage Laws and Procedures in Bangladesh",
    description: "Comprehensive overview of marriage laws, including registration requirements and spousal rights.",
    imageId: 1,
    content: `Marriage laws in Bangladesh are a complex interplay of religious personal laws and civil regulations. The country recognizes marriages under various religious laws, including Muslim, Hindu, and Christian laws, as well as civil marriages under the Special Marriage Act of 1872. For Muslim marriages, the Muslim Family Laws Ordinance 1961 governs the registration and dissolution of marriages.`,
    resources: [
      { type: "document", name: "Muslim Family Laws Ordinance 1961" },
      { type: "document", name: "Hindu Marriage Registration Act 2012" },
      { type: "document", name: "Christian Marriage Act 1872" },
      { type: "document", name: "Special Marriage Act 1872" },
    ],
  },
  {
    id: "divorce-laws",
    title: "Divorce Laws: Rights and Processes",
    description:
      "In-depth study of divorce procedures, grounds for divorce, and protection of rights during proceedings.",
    imageId: 2,
    content: `Divorce laws in Bangladesh are primarily governed by the personal laws of different religious communities, with some overarching civil laws applicable in specific cases. The process and grounds for divorce vary significantly depending on whether the marriage was conducted under Muslim, Hindu, Christian, or civil law. For Muslim marriages, divorce can be initiated by either spouse.`,
    resources: [
      { type: "document", name: "Muslim Family Laws Ordinance 1961" },
      { type: "document", name: "Family Courts Ordinance 1985" },
      { type: "document", name: "Hindu Marriage Registration Act 2012" },
      { type: "document", name: "Divorce Act 1869" },
    ],
  },
  {
    id: "inheritance-laws",
    title: "Understanding Inheritance Laws",
    description: "Exploration of succession laws in Bangladesh, covering both Islamic and Hindu legal traditions.",
    imageId: 3,
    content: `Inheritance laws in Bangladesh are a complex system influenced by religious personal laws, customary practices, and statutory regulations. The application of inheritance laws varies significantly depending on the religion of the deceased, creating a diverse legal landscape. For Muslims, who constitute the majority of Bangladesh's population, inheritance is primarily governed by Islamic law (Sharia).`,
    resources: [
      { type: "document", name: "Muslim Personal Law (Shariat) Application Act 1937" },
      { type: "document", name: "Hindu Inheritance (Removal of Disabilities) Act 1928" },
      { type: "document", name: "Hindu Women's Rights to Property Act 1937" },
      { type: "document", name: "Succession Act 1925" },
    ],
  },
  {
    id: "child-custody",
    title: "Child Custody and Guardianship",
    description:
      "Comprehensive look at child custody laws, guardianship rights, and the 'best interests of the child' principle.",
    imageId: 4,
    content: `Child custody and guardianship laws in Bangladesh are primarily governed by personal laws based on religion, with some overarching civil laws applicable in specific cases. The legal framework aims to protect the best interests of the child, but the application can vary based on the religious background of the family. For Muslim families, child custody is governed by Islamic law principles as interpreted in Bangladesh.`,
    resources: [
      { type: "document", name: "Guardian and Wards Act 1890" },
      { type: "document", name: "Divorce Act 1869" },
      { type: "document", name: "Family Courts Ordinance 1985" },
    ],
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence Laws and Remedies",
    description:
      "Overview of domestic violence laws, including the Domestic Violence Act, 2010, and available legal remedies.",
    imageId: 5,
    content: `Domestic violence is a significant issue in Bangladesh, and the legal framework to address it has evolved significantly in recent years. The primary legislation dealing with domestic violence is the Domestic Violence (Prevention and Protection) Act 2010, which marked a crucial step in recognizing and combating domestic violence as a specific legal issue.`,
    resources: [
      { type: "document", name: "Domestic Violence (Prevention and Protection) Act 2010" },
      { type: "document", name: "Penal Code 1860 (Relevant Sections)" },
      { type: "document", name: "Women and Children Repression Prevention Act 2000" },
    ],
  },
]
export default function PersonalLawPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Personal Law Courses</h1>
        <p className="text-xl mb-8 text-gray-700">
          Explore the intricacies of family matters, inheritance, and individual rights in Bangladesh. Our personal law
          courses offer in-depth knowledge and practical insights into the legal aspects that affect your daily life and
          relationships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalLawCourses.map((course) => (
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

