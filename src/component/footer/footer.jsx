import WaterIcon from "../../icons/water.svg";
import SunRiseIcon from "../../icons/sunrise.svg";
import WindIcon from "../../icons/wind.svg";
import SunSetIcon from "../../icons/sunset.svg";
import { Icon } from "../../utils/weatherIconSet";
import "./footer.scss";
export function FooterComponent(props) {
  return (
    <footer className="footer_container">
      <section className="secondary_info_container">
        <div className="secondary_text_container">
          <div className="secondary_unit_container">
            <img className="secondary_icon " src={WaterIcon} />
            <div>
              <p className="secondary_main_text">Влажность</p>
              <p className="secondary_main_text">
                {props.weather.main.humidity} %
              </p>
            </div>
          </div>
          <div className="secondary_unit_container">
            <img className="secondary_icon " src={SunRiseIcon} />
            <p className="secondary_main_text">
              {new Date(
                props.weather.sys.sunrise * 1000 +
                  new Date().getTimezoneOffset() * 60000 +
                  props.weather.timezone * 1000
              ).toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className="secondary_text_container">
          <div className="secondary_unit_container">
            <img className="secondary_icon " src={WindIcon} />
            <p className="secondary_main_text">
              {props.weather.wind.speed} м/сек
            </p>
          </div>
          <div className="secondary_unit_container">
            <img className="secondary_icon " src={SunSetIcon} />
            <p className="secondary_main_text">
              {new Date(
                props.weather.sys.sunset * 1000 +
                  new Date().getTimezoneOffset() * 60000 +
                  props.weather.timezone * 1000
              ).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </section>
      <section className="third_container ">
        {props.listWeather.list.map((data, key) => {
          return (
            <div className="hour-container" key={key}>
              <p className="secondary_main_text">
                {new Date(
                  data.dt * 1000 +
                    new Date().getTimezoneOffset() * 60000 +
                    props.weather.timezone * 1000
                ).toLocaleTimeString()}
              </p>
              <img
                className="hour-icon secondary_icon "
                src={Icon[data.weather[0].main + "Icon"]}
                alt="Иконка погоды"
              />
              <p className="secondary_main_text">{data.main.feels_like}°C</p>
            </div>
          );
        })}
      </section>
    </footer>
  );
}
