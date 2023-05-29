import { useState, useEffect } from "react";
import "./App.css";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { WeatherContainer } from "./component/weather-container";
function App() {
  const [value, setValue] = useState(); // Переменная с данными города
  const [weather, setWeather] = useState();
  const [listWeather, setListWeather] = useState();

  useEffect(() => {
    if (value != undefined) {
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
  }, [value]);
  return (
    <>
      <div>
        <AddressSuggestions
          token={import.meta.env.VITE_DADATA_API}
          value={value}
          onChange={setValue}
          filterFromBound="city"
          filterToBound="city"
        />
        {weather != undefined && listWeather != undefined ? (
          <WeatherContainer data={weather} list={listWeather.list} />
        ) : (
          <div>Выберите город</div>
        )}
      </div>
    </>
  );
}

export default App;
