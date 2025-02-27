
import { CategoryCard } from "@/components/course/category-card"

const categories = [
 
  { 
    name: "Personal Law", 
    description: "Family matters, inheritance, and individual rights",
    href: "/categories/personal-law",
    image: "https://via.placeholder.com/150?text=Personal+Law",
    imageId: 1,
    courseCount: 5
  },
  { 
    name: "Business Law", 
    description: "Contracts, compliance, and corporate regulations",
    href: "/categories/business-law",
    image: "https://via.placeholder.com/150?text=Business+Law",
    imageId: 2,
    courseCount: 5
  },
  { 
    name: "Criminal Law", 
    description: "Justice system, procedures, and defense strategies",
    href: "/categories/criminal-law",
    image: "https://via.placeholder.com/150?text=Criminal+Law",
    imageId: 3,
    courseCount: 5
  },
  { 
    name: "Civil Law", 
    description: "Property rights, disputes, and case procedures",
    href: "/categories/civil-law",
    image: "https://via.placeholder.com/150?text=Civil+Law",
    imageId:4,
    courseCount: 5
  },
  { 
    name: "Legal Writing", 
    description: "Document drafting and professional communication",
    href: "/categories/legal-writing",
    image: "https://via.placeholder.com/150?text=Legal+Writing",
    imageId: 5,
    courseCount: 5
  },
  { 
    name: "International Law", 
    description: "Global frameworks, immigration, and cross-border regulations",
    href: "/categories/international-law",
    image: "https://via.placeholder.com/150?text=International+Law",
    imageId: 6,
    courseCount: 5
  }
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
              image={category.image}
              imageId={category.imageId}
              courseCount={category.courseCount}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

