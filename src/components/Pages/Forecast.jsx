import React from "react";
import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiCloudy,
  WiFog,
} from "react-icons/wi";

const getIcon = (code) => {
  switch (code) {
    case 0:
      return <WiDaySunny size={30} />;
    case 1:
    case 2:
    case 3:
      return <WiCloudy size={30} />;
    case 45:
    case 48:
      return <WiFog size={30} />;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return <WiRain size={30} />;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return <WiSnow size={30} />;
    case 95:
    case 96:
    case 99:
      return <WiRain size={30} />; 
    default:
      return <WiDaySunny size={30} />;
  }
};

export default function Forecast({ forecastData }) {
  if (!forecastData || forecastData.length === 0) {
return null;
  }

  return (
    <section className="py-20 container mx-auto px-5 flex flex-wrap justify-center gap-5">
      {forecastData.map((day, index) => (
        <div
          key={index}
          className="bg-purple-600/50 backdrop-blur-md p-5 rounded-xl shadow-xl w-40 flex flex-col items-center gap-3 transition-all hover:scale-105 duration-500 text-white"
        >
          <p className="font-bold">{day.date}</p>
          {getIcon(day.code)}
          <p>Temp: {day.temp}°C</p>
          <p>Wind: {day.wind} km/h</p>
        </div>
      ))}
    </section>
  );
}