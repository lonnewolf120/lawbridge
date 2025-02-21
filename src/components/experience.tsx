import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/lawyer.jpg"
              alt="Legal Expertise"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif">
              Navigate the Legal Labyrinth with Confidence.
              <br />
              <span className="text-primary-400">We&apos;re Your Sherpas.</span>
            </h2>
            <p className="text-border-300">
              From the boardroom to the courtroom, we&apos;ve seen it all.  Our seasoned legal experts provide battle-tested counsel for businesses, individuals, and everyone in between.  Whether you&apos;re facing a complex contract dispute, navigating a difficult divorce, securing your intellectual property, or just need a trusted advisor, we&apos;re here to help you conquer your legal challenges. Don&apos;t let legal complexities hold you back—let our experience be your advantage.
            </p>
            <p className="text-border-300">
               We specialize in a wide range of legal areas, including: Business Law, Family Law, Real Estate, Intellectual Property, Criminal Defense, and more.  Contact us today for a confidential consultation and discover how we can empower you to achieve your goals.
            </p>
            <Link href={'/find-lawyers'}>
            <Button className="bg-primary-400 text-black hover:bg-primary-500">
              Find Lawyer
            </Button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
