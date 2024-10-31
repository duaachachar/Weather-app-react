
import React from 'react';

const WeatherForecast = ({ weatherForecast }) => {
  return (
    <div>
      <h3>5-Day Forecast</h3>
      {weatherForecast.length > 0 ? (
        weatherForecast.map((weather) => (
          <div key={weather.id} className="forecast-day">
            <p>Day: {weather.dayName}</p>
            <p>City: {weather.city}</p>
            <p>Max Temp: {weather.temp_max}°C</p>
            <p>Min Temp: {weather.temp_min}°C</p>
          </div>
        ))
      ) : (
        <p>No forecast data available</p>
      )}
    </div>
  );
};

export default WeatherForecast;
