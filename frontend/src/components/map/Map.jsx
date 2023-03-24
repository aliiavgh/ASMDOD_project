// import { MapContainer } from "react-leaflet/MapContainer";
// import { TileLayer } from "react-leaflet/TileLayer";
// import { useMapEvents } from "react-leaflet/hooks";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from "leaflet";
import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  const position = [42.871413, 74.587144];

  return (
    <div>
      <div className="info-map">
          Slobodan Gajić,
          <br />
          Serbia,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
  );
};

export default Map;