import { useState, useEffect } from "react";
import "./style/page/main.scss";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { WeatherContainer } from "./component/weather-container";
import CloudsIcon from "./icons/cloud.svg";
import StormIcon from "./icons/storm.svg";
import RainIcon from "./icons/rain.svg";
import ClearIcon from "./icons/sun.svg";
import { getWeather } from "./utils/fetch";
function App() {
  const [value, setValue] = useState(); // Переменная с данными города
  const [weather, setWeather] = useState();
  const [listWeather, setListWeather] = useState();
  const Icon = { CloudsIcon, StormIcon, RainIcon, ClearIcon };
  useEffect(() => {
    if (value != undefined) {
      getWeather(value, setWeather, setListWeather);
    }
  }, [value]);
  console.log(weather);
  console.log(listWeather);
  return (
    <>
      <section id="main-container">
        <header className="header">
          <p className="main_text">Погода</p>
          <AddressSuggestions
            token={import.meta.env.VITE_DADATA_API}
            value={value}
            onChange={setValue}
            filterFromBound="city"
            filterToBound="city"
          />
        </header>
        {weather != undefined && listWeather != undefined ? (
          <>
            <main className="main_container">
              <div className="main_info_container">
                <img
                  className="icon"
                  src={Icon[weather.weather[0].main + "Icon"]}
                  alt="Иконка погоды"
                />
                <p className="main_info_text ">{weather.main.temp} °C</p>
                <p className="main_info_text ">{value.value}</p>
              </div>
              <div className="main_time_container">
                <p className="main_info_text">
                  {new Date(
                    Date.now() +
                      new Date().getTimezoneOffset() * 60000 +
                      weather.timezone * 1000
                  ).toLocaleTimeString()}
                </p>
              </div>
            </main>
            <footer>
              <div></div> <div> </div>
            </footer>
          </>
        ) : (
          <p className="main_text">Выберите город</p>
        )}

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
