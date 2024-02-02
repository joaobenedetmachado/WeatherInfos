import React, { useState } from 'react'

const WeatherInfos = (props) => {
  return (
    <div
      style={{
        width: '310px',
        height: 'auto',
        backgroundColor: '#252525',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
        <p
         style={{
            color: '#ffffff',
            fontSize: '28px',
         }}
        >
        {props.value}
        </p>
        <img 
        style={{
            width: '200px'
        }}
        src={props.weatherImage} alt="Weather" />
        <p
         style={{
            color: '#ffffff',
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
  )
}

export default WeatherInfos