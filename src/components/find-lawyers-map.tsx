'use client';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

// Import marker images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


function LocationMarker() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  const map = useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
        },
        locationfound(e) {
          setPosition([e.latlng.lat, e.latlng.lng]);
          map.flyTo(e.latlng, map.getZoom());},
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You clicked here: {position[0]}, {position[1]}</Popup>
      </Marker>
  );
}

const dhakaPosition: [number, number] = [23.8103, 90.4125];

export function FindLawyersMap() {
  const [selectedLocation, setSelectedLocation] = useState<[number,number]>(dhakaPosition)
  return (
    <div className="relative"> {/* Added relative positioning to the container */}
    <MapContainer center={selectedLocation} zoom={13} style={{ height: '600px', width: '100%' }} className="relative rounded-lg shadow-md">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <Link href="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
      />
      {/* if map not generating replace Link with a */}
      <LocationMarker />
    </MapContainer>
    </div>
  );
}