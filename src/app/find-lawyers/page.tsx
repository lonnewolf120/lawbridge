'use client'

import dynamic from 'next/dynamic'
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MapIcon, Search } from 'lucide-react'

const LawyerSearch = dynamic(() => import('@/components/lawyer-search'), {
  loading: () => (
    <div className="h-[600px] w-full rounded-lg bg-gray-100 animate-pulse" />
  ),
  ssr: false,
})

const FindLawyersMap = dynamic(() => import('@/components/find-lawyers-map'), {
  loading: () => (
    <div className="h-[600px] w-full rounded-lg bg-gray-100 animate-pulse" />
  ),
  ssr: false,
})

export default function FindLawyersPage() {
  const [selectedMapLocation, setSelectedMapLocation] = useState<{ latitude: number, longitude: number } | null>(null)
  const [isMapView, setIsMapView] = useState(true)

  const handleLocationSelected = useCallback((location: { latitude: number, longitude: number }) => {
    setSelectedMapLocation(location)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            Find the Right Lawyer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Search through our network of qualified lawyers or find one near you
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMapView(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              isMapView 
                ? 'bg-primary-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MapIcon className="w-5 h-5" />
            Map View
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMapView(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              !isMapView 
                ? 'bg-primary-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Search className="w-5 h-5" />
            Search View
          </motion.button>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`grid gap-8 ${
            isMapView ? 'lg:grid-cols-[3fr,2fr]' : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {isMapView && (
            <LawyerSearch mapLocation={selectedMapLocation} />
          )}
          {(!isMapView || isMapView) && (
            <div className={isMapView ? '' : 'order-first'}>
              <FindLawyersMap onLocationSelected={handleLocationSelected} />
            </div>
          )}
          {!isMapView && (
            <LawyerSearch mapLocation={selectedMapLocation} />
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
