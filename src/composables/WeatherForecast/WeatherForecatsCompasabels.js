import { onMounted, ref } from "vue";
import { fetchWeatherForecast } from "../../helpers/api/apiConfig";

export function WeatherForecastInit() {
  const weatherForecastData = ref({});
  const getWeatherForecast = async () => {
    weatherForecastData.value = (await fetchWeatherForecast()).data;
    // return await fetchWeatherForecast().then((res) => {
    //   weatherForecastData.value = res.data;
    // });
  };

  onMounted(getWeatherForecast);
  // watch(weatherForecastData, getWeatherForecast);

  return {
    weatherForecastData,
    getWeatherForecast,
  };
}
