import { useState, useEffect } from "react";
import "./style/page/main.scss";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { WeatherContainer } from "./component/weather-container";
import CloudsIcon from "./icons/cloud.svg";
import StormIcon from "./icons/storm.svg";
import RainIcon from "./icons/rain.svg";
import ClearIcon from "./icons/sun.svg";
import WaterIcon from "./icons/water.svg";
import SunRiseIcon from "./icons/sunrise.svg";
import WindIcon from "./icons/wind.svg";
import SunSetIcon from "./icons/sunset.svg";
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
            <footer className="footer_container">
              <section className="secondary_info_container">
                <div className="secondary_text_container">
                  <div className="secondary_unit_container">
                    <img className="secondary_icon " src={WaterIcon} />
                    <div>
                      <p className="secondary_main_text">Влажность</p>
                      <p className="secondary_main_text">
                        {weather.main.humidity} %
                      </p>
                    </div>
                  </div>
                  <div className="secondary_unit_container">
                    <img className="secondary_icon " src={SunRiseIcon} />
                    <p className="secondary_main_text">
                      {new Date(
                        weather.sys.sunrise * 1000
                      ).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="secondary_text_container">
                  <div className="secondary_unit_container">
                    <img className="secondary_icon " src={WindIcon} />
                    <p className="secondary_main_text">
                      {weather.wind.speed} м/сек
                    </p>
                  </div>
                  <div className="secondary_unit_container">
                    <img className="secondary_icon " src={SunSetIcon} />
                    <p className="secondary_main_text">
                      {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </section>
              <section className="third_container ">
                {listWeather.list.map((data, key) => {
                  return (
                    <div className="hour-container" key={key}>
                      <p className="secondary_main_text">
                        {new Date(data.dt * 1000).toLocaleTimeString()}
                      </p>
                      <img
                        className="hour-icon secondary_icon "
                        src={Icon[data.weather[0].main + "Icon"]}
                        alt="Иконка погоды"
                      />
                      <p className="secondary_main_text">
                        {data.main.feels_like}°C
                      </p>
                    </div>
                  );
                })}
              </section>
            </footer>
          </>
        ) : (
          <p className="main_text">Выберите город</p>
        )}
      </section>
    </>
  );
}

export default App;
