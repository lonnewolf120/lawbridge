import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'

type Lawyer = {
  id: number
  name: string
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
          <CardTitle className="text-3xl font-serif">{lawyer.name}</CardTitle>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary">{lawyer.location}</Badge>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{lawyer.rating.toFixed(1)}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Practice Areas</h3>
            <div className="flex flex-wrap gap-2">
              {lawyer.practiceAreas.map(area => (
                <Badge key={area} variant="outline">{area}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Biography</h3>
            <p>{lawyer.bio}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p>{lawyer.education}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p>Email: {lawyer.contact.email}</p>
            <p>Phone: {lawyer.contact.phone}</p>
          </div>
          <div className=" flex flex-row items-center gap-4">
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
        </CardContent>
      </Card>
    </div>
  )
}

