import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-serif">Lawbridge</h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Welcome to LawBridge, your trusted partner in navigating legal complexities. Simple, 
              accessible, and affordable. At LawBridge, we believe that navigating the legal world 
              shouldn't be overwhelming or expensive
            </p>
            <Button className="bg-amber-100 text-black hover:bg-amber-200 border border-amber-200">
              Start Up
            </Button>
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">Have any question?</p>
              <p className="text-lg">+8801311962091</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?text=Legal${i + 1}`}
                  alt={`Legal image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

