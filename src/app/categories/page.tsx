
import { CategoryCard } from "@/components/course/category-card"

const categories = [
  {
    name: "Personal Law",
    description: "Family matters, inheritance, and individual rights",
    href: "/categories/personal-law",
    imageId: 1,
    courseCount: 5,
  },
  {
    name: "Business Law",
    description: "Master the legal aspects of running a business, from contracts to compliance.",
    href: "/categories/business-law",
    imageId: 2,
    courseCount: 5,
  },
  {
    name: "Criminal Law",
    description: "Understand the justice system, criminal procedures, and defense strategies.",
    href: "/categories/criminal-law",
    imageId: 3,
    courseCount: 5,
  },
  {
    name: "Civil Law",
    description: "Learn about property rights, disputes, and civil case procedures.",
    href: "/categories/civil-law",
    imageId: 4,
    courseCount: 5,
  },
  {
    name: "Legal Writing",
    description: "Develop skills in drafting legal documents and professional communication.",
    href: "/categories/legal-writing",
    imageId: 5,
    courseCount: 5,
  },
  {
    name: "International Law",
    description: "Explore global legal frameworks, immigration, and cross-border regulations.",
    href: "/categories/international-law",
    imageId: 6,
    courseCount: 5,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      

      <main className="container max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Legal Education Categories</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#f5f5dc] p-8 rounded-lg">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              description={category.description}
              href={category.href}
              imageId={category.imageId}
              courseCount={category.courseCount}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

