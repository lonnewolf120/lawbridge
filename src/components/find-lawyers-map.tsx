'use client';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useCallback } from 'react';

// Import marker images
import markerIcon2x from '/marker-icon-2x.png';
import markerIcon from '/marker-icon.png';
import markerShadow from '/marker-shadow.png';

// Fix for default marker icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface LocationMarkerProps {
  onLocationSelected: (location: { latitude: number, longitude: number }) => void;
}

function LocationMarker({ onLocationSelected }: LocationMarkerProps) { // Added onLocationSelected prop
  const [position, setPosition] = useState<[number, number] | null>(null);

  const map = useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
      onLocationSelected({ latitude: e.latlng.lat, longitude: e.latlng.lng }); // Call the callback
    },
    locationfound(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
      onLocationSelected({ latitude: e.latlng.lat, longitude: e.latlng.lng }); // Call the callback
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You clicked here: {position[0]}, {position[1]}</Popup>
    </Marker>
  );
}

const dhakaPosition: [number, number] = [23.8103, 90.4125];

interface FindLawyersMapProps {
  onLocationSelected: (location: { latitude: number, longitude: number }) => void; // Prop for callback
}

export default function FindLawyersMap({ onLocationSelected }: FindLawyersMapProps) { // Receive callback as prop
  const [selectedLocation, setSelectedLocation] = useState<[number,number]>(dhakaPosition)

  return (
    <div className="relative">
      <MapContainer center={selectedLocation} zoom={13} style={{ height: '600px', width: '100%' }} className="relative rounded-lg shadow-md">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <Link href="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
        />
        {/* if map not generating replace Link with a */}
        <LocationMarker onLocationSelected={onLocationSelected} /> {/* Pass callback to LocationMarker */}
      </MapContainer>
    </div>
  );
}