'use client'

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Crosshair } from 'lucide-react'

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
})

interface LocationMarkerProps {
  onLocationSelected: (location: { latitude: number, longitude: number }) => void
}

function LocationMarker({ onLocationSelected }: LocationMarkerProps) {
  const [position, setPosition] = useState<[number, number] | null>(null)

  const map = useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
      map.flyTo(e.latlng, map.getZoom())
      onLocationSelected({ latitude: e.latlng.lat, longitude: e.latlng.lng })
    },
    locationfound(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
      map.flyTo(e.latlng, map.getZoom())
      onLocationSelected({ latitude: e.latlng.lat, longitude: e.latlng.lng })
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Selected Location: {position[0].toFixed(4)}, {position[1].toFixed(4)}</Popup>
    </Marker>
  )
}

const dhakaPosition: [number, number] = [23.8103, 90.4125]

interface FindLawyersMapProps {
  onLocationSelected: (location: { latitude: number, longitude: number }) => void
}

export default function FindLawyersMap({ onLocationSelected }: FindLawyersMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>(dhakaPosition)

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation: [number, number] = [position.coords.latitude, position.coords.longitude]
          setSelectedLocation(newLocation)
          onLocationSelected({ latitude: newLocation[0], longitude: newLocation[1] })
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Select Location</h2>
          <Button
            onClick={handleGetCurrentLocation}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Crosshair className="w-4 h-4" />
            Use My Location
          </Button>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={selectedLocation}
            zoom={13}
            style={{ height: '600px', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
            />
            <LocationMarker onLocationSelected={onLocationSelected} />
          </MapContainer>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Click on the map to select a location and find nearby lawyers
        </p>
      </Card>
    </motion.div>
  )
}
