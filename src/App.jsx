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
    }
  }, [value]);
  return (
    <>
      <section id="main-container">
        <section>
          <p>Погода</p>
          <AddressSuggestions
            token={import.meta.env.VITE_DADATA_API}
            value={value}
            onChange={setValue}
            filterFromBound="city"
            filterToBound="city"
          />
        </section>
        {/* 
        {weather != undefined && listWeather != undefined ? (
          <WeatherContainer data={weather} list={listWeather.list} />
        ) : (
          <div>Выберите город</div>
        )} */}
      </section>
    </>
  );
}

export default App;
