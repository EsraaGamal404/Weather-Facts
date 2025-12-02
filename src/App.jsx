import { useState } from "react";
import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home";
import Forecast from "./components/Pages/Forecast";
import { getLocationCoords, getWeather } from "./api";
import Favorites from "./components/Pages/Favorites";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setError("");

      const { latitude, longitude } = await getLocationCoords(city);
      const weatherData = await getWeather(latitude, longitude);

      setData({
        temp: weatherData.temperature,
        wind: weatherData.windspeed,
        code: weatherData.weathercode,
      });

      setForecastData(weatherData.daily);
      setFavorites((prev) => {
        if(!prev.includes(city.trim()))
          return[...prev, city.trim()];
        return prev;
      });
    } catch {
      setError("City not found");
      setData(null);
      setForecastData([]);
    }
  };

  return (
    <>
      <Header setcity={setCity} fetchWeather={fetchWeather} weather={data} />
      <Home data={data} error={error} />
      <Forecast forecastData={forecastData} />
      <Favorites favorites = {favorites}
      setFavorites={setFavorites} />
    </>
  );
}

export default App;