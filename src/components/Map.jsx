import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLoading from "./MapLoading";
import data from "../data/simplon.json";

export default function Map({ setSelectedFactory }) {
  const [center, setCenter] = useState([0, 0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fonction de succès pour la géolocalisation
    function success(pos) {
      let crd = pos.coords;
      setCenter([crd.latitude, crd.longitude]);
      setIsLoading(false);
    }

    // Fonction d'erreur pour la géolocalisation
    function error() {
      setIsLoading(false);
      setCenter([48.866667, 2.333333]); // Coordonnées par défaut
    }

    // Obtient la position actuelle de l'utilisateur
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  // Affiche un composant de chargement tant que les données sont en cours de chargement
  if (isLoading) {
    return <MapLoading />;
  }

  return (
    <MapContainer center={center} zoom={8} scrollWheelZoom={false} className="h-96">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.factories.map((factory) => (
        <Marker
          key={factory.factoryId}
          position={[factory.lat, factory.lng]}
          eventHandlers={{
            click: () => {
              setSelectedFactory(factory);
            },
          }}
        >
          <Popup>
            {factory.factoryName} <br />
            {factory.address}, {factory.postCode} <br />
            <a
              href={factory.btn_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {factory.btn_text}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
