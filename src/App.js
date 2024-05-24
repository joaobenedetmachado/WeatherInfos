import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfos from './Components/weatherinfos/weatherinfos';
import InputSearch from './Components/inputSearch/inputSearch';
import WeatherData from './Components/weatherData/weatherData';

const api = {
  key: "24897893e27c26a4a999b9250bbc38d0",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  units: "metric"
}

function getUsers(text) {
  const url = `${api.base}weather?q=${text}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;

  return axios.get(url)
   .then(response => {
      console.log(response.data);
      return response.data;
    })
}

function App() {
  const [text, setText] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    getUsers(text)
     .then(data => setWeatherData(data))
     .catch(error => console.error(error));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const pairs = Object.entries(weatherData);

  return (
    <div className="App">
      <div className="inputArea" >
        <InputSearch
          placeholder="Enter your city"
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button className="inputButton" onClick={handleClick}>Search</button>
      </div>
      <div className='MainMenu'>
        <WeatherInfos
          value={weatherData.name}
          weatherImage={require('./midia/sol.png')}
          temp={`${weatherData.main && weatherData.main.temp || `0` }°` }
          sense={`sensação térmica de ${weatherData.main && weatherData.main.feels_like || `0`}°`}
        />
        <WeatherData text={weatherData} />
      </div>
    </div>
  );
}

export default App;