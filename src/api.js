import axios from "axios";

export async function getLocationCoords(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
  try {
    const res = await axios.get(url);
    if (!res.data.results || res.data.results.length === 0) {
      throw new Error("City not found");
    }
    const { latitude, longitude } = res.data.results[0];
    return { latitude, longitude };
  } catch {
    throw new Error("Failed to fetch location");
  }
}

export async function getWeather(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,windspeed_10m_max,weathercode&timezone=auto`;

  try {
    const res = await axios.get(url);

    return {
      temperature: res.data.daily.temperature_2m_max[0],
      windspeed: res.data.daily.windspeed_10m_max[0],
      weathercode: res.data.daily.weathercode[0],
      daily: res.data.daily.time.map((date, i) => ({
        date: date,
        temp: res.data.daily.temperature_2m_max[i],
        wind: res.data.daily.windspeed_10m_max[i],
        code: res.data.daily.weathercode[i],
      })),
    };
  } catch {
    throw new Error("Failed to fetch weather");
  }
}