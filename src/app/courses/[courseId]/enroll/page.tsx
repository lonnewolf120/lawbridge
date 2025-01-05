import { EnrollmentPage } from '@/components/course/enrollment-page'
function getCourseDetails(courseId: string) {
  const courses = [
    { 
      id: "marriage-laws",
      title: "Marriage Laws and Procedures in Bangladesh", 
      price: 99.99,
    },
    { 
      id: "divorce-laws",
      title: "Divorce Laws: Rights and Processes", 
      price: 89.99,
    },
    {
      id: "inheritance-laws",
      title: "Understanding Inheritance Laws",
      price: 79.99,
    },
    {
      id: "child-custody",
      title: "Child Custody and Guardianship",
      price: 69.99,
    },
    {
      id: "domestic-violence",
      title: "Domestic Violence Laws and Remedies",
      price: 59.99,
    },
    {
      id: "contract-law",
      title: "Contract Law and Negotiation",
      price: 109.99,
    },
    {
      id: "company-law",
      title: "Company Law and Corporate Governance",
      price: 99.99,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      price: 89.99,
    },
    {
      id: "labor-law",
      title: "Labor Law and Employee Rights",
      price: 79.99,
    },
    {
      id: "tax-law",
      title: "Taxation Law for Businesses",
      price: 69.99,
    },
    {
      id: "criminal-procedure",
      title: "Criminal Procedure in Bangladesh",
      price: 99.99,
    },
    {
      id: "penal-code",
      title: "Bangladesh Penal Code: In-depth Analysis",
      price: 89.99,
    },
    {
      id: "evidence-law",
      title: "Law of Evidence in Criminal Cases",
      price: 79.99,
    },
    {
      id: "cybercrime",
      title: "Cybercrime and Digital Forensics",
      price: 69.99,
    },
    {
      id: "juvenile-justice",
      title: "Juvenile Justice System",
      price: 59.99,
    },
    {
      id: "property-law",
      title: "Property Law and Land Rights",
      price: 99.99,
    },
    {
      id: "civil-procedure",
      title: "Civil Procedure Code: A Comprehensive Study",
      price: 89.99,
    },
    {
      id: "tort-law",
      title: "Tort Law and Civil Liabilities",
      price: 79.99,
    },
    {
      id: "contract-disputes",
      title: "Contract Disputes and Remedies",
      price: 69.99,
    },
    {
      id: "consumer-protection",
      title: "Consumer Protection Laws",
      price: 59.99,
    },
    {
      id: "legal-drafting",
      title: "Legal Drafting: Contracts and Agreements",
      price: 89.99,
    },
    {
      id: "legal-research",
      title: "Legal Research and Citation",
      price: 79.99,
    },
    {
      id: "legal-correspondence",
      title: "Professional Legal Correspondence",
      price: 69.99,
    },
    {
      id: "legal-analysis",
      title: "Legal Analysis and Writing",
      price: 59.99,
    },
    {
      id: "advocacy-writing",
      title: "Advocacy Writing for Court",
      price: 49.99,
    },
    {
      id: "public-international-law",
      title: "Public International Law",
      price: 109.99,
    },
    {
      id: "international-trade-law",
      title: "International Trade Law",
      price: 99.99,
    },
    {
      id: "human-rights-law",
      title: "International Human Rights Law",
      price: 89.99,
    },
    {
      id: "international-arbitration",
      title: "International Arbitration",
      price: 79.99,
    },
    {
      id: "immigration-law",
      title: "Immigration and Refugee Law",
      price: 69.99,
    }
  ]

  return courses.find(course => course.id === courseId)
}

export default function CourseEnrollmentPage({ params }: { params: { courseId: string } }) {
  const courseDetails = getCourseDetails(params.courseId)

  if (!courseDetails) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-slate-50">
      
      <EnrollmentPage courseTitle={courseDetails.title} price={courseDetails.price} />
    </div>
  )
}

