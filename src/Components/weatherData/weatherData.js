import React, { useState } from 'react';

const Style = {
  width: '650px',
  height: '620px',
  backgroundColor: '#252525',
  padding: '20px',
  fontSize: '16px',
  marginBottom: '10px',
  color: 'white',
  borderRadius: '10px',
  marginLeft: '20px',
  flexWrap: 'wrap',
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  gap: '20px',
  flexDirection: 'column',
};

const UlStyle = {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '0',
    margin: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#252525',
    borderRadius: '10px',
  };

const WeatherData = ({ text }) => (
    <div style={Style}>
      <ul style={UlStyle}>
        {Object.entries(text).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {typeof value === 'object'? (
              <ul>
                {Object.entries(value).map(([nestedKey, nestedValue]) => (
                  <li key={nestedKey}>
                    <strong>{nestedKey}:</strong> {nestedValue.toString()}
                  </li>
                ))}
              </ul>
            ) : (
              value.toString()
            )}
          </li>
        ))}
      </ul>
    </div>
  );

export default WeatherData;