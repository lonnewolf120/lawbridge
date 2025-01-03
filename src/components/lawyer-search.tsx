'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'

const practiceAreas = [
  'Criminal Law',
  'Civil Law',
  'Family Law',
  'Corporate Law',
  'Immigration Law',
  'Intellectual Property',
  'Real Estate Law',
  'Tax Law',
]


// TODO: Fetch this data from database
const lawyers = [
  { id: 1, name: 'Aminul Islam', image: 'https://avatar.iran.liara.run/public/job/lawyer/male', practiceAreas: ['Criminal Law', 'Civil Law'], rating: 4.5, location: 'Dhaka', bio: 'Aminul Islam is a seasoned lawyer with over 15 years of experience in Criminal and Civil Law. He has successfully handled numerous high-profile cases and is known for his strategic approach to legal challenges.', education: 'LLB, University of Dhaka', contact: { email: 'aminul.islam@lawbridge.com', phone: '+880 1700 000001' } },
  { id: 2, name: 'Farhana Rahman', image: 'https://avatar.iran.liara.run/public/job/lawyer/female', practiceAreas: ['Family Law', 'Immigration Law'], rating: 4.8, location: 'Chittagong', bio: 'Farhana Rahman specializes in Family and Immigration Law. With her compassionate approach and extensive knowledge, she has helped countless families navigate complex legal situations.', education: 'LLM, University of Chittagong', contact: { email: 'farhana.rahman@lawbridge.com', phone: '+880 1700 000002' } },
  { id: 3, name: 'Kamal Hossain', image: 'https://avatar.iran.liara.run/public/boy', practiceAreas: ['Corporate Law', 'Tax Law'], rating: 4.2, location: 'Dhaka', bio: 'Kamal Hossain is a corporate law expert with a strong background in tax law. He advises major corporations and has played a key role in several landmark business cases in Bangladesh.', education: 'LLB, London School of Economics', contact: { email: 'kamal.hossain@lawbridge.com', phone: '+880 1700 000003' } },
  { id: 4, name: 'Nasreen Akter', image: 'https://avatar.iran.liara.run/public/girl', practiceAreas: ['Intellectual Property', 'Corporate Law'], rating: 4.6, location: 'Sylhet', bio: 'Nasreen Akter is at the forefront of Intellectual Property law in Bangladesh. Her expertise in both IP and Corporate Law makes her a valuable asset for businesses protecting their innovations.', education: 'LLM, Harvard Law School', contact: { email: 'nasreen.akter@lawbridge.com', phone: '+880 1700 000004' } },
  { id: 5, name: 'Rafiqul Islam', image: 'https://avatar.iran.liara.run/public/boy/5', practiceAreas: ['Real Estate Law', 'Civil Law'], rating: 4.3, location: 'Khulna', bio: 'Rafiqul Islam has extensive experience in Real Estate and Civil Law. He has successfully resolved numerous property disputes and is known for his thorough approach to complex civil cases.', education: 'LLB, University of Rajshahi', contact: { email: 'rafiqul.islam@lawbridge.com', phone: '+880 1700 000005' } },
]

export function LawyerSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])

  const filteredLawyers = lawyers.filter((lawyer) => {
    const nameMatch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
    const areaMatch = selectedAreas.length === 0 || selectedAreas.some(area => lawyer.practiceAreas.includes(area))
    return nameMatch && areaMatch
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Lawyers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="search">Search by name</Label>
            <Input
              id="search"
              placeholder="Enter lawyer name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Label>Practice Areas</Label>
            <ScrollArea className="h-[200px] border rounded-md p-4">
              {practiceAreas.map((area) => (
                <div key={area} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id={area}
                    checked={selectedAreas.includes(area)}
                    onCheckedChange={(checked) => {
                      setSelectedAreas(
                        checked
                          ? [...selectedAreas, area]
                          : selectedAreas.filter((a) => a !== area)
                      )
                    }}
                  />
                  <label htmlFor={area} className="text-sm">{area}</label>
                </div>
              ))}
            </ScrollArea>
          </div>
          <Button className="w-full bg-orange-200 hover:bg-orange-400 text-black text-base">Search</Button>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Results</h3>
          <ScrollArea className="h-[300px]">
            {filteredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="mb-4">
                <CardContent className="p-4">
                  <div className='flex flex-row items-start'>
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-16 h-16 rounded-full object-cover border border-gray-300"
                  />
                  <div className='flex flex-col ml-4'>
                  <h4 className="font-medium text-lg">{lawyer.name}</h4>
                  
                  <p className="text-sm text-muted-foreground">
                    {lawyer.practiceAreas.join(', ')}
                  </p> 
                  
                  <p className="text-sm">Location: {lawyer.location}</p>
                  <p className="text-sm">Rating: {lawyer.rating}/5</p>
                  <Link href={`/lawyer/${lawyer.id}`}>
                    <Button variant="outline" size="sm" className="mt-2 bg-amber-200 hover:bg-amber-500">View Profile</Button>
                  </Link> 
                  </div>
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}

