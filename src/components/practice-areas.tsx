import Image from 'next/image'
import Link from 'next/link'

const areas = [
  {
    title: 'Criminal Law',
    image: '/placeholder.svg?text=Criminal'
  },
  {
    title: 'Business & Startups',
    image: '/placeholder.svg?text=Business'
  },
  {
    title: 'Divorce & Family',
    image: '/placeholder.svg?text=Family'
  },
  {
    title: 'Public Law',
    image: '/placeholder.svg?text=Public'
  }
]

export default function PracticeAreas() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
          {areas.map((area) => (
            <Link
              key={area.title}
              href="#"
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white font-serif text-xl">
                {area.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

