import React, { Component } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const position = [43.6, 1.45];

export default class LeafLetTest extends Component {

    

      render() {
        return (
          <div className="map">
          <MapContainer center={position} zoom={3} scrollWheelZoom={false} style={{height: '80vh'}} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          </div>
        )
      }
}