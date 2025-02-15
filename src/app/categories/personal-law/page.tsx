
import { CourseCard } from "@/components/course/course-card"
import Link from "next/link"

const personalLawCourses = [
  {
    id: "marriage-laws",
    title: "Marriage Laws and Procedures in Bangladesh",
    description:
      "Dive deep into the intricacies of marriage laws in Bangladesh. This comprehensive course covers everything from legal requirements for marriage registration to the rights and obligations of spouses under Bangladeshi law.",
    imageId: 1,
  },
  {
    id: "divorce-laws",
    title: "Divorce Laws: Rights and Processes",
    description:
      "Understand the legal landscape of divorce in Bangladesh with this in-depth course. You'll learn about the grounds for divorce under different personal laws, the step-by-step process of filing for divorce, and how to protect your rights during divorce proceedings.",
    imageId: 2,
  },
  {
    id: "inheritance-laws",
    title: "Understanding Inheritance Laws",
    description:
      "Explore the complex world of inheritance laws in Bangladesh, covering both Islamic and Hindu legal traditions. This course provides a comprehensive overview of succession laws, including the rules of intestate and testamentary succession.",
    imageId: 3,
  },
  {
    id: "child-custody",
    title: "Child Custody and Guardianship",
    description:
      "Gain crucial knowledge about child custody laws and guardianship rights in Bangladesh. This course covers the legal framework governing child custody in cases of divorce or separation, the concept of 'best interests of the child' in Bangladeshi law, and the rights and responsibilities of guardians.",
    imageId: 4,
  },
  {
    id: "domestic-violence",
    title: "Domestic Violence Laws and Remedies",
    description:
      "Empower yourself with knowledge about domestic violence laws and available legal remedies in Bangladesh. This course provides a comprehensive understanding of the Domestic Violence (Prevention and Protection) Act, 2010, and other relevant laws.",
    imageId: 5,
  },
]

export default function PersonalLawPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Personal Law Courses</h1>
        <p className="text-xl mb-8 text-gray-600">
          Explore the intricacies of family matters, inheritance, and individual rights in Bangladesh. Our personal law
          courses offer in-depth knowledge and practical insights into the legal aspects that affect your daily life and
          relationships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalLawCourses.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <CourseCard title={course.title} description={course.description} imageId={course.imageId} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

