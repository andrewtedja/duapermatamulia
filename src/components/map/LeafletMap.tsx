'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix marker icon paths
delete (L.Icon.Default as unknown as { prototype: { _getIconUrl: unknown } })
  .prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/map/marker-icon-2x.png',
  iconUrl: '/images/map/marker-icon.png',
  shadowUrl: '/images/map/marker-shadow.png'
})

const tangerangPosition: [number, number] = [-6.249992, 106.6236722]
const surabayaPosition: [number, number] = [-7.3501833, 112.7847614]

export default function LeafletMap() {
  return (
    <MapContainer
      center={tangerangPosition}
      zoom={6}
      scrollWheelZoom={false}
      className="w-full h-full z-50"
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={tangerangPosition}>
        <Popup>
          <strong>Head Office</strong>
          <br />
          Gading Serpong, Tangerang
        </Popup>
      </Marker>
      <Marker position={surabayaPosition}>
        <Popup>
          <strong>Surabaya</strong>
          <br />
          Pondok Tjandra Indah, Sidoarjo
        </Popup>
      </Marker>
    </MapContainer>
  )
}
