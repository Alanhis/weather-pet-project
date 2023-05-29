import PropTypes from "prop-types";
import CloudsIcon from "../icons/cloud.svg";
import StormIcon from "../icons/storm.svg";
import RainIcon from "../icons/rain.svg";
import ClearIcon from "../icons/sun.svg";
import "./weather-container.css";
WeatherContainer.propTypes = {
  data: PropTypes.object,
};
const Icon = { CloudsIcon, StormIcon, RainIcon, ClearIcon };
export function WeatherContainer(props) {
  const weather = props.data.weather[0].main + "Icon";

  return (
    <section className="container">
      <img src={Icon[weather]} alt="Иконка погоды" />
      <p>На улице сейчас {props.data.weather[0].description}</p>
      <p>
        Текущая температура: {props.data.main.temp}°C . По ощущениям{" "}
        {props.data.main.feels_like}°C
      </p>
      <p>
        Рассвет в {new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()}
      </p>
      <p>
        Закат в {new Date(props.data.sys.sunset * 1000).toLocaleTimeString()}
      </p>
    </section>
  );
}
