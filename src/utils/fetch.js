export function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${
      value.data.geo_lat
    }&lon=${value.data.geo_lon}&appid=${
      import.meta.env.VITE_OPENWEATHER_API
    }&units=metric&lang=ru`
  )
    .then((data) => data.json())
    .then((result) => {
      setWeather(result);
    });
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${
      value.data.geo_lat
    }&lon=${value.data.geo_lon}&cnt=5&appid=${
      import.meta.env.VITE_OPENWEATHER_API
    }&units=metric&lang=ru`
  )
    .then((data) => data.json())
    .then((result) => {
      setListWeather(result);
    });
}
