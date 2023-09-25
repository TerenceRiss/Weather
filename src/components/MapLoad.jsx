import React from "react";

export default function MapLoad() {
  return (
    <div className="map-loader">
      <div className="map-loader-content">
        {/* Texte de chargement */}
        <span className="map-loader-text text-rose-700">
          Chargement de la carte...
        </span>{" "}
        
        {/* Animation de chargement */}
        <div className="map-loader-spinner">
          <div
            className="spinner-circle inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid text-rose-700 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </div>
      </div>
    </div>
  );
}
