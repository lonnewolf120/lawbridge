'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

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

const lawyers = [
  { id: 1, name: 'Aminul Islam', practiceAreas: ['Criminal Law', 'Civil Law'], rating: 4.5, location: 'Dhaka' },
  { id: 2, name: 'Farhana Rahman', practiceAreas: ['Family Law', 'Immigration Law'], rating: 4.8, location: 'Chittagong' },
  { id: 3, name: 'Kamal Hossain', practiceAreas: ['Corporate Law', 'Tax Law'], rating: 4.2, location: 'Dhaka' },
  { id: 4, name: 'Nasreen Akter', practiceAreas: ['Intellectual Property', 'Corporate Law'], rating: 4.6, location: 'Sylhet' },
  { id: 5, name: 'Rafiqul Islam', practiceAreas: ['Real Estate Law', 'Civil Law'], rating: 4.3, location: 'Khulna' },
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
          <Button className="w-full">Search</Button>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Results</h3>
          <ScrollArea className="h-[300px]">
            {filteredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="mb-4">
                <CardContent className="p-4">
                  <h4 className="font-medium text-lg">{lawyer.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {lawyer.practiceAreas.join(', ')}
                  </p>
                  <p className="text-sm">Location: {lawyer.location}</p>
                  <p className="text-sm">Rating: {lawyer.rating}/5</p>
                  <Button variant="outline" size="sm" className="mt-2">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}

