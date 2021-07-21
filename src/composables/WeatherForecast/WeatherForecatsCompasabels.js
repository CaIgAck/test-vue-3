import { onMounted, ref } from "vue";
import { fetchWeatherForecast } from "../../helpers/api/apiConfig";

export default function useWeatherForecast() {
  const forecast = ref({});
  const getWeatherForecast = async () => {
    weatherForecastData.value = (await fetchWeatherForecast()).data;
  };

  onMounted(getWeatherForecast);
  watch(weatherForecastData, getWeatherForecast);

  return {
    forecast,
    getWeatherForecast,
  };
}
