import './App.css';
import React, { useState } from 'react';
import WeatherInfos from './Components/weatherinfos/weatherinfos';
import InputSearch from './Components/inputSearch/inputSearch';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // funcao para chamar a api
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
      </div>
      <div className='MainMenu'>
        <WeatherInfos
          value="Criciúma"
          weatherImage={require('./midia/sol.png')}
          temp={'28' + '°'}
          sense={'sensação térmica de ' + '31' + '°'}
        />
      </div>
    </div>
  );
}

export default App;