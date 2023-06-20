import { useState, useEffect } from "react";
import { Icon } from "./utils/weatherIconSet";
import { getWeather } from "./utils/fetch";
import { HeaderComponent } from "./component/header/header";
import { FooterComponent } from "./component/footer/footer";
import "./style/page/main.scss";

function App() {
  const [value, setValue] = useState(); // Переменная с данными города
  const [weather, setWeather] = useState();
  const [listWeather, setListWeather] = useState();

  useEffect(() => {
    if (value != undefined) {
      getWeather(value, setWeather, setListWeather);
    }
  }, [value]);

  return (
    <>
      <section id="main-container">
        <HeaderComponent value={value} setValue={setValue} />
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
            <FooterComponent weather={weather} listWeather={listWeather} />
          </>
        ) : (
          <p className="main_text">Выберите город</p>
        )}
      </section>
    </>
  );
}

export default App;
