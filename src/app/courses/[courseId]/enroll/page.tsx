import { EnrollmentPage } from "@/components/course/enrollment-page"


function getCourseDetails(courseId: string) {
  const courses = [
    {
      id: "marriage-laws",
      title: "Marriage Laws and Procedures in Bangladesh",
      content:
        "This course covers the Muslim Family Laws Ordinance 1961, the Special Marriage Act 1872, and other relevant laws. You'll learn about different types of marriages recognized in Bangladesh, legal requirements for marriage registration, and the rights and obligations of spouses under Bangladeshi law.",
    },
    {
      id: "contract-law",
      title: "Contract Law and Negotiation in Bangladesh",
      content:
        "This course focuses on the Contract Act 1872 and its application in modern business contexts. You'll study contract formation, performance, breach, and remedies under Bangladeshi law, as well as recent developments in e-contracts and digital signatures.",
    },
    {
      id: "criminal-procedure",
      title: "Criminal Procedure in Bangladesh",
      content:
        "This course provides a comprehensive study of the Code of Criminal Procedure 1898 and its amendments. You'll gain in-depth knowledge of arrest procedures, bail applications, trial processes, and appeals in the Bangladeshi criminal justice system.",
    },
    {
      id: "property-law",
      title: "Property Law and Land Rights in Bangladesh",
      content:
        "This course covers the Transfer of Property Act 1882, the Registration Act 1908, and other relevant laws. You'll learn about land registration, property transfer, leases and tenancy, and common property disputes in Bangladesh.",
    },
    {
      id: "legal-drafting",
      title: "Legal Drafting: Contracts and Agreements in Bangladesh",
      content:
        "This course focuses on drafting clear and effective legal documents in the context of Bangladeshi law. You'll learn contract drafting techniques, common clauses, and best practices in legal writing specific to Bangladesh, in both Bangla and English.",
    },
    {
      id: "public-international-law",
      title: "Public International Law: Bangladesh Perspective",
      content:
        "This course explores public international law with a focus on Bangladesh's position and involvement. You'll study international treaties, state responsibility, and dispute resolution mechanisms, with emphasis on cases and issues relevant to Bangladesh.",
    },
  ]

  return courses.find((course) => course.id === courseId)
}
interface Params {
  courseId: string
}

export default async function CourseEnrollmentPage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const courseDetails = getCourseDetails(params.courseId)


  if (!courseDetails) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-slate-50">
      
      <EnrollmentPage courseTitle={courseDetails.title} courseContent={courseDetails.content} />
    </div>
  )
}

