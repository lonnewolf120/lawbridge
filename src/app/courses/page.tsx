import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategoryCard } from "@/components/categories/category-card"

const categories = [
  { 
    name: "Personal Law", 
    description: "Family matters, inheritance, and individual rights",
    href: "/categories/personal-law",
    imageId: 1,
    courseCount: 5
  },
  { 
    name: "Business Law", 
    description: "Contracts, compliance, and corporate regulations",
    href: "/categories/business-law",
    imageId: 2,
    courseCount: 5
  },
  { 
    name: "Criminal Law", 
    description: "Justice system, procedures, and defense strategies",
    href: "/categories/criminal-law",
    imageId: 3,
    courseCount: 5
  },
  { 
    name: "Civil Law", 
    description: "Property rights, disputes, and case procedures",
    href: "/categories/civil-law",
    imageId: 4,
    courseCount: 5
  },
  { 
    name: "Legal Writing", 
    description: "Document drafting and professional communication",
    href: "/categories/legal-writing",
    imageId: 5,
    courseCount: 5
  },
  { 
    name: "International Law", 
    description: "Global frameworks, immigration, and cross-border regulations",
    href: "/categories/international-law",
    imageId: 6,
    courseCount: 5
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">      
      {/* Header Section */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-primary/90 to-primary text-primary-foreground">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Explore Law Courses
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 animate-fade-in-up max-w-2xl mx-auto">
            Empower yourself with legal knowledge. Learn at your own pace from expert-led courses.
          </p>
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
            <Input 
              placeholder="Search for courses..." 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              aria-label="Search for courses"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
              Search Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 py-16 bg-accent text-accent-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Legal Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students learning law online. Get started today!</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg px-8 py-3">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}

