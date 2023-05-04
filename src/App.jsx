import { useState, useEffect } from 'react';
import './App.css';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
function App() {
  const [value, setValue] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (value != undefined) {
      console.log(value.data);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          value.data.geo_lat
        }&lon=${value.data.geo_lon}&appid=${
          import.meta.env.VITE_OPENWEATHER_API
        }&units=metric&lang=ru`
      )
        .then(data => data.json())
        .then(result => {
          console.log(result);
        });
    }
  }, [value]);
  console.log(value);
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
        <section>Темпиратура</section>
      </div>
    </>
  );
}

export default App;
