import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/placeholder.svg?text=Gavel"
              alt="Gavel"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif">
              Let Our Experience
              <br />
              <span className="text-amber-400">Be Your Guide</span>
            </h2>
            <p className="text-gray-300">
              Get help from experienced lawyers and legal service providers for 
              your business, personal issues, divorce, land-related issues, political 
              cases and every other issues where you might need to visit the courts.
            </p>
            <Button className="bg-amber-400 text-black hover:bg-amber-500">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

