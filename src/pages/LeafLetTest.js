import React, { Component } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [43.505, 2];

export default class LeafLetTest extends Component {

    

      render() {
        return (
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: '100vh'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )
      }
}