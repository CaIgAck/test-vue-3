import Axios from "axios";
import apiKey from "../apiKey";

export function fetchWeatherForecast() {
  return Axios.get(
    "https://community-open-weather-map.p.rapidapi.com/weather?lat=55.47&lon=49.7&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Kazan",
    {
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    }
  );
}
