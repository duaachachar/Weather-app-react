
import React from 'react';

const CurrentWeather = ({ weatherForecast }) => {
  const currentWeather = weatherForecast[0]; 

  return (
    <div>
      {currentWeather ? (
        <>
          <h3>Current Weather</h3>
          <p>City: {currentWeather.city}</p>
          <p>Day: {currentWeather.dayName}</p>
          <p>Max Temp: {currentWeather.temp_max}°C</p>
          <p>Min Temp: {currentWeather.temp_min}°C</p>
        </>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default CurrentWeather;
