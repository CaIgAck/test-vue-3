import { onMounted, ref } from "vue";
import { fetchWeatherForecast } from "../../helpers/api/apiConfig";

export default function useWeatherForecast() {
  const forecast = ref({});
  const getWeatherForecast = async () => {
    forecast.value = (await fetchWeatherForecast()).data;
  };

  onMounted(getWeatherForecast);

  return {
    forecast,
    getWeatherForecast,
  };
}
