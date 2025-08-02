'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect } from 'react'

// Fix marker icon paths
delete (L.Icon.Default as unknown as { prototype: { _getIconUrl: unknown } })
  .prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/map/marker-icon-2x.png',
  iconUrl: '/images/map/marker-icon.png',
  shadowUrl: '/images/map/marker-shadow.png'
})

// const tangerangPosition: [number, number] = [-6.249992, 106.6236722]
// const surabayaPosition: [number, number] = [-7.3501833, 112.7847614]
const setDecorative = (img: HTMLImageElement) => {
  if (!img) return
  img.alt = '' // decorative
  img.setAttribute('aria-hidden', 'true')
  img.setAttribute('role', 'presentation')
}
export default function LeafletMap() {
  useEffect(() => {
    const container =
      document.querySelector('.leaflet-container') || document.body

    // initial pass
    const updateAll = () => {
      container
        .querySelectorAll<HTMLImageElement>(
          'img.leaflet-tile, img.leaflet-marker-icon, img.leaflet-marker-shadow'
        )
        .forEach(setDecorative)
    }
    updateAll()

    // watch for new tiles/markers as the map updates
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLImageElement) {
            if (
              n.classList.contains('leaflet-tile') ||
              n.classList.contains('leaflet-marker-icon') ||
              n.classList.contains('leaflet-marker-shadow')
            )
              setDecorative(n)
          } else if (n instanceof HTMLElement) {
            n.querySelectorAll<HTMLImageElement>(
              'img.leaflet-tile, img.leaflet-marker-icon, img.leaflet-marker-shadow'
            ).forEach(setDecorative)
          }
        })
      }
    })
    mo.observe(container, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [])

  return (
    <MapContainer
      center={[-6.249992, 106.6236722]}
      zoom={4}
      scrollWheelZoom={false}
      className="w-full h-full z-50"
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[-6.249992, 106.6236722]}
        title="Head Office — Gading Serpong, Tangerang"
      >
        <Popup>
          <strong>Head Office</strong>
          <br />
          Gading Serpong, Tangerang
        </Popup>
      </Marker>
      <Marker
        position={[-7.3501833, 112.7847614]}
        title="Surabaya — Pondok Tjandra Indah, Sidoarjo"
      >
        <Popup>
          <strong>Surabaya</strong>
          <br />
          Pondok Tjandra Indah, Sidoarjo
        </Popup>
      </Marker>
    </MapContainer>
  )
}
