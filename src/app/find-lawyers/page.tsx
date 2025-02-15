'use client'
import { LawyerSearch } from '@/components/lawyer-search'
import { FindLawyersMap } from '@/components/find-lawyers-map'
import { useState } from 'react';
import { useCallback } from 'react';

export default function FindLawyersPage() {
  const [selectedMapLocation, setSelectedMapLocation] = useState<{ latitude: number, longitude: number } | null>(null);

  const handleLocationSelected = useCallback((location: { latitude: number, longitude: number }) => {
    setSelectedMapLocation(location);
    console.log('Selected location in FindLawyersPage:', location); // Optional: Log the location
  }, []);

  return (
    <div className='min-h-screen'>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-3xl font-serif mb-8">Find Lawyers</h1> */}
        <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
          <LawyerSearch mapLocation={selectedMapLocation} /> {/* Pass selectedMapLocation as prop */}
          <FindLawyersMap onLocationSelected={handleLocationSelected} /> {/* Pass the callback function */}
          
        </div>
      </div>
    </div>
  )
}

