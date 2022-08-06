import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const api = {
  key: "48fbc42d500269781f3e2ad755166925",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [bgcol, setbgcolor] = useState('')

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {

          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <div className="App" >
      <main>

        <input type="text" placeholder="Type here"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search} />
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location_date_wea">

              <div className="weather" >
                <h1 >{Math.round(weather.main.temp)}°C</h1>
                <div className="details">
                  <h3>{weather.weather[0].main}</h3>
                </div>
                <div className="location">
                  <h6>{weather.name}, {weather.sys.country}</h6>
                  <h6>12.00 AM,Monday</h6>
                  <br />
                </div>

              </div>
            </div>
          </div>

        ) : ('')}



      </main>
      <style>
        {
          'App {background-image: url('
        }
      </style>
    </div>

  );
}

export default App;