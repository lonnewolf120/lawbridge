'use client'

import dynamic from 'next/dynamic'
import { useState, useCallback } from 'react'

const LawyerSearch = dynamic(() => import('@/components/lawyer-search'), {
  loading: () => <p>Loading Lawyer Search...</p>,
  ssr: false,
})
const FindLawyersMap = dynamic(() => import('@/components/find-lawyers-map').then(mod => mod.default), {
  loading: () => <p>Loading Map...</p>,
  ssr:false,
})

export default function FindLawyersPage() {
  const [selectedMapLocation, setSelectedMapLocation] = useState<{ latitude: number, longitude: number } | null>(null)

  const handleLocationSelected = useCallback((location: { latitude: number, longitude: number }) => {
    setSelectedMapLocation(location)
    console.log('Selected location in FindLawyersPage:', location) // Optional: Log the location
  }, [])

  return (
    <div className='min-h-screen'>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-3xl font-serif mb-8">Find Lawyers</h1> */}
        <div className="grid lg:grid-cols-[3fr,2fr] gap-8">
          <LawyerSearch mapLocation={selectedMapLocation} /> {/* Pass selectedMapLocation as prop */}
          <FindLawyersMap onLocationSelected={handleLocationSelected} /> {/* Pass the callback function */}
        </div>
      </div>
    </div>
  )
}