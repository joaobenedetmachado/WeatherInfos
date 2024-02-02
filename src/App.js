import './App.css';
import WeatherInfos from './Components/weatherinfos/weatherinfos.js';

function App() {
  return (
    <div className="App">
      <WeatherInfos 
      value="Criciúma"
      weatherImage={require('./midia/sol.png')}
      temp={'28' + '°'}
      sense={'sensação térmica de ' + '31' + '°'}
      />
    </div>
  );
}

export default App;
