'use client'

import { useState, useEffect } from 'react' // Import useEffect
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lawyer } from '@/types/lawyer'

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

interface LawyerSearchProps {
  mapLocation: { latitude: number, longitude: number } | null; // Receive mapLocation prop
}

export function LawyerSearch({ mapLocation }: LawyerSearchProps) { // Receive mapLocation prop
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  const [lawyers, setLawyers] = useState<Lawyer[]>([]) // State to hold fetched lawyers
  const [loading, setLoading] = useState(false) // Loading state
  const [minRating, setMinRating] = useState<number | null>(null)
  const [maxFee, setMaxFee] = useState<number | null>(null)
  const [minExperience, setMinExperience] = useState<number | null>(null)
  const [practiceAreaSearch, setPracticeAreaSearch] = useState('')
  const baseUrl = 'http://localhost:10101' 
  const [radius, setRadius] = useState(50);


  const fetchLawyers = async () => {
    setLoading(true)
    try {
      let fetchedLawyers = []
      if (mapLocation) {
        const response = await fetch(`${baseUrl}/lawyers/nearby`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            latitude: mapLocation.latitude,
            longitude: mapLocation.longitude,
            radius: radius,
          }),
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        fetchedLawyers = data.lawyers || []
      } else {
        // If no map location, fetch all lawyers (or adjust as needed)
        const response = await fetch('/lawyers')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        fetchedLawyers = data.lawyers || []
      }
      // Transform practice_areas string to array
      interface TransformedLawyer extends Lawyer {
        practiceAreas: string[]
        name: string
        image: string
        location: string
      }

      const transformedLawyers: TransformedLawyer[] = fetchedLawyers.map((lawyer: Lawyer) => ({
        ...lawyer,
        practiceAreas: lawyer.practice_areas ? lawyer.practice_areas.split(',') : [], // Split string into array
        name: `${lawyer.first_name} ${lawyer.last_name}`, // Combine first and last name
        image: lawyer.profile_picture_url || 'https://avatar.iran.liara.run/public/boy', // Use profile_picture_url or default
        location: lawyer.location || 'Unknown Location', // Use location or default
        fees: lawyer.fees || 0, // Add fees
        experienceYears: lawyer.experience || 0, // Add experience years
      }))
      setLawyers(transformedLawyers)
    } catch (error) {
      console.error("Could not fetch lawyers:", error)
      // Handle error, e.g., set an error state to display a message
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLawyers() // Fetch lawyers on initial load or when mapLocation changes
  }, [mapLocation]) // Dependency array includes mapLocation

  const filteredLawyers = lawyers.filter((lawyer) => {
    const name = `${lawyer.first_name} ${lawyer.last_name}`
    const nameMatch = name.toLowerCase().includes(searchTerm.toLowerCase())
    const areaMatch = selectedAreas.length === 0 || selectedAreas.some(area => lawyer.practice_areas!.includes(area))
    const ratingMatch = minRating === null || lawyer.rating! >= minRating
    const feeMatch = maxFee === null || lawyer.fees! <= maxFee
    const experienceMatch = minExperience === null || lawyer.experience! >= minExperience
    const practiceAreaTextMatch = practiceAreaSearch === '' || lawyer.practice_areas!.toLowerCase().includes(practiceAreaSearch.toLowerCase())

    return nameMatch && areaMatch && ratingMatch && feeMatch && experienceMatch && practiceAreaTextMatch
  })

  const handleSearchButtonClick = () => {
    fetchLawyers() // Re-fetch lawyers when the Search button is clicked (currently refetches based on mapLocation)
    // In future you might want to send search term and selectedAreas to backend as well for server-side filtering
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Lawyers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <Label htmlFor="practiceAreaText">Practice Area</Label>
              <Input
                id="practiceAreaText"
                placeholder="Enter practice area"
                value={practiceAreaSearch}
                onChange={(e) => setPracticeAreaSearch(e.target.value)}
                list="practiceAreasList"
              />
              <datalist id="practiceAreasList">
                {practiceAreas.map((area) => (
                  <option key={area} value={area} />
                ))}
              </datalist>
            </div>

            <div>
              <Label htmlFor="minRating">Minimum Rating</Label>
              <Select onValueChange={(value) => setMinRating(value === "any" ? null : parseFloat(value))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="3">3 stars & up</SelectItem>
                  <SelectItem value="3.5">3.5 stars & up</SelectItem>
                  <SelectItem value="4">4 stars & up</SelectItem>
                  <SelectItem value="4.5">4.5 stars & up</SelectItem>
                  <SelectItem value="5">5 stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="maxFee">Maximum Fees (per hour)</Label>
              <Input
                id="maxFee"
                type="number"
                placeholder="Enter maximum fee"
                value={maxFee === null ? '' : maxFee}
                onChange={(e) => setMaxFee(e.target.value === '' ? null : parseFloat(e.target.value))}
              />
            </div>

            <div>
              <Label htmlFor="minExperience">Minimum Experience (years)</Label>
              <Input
                id="minExperience"
                type="number"
                placeholder="Enter minimum experience"
                value={minExperience === null ? '' : minExperience}
                onChange={(e) => setMinExperience(e.target.value === '' ? null : parseFloat(e.target.value))}
              />
            </div>
            <div>
            <Label htmlFor="radius">Search Radius (km)</Label>
            <Input
              id="radius"
              type="number"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
             className='w-full'
            />
            </div>
          </div>

          <Button className="w-full bg-orange-200 hover:bg-orange-400 text-black text-base" onClick={handleSearchButtonClick} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Results</h3>
          <ScrollArea className="h-[400px]">
            {loading && <p>Loading lawyers...</p>} {/* Display loading message */}
            {!loading && filteredLawyers.map((lawyer) => (
              <Card key={lawyer.lawyer_id} className="mb-4">
                <CardContent className="p-4">
                  <div className='flex flex-row items-start'>
                    <img
                      src={lawyer.profile_picture_url! || 'https://avatar.iran.liara.run/public'}
                      alt={lawyer.first_name + ' ' + lawyer.last_name}
                      className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />
                    <div className='flex flex-col ml-4'>
                      <h4 className="font-medium text-lg">{lawyer.first_name} {lawyer.last_name}</h4>

                      <p className="text-sm text-muted-foreground">
                        {lawyer.practice_areas ? lawyer.practice_areas : 'No practice areas listed'}
                      </p>

                      <p className="text-sm">Location: {lawyer.location}</p>
                      <p className="text-sm">Rating: {lawyer.rating}/5</p>
                      <p className="text-sm">Fees: ${lawyer.fees}/hour</p>
                      <p className="text-sm">Experience: {lawyer.experience} years</p>
                      <Link href={`/lawyer/${lawyer.lawyer_id}`}>
                        <Button variant="outline" size="sm" className="mt-2 bg-amber-200 hover:bg-amber-500">View Profile</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {!loading && filteredLawyers.length === 0 && <p>No lawyers found matching your criteria.</p>} {/* No results message */}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}