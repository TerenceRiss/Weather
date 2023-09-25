import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Meteo({ selectedFactory }) {
  const [weather, setWeather] = useState(null);
  const WEATHER_API_KEY = "92a43162cbfeb1c2f82ce93a1fe11b14";

  useEffect(() => {
    // Vérifie si une usine est sélectionnée
    if (selectedFactory) {
      // Effectue une requête à l'API de météo
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${selectedFactory.lat}&lon=${selectedFactory.lng}&units=metric&lang=fr&&appid=${WEATHER_API_KEY}`
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.log("Erreur lors de la récupération de la météo", error);
        });
    }
  }, [selectedFactory]);

  // Fonction pour obtenir l'emoji météo en fonction de la condition météo principale
  function getWeatherEmoji(weatherMain) {
    switch (weatherMain) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧";
      case "Snow":
        return "❄️";
      case "Thunderstorm":
        return "⚡";
      case "Drizzle":
        return "🌦";
      case "Mist":
      case "Fog":
      case "Haze":
        return "🌫";
      default:
        return "";
    }
  }

  return (
    <>
      {weather ? (
        <div className="weather-info">
          {/* Emoji météo */}
          <span className="weather-emoji text-6xl">
            {getWeatherEmoji(weather.weather[0].main)}
          </span>
          <div>
            {/* Description météo */}
            <p className="weather-description font-semibold text-lg py-3 capitalize">
              {weather.weather[0].description}
            </p>
            {/* Température */}
            <p className="weather-temperature text-4xl font-bold">
              {weather.main.temp}°C
            </p>
          </div>
        </div>
      ) : (
        <p className="loading-message text-center">Chargement de la météo...</p>
      )}
    </>
  );
}
