import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfos from './Components/weatherinfos/weatherinfos';
import InputSearch from './Components/inputSearch/inputSearch';

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

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getUsers(text)
        .then(data => setWeatherData(data))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="App">
      <div className="inputArea" >
        <InputSearch
          placeholder="Enter your city"
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => getUsers(text)
          .then(data => setWeatherData(data))
          .catch(error => console.error(error))
        }>Get Weather</button>
      </div>
      <div className='MainMenu'>
        <WeatherInfos
          value={weatherData.name}
          weatherImage={require('./midia/sol.png')}
          temp={`${weatherData.main && weatherData.main.temp}°`}
          sense={`sensação térmica de ${weatherData.main && weatherData.main.feels_like}°`}
        />
        {/* aqui fazer a area que vai ter todas as outras informacoes do api */}
      </div>
    </div>
  );
}

export default App;