// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'

// // Fix marker icon (for Next.js / Vite compatibility)
// import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// const DefaultIcon = L.icon({
//   iconUrl: markerIcon.src,
//   shadowUrl: markerShadow.src,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// })
// L.Marker.prototype.options.icon = DefaultIcon

// const MapStatic = () => {
//   const position: [number, number] = [-6.2, 106.8] // Example: Jakarta

//   return (
//     <MapContainer
//       center={position}
//       zoom={13}
//       scrollWheelZoom={false}
//       dragging={false}
//       doubleClickZoom={false}
//       zoomControl={false}
//       style={{ height: '400px', width: '100%', borderRadius: '8px' }}
//     >
//       <TileLayer
//         attribution="&copy; OpenStreetMap contributors"
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position}>
//         <Popup>This is the location</Popup>
//       </Marker>
//     </MapContainer>
//   )
// }

// export default MapStatic
