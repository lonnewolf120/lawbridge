import Image from 'next/image'

const lawyers = [
  {
    name: 'Advocate Lubna Yeasmin',
    title: `MSS (VRJ-DU), LL.M, MSS (P. Science)\n
    MPH (JPGSPH), STC-FNPPM (Philippines)\n
    Advocate, Appellate Division`,
    court: 'Supreme Court of Bangladesh',
    image: '/L1.jpg'
  },
  {
    name: 'Barrister Faran Md Aaraf',
    title: `Barrister, Honourable Society of Lincoln's Inn, UK\n Advocate , Dhaka Judge Court\n Academic mentor,`,
    court: 'London College of Legal Studies (South), \nUniversity of London (UK)',
    image: '/L2.jpg'
  },
  {
    name: 'Ashra Anika Tanha',
    title: `Accredited Civil/ Commercial Mediator,\nADR ODR International, UK.\n`,
    court: 'LLB(Hons, 4th year), University of London (UK)',
    image: '/L3.jpg'
  }
]

export default function Team() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Our Advisors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <div key={lawyer.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  height={192}
                  width={192}
                  className="rounded-full"

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

