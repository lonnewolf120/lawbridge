import Hero from '@/components/hero'
import PracticeAreas from '@/components/practice-areas'
import Stats from '@/components/stats'
import Experience from '@/components/experience'
import Team from '@/components/team'
import BlogPosts from '@/components/blog-posts'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PracticeAreas />
      <Stats />
      <Experience />
      <section className="py-16 text-center space-y-4">
        <h2 className="text-3xl font-serif">We&apos;re Advocates for<br />Justice and Right</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground px-4">
          At LawBridge, we bring years of experience across various practice areas, ensuring you receive informed, 
          effective, and personalized legal solutions. Our dedicated team is committed to understanding your unique 
          needs and providing tailored advice and representation. Your trust empowers us to navigate the complexities 
          of the legal system and advocate fearlessly on your behalf.
        </p>
        <Button variant="outline" className="bg-amber-100 hover:bg-amber-200 border-amber-200">
          Talk to Us
        </Button>
      </section>
      <Team />
      <BlogPosts />
      <section className="py-16 text-center bg-gray-50">
        <h3 className="text-xl mb-4">If you would like us to assist you with your business</h3>
        <Button variant="outline" className="bg-amber-100 hover:bg-amber-200 border-amber-200">
          Click here
        </Button>
      </section>
    </main>
  )
}

