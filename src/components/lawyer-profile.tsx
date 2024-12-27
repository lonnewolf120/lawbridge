import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

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
  image: string // Added image property for lawyer
}

export function LawyerProfile({ lawyer }: { lawyer: Lawyer }) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <div className="flex items-center">
            <div className="flex-1">
              <CardTitle className="text-3xl font-serif">{lawyer.name}</CardTitle>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="secondary">{lawyer.location}</Badge>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>{lawyer.rating.toFixed(1)}</span>
                </div>
                
              </div>
              <div>
            <h3 className="text-lg font-semibold mt-5 mb-3">Practice Areas</h3>
            <div className="flex flex-wrap gap-2">
              {lawyer.practiceAreas.map(area => (
                <Badge key={area} variant="outline">{area}</Badge>
              ))}
            </div>
          </div>
            </div>
            <img
              src={lawyer.image}
              alt={`${lawyer.name}'s profile`}
              className="w-32 h-32 rounded-full object-cover border border-gray-300"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          
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
        </CardContent>
      </Card>
    </div>
  )
}
