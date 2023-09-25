import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Meteo from "./Meteo";

export default function MapInformations({ selectedFactory }) {
  // Si aucune usine n'est sélectionnée, affiche un message d'instruction
  if (!selectedFactory) {
    return (
      <div className="no-factory-selected text-xl text-center py-20 px-5">
        Sélectionnez un point sur la carte pour voir les détails
      </div>
    );
  }

  // Si une usine est sélectionnée, affiche les informations
  return (
    <div className="factory-info bg-slate-100 p-10">
      <div className="border-t-4 border-rose-600 bg-white h-full">
        <h2 className="factory-name text-center text-xl font-bold py-2">
          {selectedFactory.factoryName}
        </h2>
        <div className="factory-location flex justify-center gap-5">
          <FaMapMarkerAlt className="map-marker-icon text-rose-600" />
          <p>
            {selectedFactory.address}, {selectedFactory.postCode}
          </p>
        </div>
        <Meteo selectedFactory={selectedFactory} />
      </div>
    </div>
  );
}
