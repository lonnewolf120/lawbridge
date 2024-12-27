import Image from 'next/image'

const lawyers = [
  {
    name: 'Barrister Ali',
    title: 'Senior Advocate',
    court: 'Supreme Court',
    image: '/placeholder.svg?text=Lawyer1'
  },
  {
    name: 'Barrister Ms. Marina Begum',
    title: 'Senior Advocate',
    court: 'Law School',
    image: '/placeholder.svg?text=Lawyer2'
  },
  {
    name: 'Barrister Rahman',
    title: 'Advocate',
    court: 'Supreme Court',
    image: '/placeholder.svg?text=Lawyer3'
  }
]

export default function Team() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Our Lawyers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <div key={lawyer.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium">{lawyer.name}</h3>
              <p className="text-sm text-muted-foreground">{lawyer.title}</p>
              <p className="text-sm text-muted-foreground">{lawyer.court}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

