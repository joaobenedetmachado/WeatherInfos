import React from 'react';
import solImage from '../../midia/sol.png';
import neveImage from '../../midia/neve.png';
import tempestadeImage from '../../midia/tempestade.png';
import nubladoImage from '../../midia/nublado.png';
import nevoeiroImage from '../../midia/nevoeiro.png';
import chuvaImage from '../../midia/chuva.png';

const WeatherInfos = (props) => {
  const getWeatherImage = (weather) => {
    switch (weather) {
      case 'Clear':
        return solImage;
      case 'Snow':
        return neveImage;
      case 'Thunderstorm':
        return tempestadeImage;
      case 'Clouds':
        return nubladoImage;
      case 'Mist':
        return nevoeiroImage;
      case 'Rain':
      default:
        return chuvaImage;
    }
  };

  return (
    <div
      style={{
        width: '310px',
        height: '700px',
        backgroundColor: '#fafafa',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <p
        style={{
          color: '#252525',
          fontSize: '28px',
        }}
      >
        {props.value}
      </p>
      <img
        style={{
          width: '200px'
        }}
        src={getWeatherImage(props.weather)} alt="Weather" />
      <p
        style={{
          color: '#252525',
          fontSize: '85px',
        }}
      >
        {props.temp}
      </p>
      <p
        style={{
          color:'#7c94b6',
        }}
      >
        {props.sense}
      </p>
    </div>
  );
};

export default WeatherInfos;
