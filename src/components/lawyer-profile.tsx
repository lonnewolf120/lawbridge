import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'
// import Image from 'next/image'

type Lawyer = {
  id: number
  name: string
  image: string
  practiceAreas: string[]
  rating: number
  location: string
  bio: string
  education: string
  contact: {
    email: string
    phone: string
  }
} 

export function LawyerProfile({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <div className='flex flex-row justify-between items-start'>
              <div>
                <CardTitle className="text-3xl font-serif">{lawyer.name}</CardTitle>
                  <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary">{lawyer.location}</Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>{lawyer.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-2 mt-3">Practice Areas</h3>
                        <div className="flex flex-wrap gap-2">
                          {lawyer.practiceAreas.map(area => (
                            <Badge key={area} variant="outline">{area}</Badge>
                          ))}
                        </div>
                      </div>
                  </div>
                <div>
                <img src={lawyer.image} alt={lawyer.name} width={128} height={128} className="rounded-full mt-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
        <div className=" flex flex-col items-center gap-4">
          <div className='flex flex-col items-start mt-2'>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-2">Biography</h3>
            <p>{lawyer.bio}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-2">Education</h3>
            <p>{lawyer.education}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 mt-2">Lawyer location</h3>
            <p> {lawyer.location}, Bangladesh</p>
          </div>
          </div>
            <div className='flex flex-row items-center m-2 gap-4'>
              <Link href={`tel:${lawyer.contact.phone}`}>
                  <Button className="w-full bg-red-200 hover:bg-red-400 text-black text-base">Call Lawyer</Button>
              </Link>
              <Link href={`mailto:${lawyer.contact.email}`}>
                  <Button className="w-full bg-yellow-100 hover:bg-yellow-300 text-base text-black">Email Lawyer</Button>
              </Link>
              {/* <Link href={`/lawyer/${lawyer.id}/book`}>
                <Button className="w-full">Book Appointment</Button>
              </Link> */}
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

