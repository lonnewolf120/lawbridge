"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Lawyer } from "@/types/lawyer"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Star, DollarSign, EyeIcon, Clock, MapPin, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { parseCookies } from 'nookies';


const practiceAreas = [
  "Criminal Law",
  "Civil Law",
  "Family Law",
  "Corporate Law",
  "Immigration Law",
  "Intellectual Property",
  "Real Estate Law",
  "Tax Law",
]

interface LawyerSearchProps {
  mapLocation: { latitude: number; longitude: number } | null
}

export default function LawyerSearch({ mapLocation }: LawyerSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  const [lawyers, setLawyers] = useState<Lawyer[]>([])
  const [loading, setLoading] = useState(false)
  const [minRating, setMinRating] = useState<number | null>(null)
  const [maxFee, setMaxFee] = useState<number | null>(null)
  const [minExperience, setMinExperience] = useState<number | null>(null)
  const [practiceAreaSearch, setPracticeAreaSearch] = useState("")
  const [radius, setRadius] = useState(50)
  const baseUrl = process.env.baseUrl || "http://api.shalish.xyz"

  const fetchAllLawyers = async () => {
    console.log("Fetching all lawyers...")
    const cookies = parseCookies()
    const token = cookies.token
    setLoading(true)
    try {
      let fetchedLawyers = []
        const response = await fetch(`${baseUrl}/lawyers`, {
          method: "GET",
          headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           }
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        fetchedLawyers = data.lawyers || []
      

      const transformedLawyers = fetchedLawyers.map((lawyer: Lawyer) => ({
        ...lawyer,
        practiceAreas: lawyer.practice_areas ? lawyer.practice_areas.split(",") : [],
        name: `${lawyer.first_name} ${lawyer.last_name}`,
        image: lawyer.profile_picture_url || "https://avatar.iran.liara.run/public/boy",
        location: lawyer.location || "Unknown Location",
        fees: lawyer.fees || 0,
        experienceYears: lawyer.experience || 0,
      }))
      setLawyers(transformedLawyers)
    } catch (error) {
      console.error("Could not fetch lawyers:", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchAllLawyers()
  }, [])

  const fetchLawyers = async () => {
    setLoading(true)
    try {
      let fetchedLawyers = []
      if (mapLocation) {
        const response = await fetch(`${baseUrl}/lawyers/nearby`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            latitude: mapLocation.latitude,
            longitude: mapLocation.longitude,
            radius: radius,
          }),
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        fetchedLawyers = data.lawyers || []
      }

      const transformedLawyers = fetchedLawyers.map((lawyer: Lawyer) => ({
        ...lawyer,
        practiceAreas: lawyer.practice_areas ? lawyer.practice_areas.split(",") : [],
        name: `${lawyer.first_name} ${lawyer.last_name}`,
        image: lawyer.profile_picture_url || "https://avatar.iran.liara.run/public/boy",
        location: lawyer.location || "Unknown Location",
        fees: lawyer.fees || 0,
        experienceYears: lawyer.experience || 0,
      }))
      setLawyers(transformedLawyers)
    } catch (error) {
      console.error("Could not fetch lawyers:", error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    if (mapLocation) fetchLawyers()
  }, [mapLocation, radius])

  const filteredLawyers = lawyers.filter((lawyer) => {
    const name = `${lawyer.first_name} ${lawyer.last_name}`
    const nameMatch = name.toLowerCase().includes(searchTerm.toLowerCase())
    const areaMatch = selectedAreas.length === 0 || selectedAreas.some((area) => lawyer.practice_areas!.includes(area))
    const ratingMatch = minRating === null || lawyer.rating! >= minRating
    const feeMatch = maxFee === null || lawyer.fees! <= maxFee
    const experienceMatch = minExperience === null || lawyer.experience! >= minExperience
    const practiceAreaTextMatch =
      practiceAreaSearch === "" || lawyer.practice_areas!.toLowerCase().includes(practiceAreaSearch.toLowerCase())

    return nameMatch && areaMatch && ratingMatch && feeMatch && experienceMatch && practiceAreaTextMatch
  })

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-serif">Find Lawyers</CardTitle>
          <div className="flex p-4">
          <Button variant="outline" onClick={()=> fetchAllLawyers()}>
            <EyeIcon className="h-4 w-4" />
          <p>View All</p>
          </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Options</SheetTitle>
                <SheetDescription>Refine your search with these filters</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="minRating">Minimum Rating</Label>
                  <Select onValueChange={(value) => setMinRating(value === "any" ? null : Number.parseFloat(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="3">3 stars & up</SelectItem>
                      <SelectItem value="4">4 stars & up</SelectItem>
                      <SelectItem value="4.5">4.5 stars & up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="maxFee">Maximum Fee (per hour)</Label>
                  <Input
                    id="maxFee"
                    type="number"
                    placeholder="Enter amount"
                    value={maxFee === null ? "" : maxFee}
                    onChange={(e) => setMaxFee(e.target.value === "" ? null : Number.parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="minExperience">Minimum Experience (years)</Label>
                  <Input
                    id="minExperience"
                    type="number"
                    placeholder="Enter years"
                    value={minExperience === null ? "" : minExperience}
                    onChange={(e) => setMinExperience(e.target.value === "" ? null : Number.parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="radius">Search Radius (km)</Label>
                  <Input
                    id="radius"
                    type="number"
                    value={radius}
                    onChange={(e) => setRadius(Number.parseInt(e.target.value))}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or practice area..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>

            <ScrollArea className="h-[500px] pr-4">
              <AnimatePresence>
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-40"
                  >
                    <div className="space-y-2 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto" />
                      <p className="text-sm text-muted-foreground">Searching for lawyers...</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {filteredLawyers.map((lawyer) => (
                      <motion.div
                        key={lawyer.lawyer_id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className="overflow-hidden">
                          <CardContent className="p-4">
                            <div className="flex gap-4">
                              <div className="relative w-24 h-24">
                                <img
                                  src={lawyer.profile_picture_url || "https://avatar.iran.liara.run/public"}
                                  alt={`${lawyer.first_name} ${lawyer.last_name}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                              <div className="flex-1 space-y-2">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-semibold text-lg">
                                    {lawyer.first_name} {lawyer.last_name}
                                  </h3>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm">{lawyer.rating}/5</span>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                {lawyer.practice_areas?.split(",").map((area, index) => (
                                  <span> {area} </span>
                                ))} 
                                {/*lawyer.practice_areas.map((area, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs"
                                    >
                                      {area}
                                    </span>
                                  ))*/}
                                </div>
                                <div className="flex gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{lawyer.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    <span>{lawyer.fees}tk/hour</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{lawyer.experience} years</span>
                                  </div>
                                </div>
                                <Link href={`/lawyer/${lawyer.lawyer_id}`}>
                                  <Button className="w-full mt-2 bg-primary-600 hover:bg-primary-700 text-white">
                                    View Profile
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                    {!loading && filteredLawyers.length === 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                        <p className="text-lg text-muted-foreground">No lawyers found matching your criteria.</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Try adjusting your filters or selecting a different location.
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}
              </AnimatePresence>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

