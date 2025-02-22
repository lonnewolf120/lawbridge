
import { CourseCard } from "@/components/course/course-card"


const businessLawCourses = [
  {
    id: "contract-law",
    title: "Contract Law and Negotiation",
    description: "Master the art of drafting and negotiating contracts in the Bangladeshi business context.",
    imageId: 1,
    content: `Contract law in Bangladesh is primarily governed by the Contract Act 1872, a legislation inherited from the British colonial era. This Act, along with subsequent amendments and judicial interpretations, forms the backbone of contractual relationships in the country's legal and business environment. The Contract Act 1872 defines a contract as an agreement enforceable by law.`,
    resources: [
      { type: "document", name: "Contract Act 1872" },
      { type: "document", name: "Information and Communication Technology Act 2006" },
    ],
  },
  {
    id: "company-law",
    title: "Company Law and Corporate Governance",
    description: "Understand the legal framework governing companies in Bangladesh.",
    imageId: 2,
    content: `Company law in Bangladesh is primarily governed by the Companies Act 1994, which provides the legal framework for the formation, operation, and dissolution of companies. This Act, along with various amendments and regulations, forms the backbone of corporate governance in the country. The Companies Act 1994 recognizes different types of companies, including private limited companies, public limited companies, and companies limited by guarantee.`,
    resources: [
      { type: "document", name: "Companies Act 1994" },
      { type: "document", name: "Corporate Governance Code 2018" },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    description: "Explore the world of patents, trademarks, and copyrights in Bangladesh.",
    imageId: 3,
    content: `Intellectual Property (IP) rights in Bangladesh are governed by a combination of national laws and international treaties. The country has made significant strides in recent years to strengthen its IP regime, recognizing the importance of IP protection for economic development and innovation. The primary laws governing IP in Bangladesh include the Patents and Designs Act, 1911 (amended in 2003), the Trademarks Act, 2009, and the Copyright Act, 2000 (amended in 2005).`,
    resources: [
      { type: "document", name: "Patents and Designs Act, 1911" },
      { type: "document", name: "Trademarks Act, 2009" },
      { type: "document", name: "Copyright Act, 2000" },
    ],
  },
  {
    id: "labor-law",
    title: "Labor Law and Employee Rights",
    description: "Gain a comprehensive understanding of labor laws in Bangladesh.",
    imageId: 4,
    content: `Labor law in Bangladesh is primarily governed by the Bangladesh Labour Act, 2006 (amended in 2013, 2015, and 2018). This comprehensive legislation covers a wide range of issues related to employment, working conditions, and industrial relations. Key aspects of labor law in Bangladesh include employment contracts, working hours, minimum wage, leave and holidays, occupational safety and health, child labor regulations, trade union rights, termination of employment, maternity benefits, and social security provisions.`,
    resources: [
      { type: "document", name: "Bangladesh Labour Act, 2006" },
      { type: "document", name: "Bangladesh Labour Rules, 2015" },
    ],
  },
  {
    id: "tax-law",
    title: "Taxation Law for Businesses",
    description: "Navigate the complex world of business taxation in Bangladesh.",
    imageId: 5,
    content: `The taxation system in Bangladesh is governed by a complex set of laws and regulations, primarily centered around the Income Tax Ordinance, 1984 and the Value Added Tax (VAT) and Supplementary Duty Act, 2012. The National Board of Revenue (NBR) is the central authority for tax administration in the country. Key aspects of Bangladesh's taxation law include income tax, corporate tax, Value Added Tax (VAT), customs duty, and excise duty.`,
    resources: [
      { type: "document", name: "Income Tax Ordinance, 1984" },
      { type: "document", name: "Value Added Tax (VAT) and Supplementary Duty Act, 2012" },
      { type: "document", name: "Customs Act, 1969" },
    ],
  },
]

export default function BusinessLawPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Business Law Courses</h1>
        <p className="text-xl mb-8 text-gray-700">
          Master the legal aspects of running a business in Bangladesh. Our business law courses provide essential
          knowledge for entrepreneurs, managers, and legal professionals working in the corporate sector.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessLawCourses.map((course) => (
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

