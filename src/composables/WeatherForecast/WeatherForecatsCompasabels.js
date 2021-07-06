import { onMounted, ref, watch } from "vue";
import { fetchWeatherForecast } from "../../helpers/api/apiConfig";

export function WeatherForecastInit() {
  const weatherForecastData = ref({});
  const getWeatherForecast = async () => {
    weatherForecastData.value = (await fetchWeatherForecast()).data;
  };

  onMounted(getWeatherForecast);
  watch(weatherForecastData, getWeatherForecast);

  return {
    weatherForecastData,
    getWeatherForecast,
  };
}
