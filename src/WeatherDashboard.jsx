
import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

const weatherData = [
  { id: 1, city: 'pir', dayName: 'Thu', temp_max: 32, temp_min: 22 },
  { id: 2, city: 'karachi', dayName: 'Fri', temp_max: 30, temp_min: 24 },
 
];

const WeatherDashboard = () => {
  const [weatherForecast, setWeatherForecast] = useState(weatherData);
  const [isCelsius, setIsCelsius] = useState(true);

  const searchCityWeather = (city) => {
    const filteredData = weatherData.filter((item) =>
      item.city.toLowerCase().includes(city.toLowerCase())
    );
    setWeatherForecast(filteredData);
  };

  const handleToggle = (isCelsius) => {
    setIsCelsius(isCelsius);
  };


  const updatedWeatherForecast = weatherForecast.map((weather) => ({
    ...weather,
   
  }));

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.header}>Weather Dashboard</h1>
      <CitySearch onCitySearch={searchCityWeather} />
      <CurrentWeather weatherForecast={updatedWeatherForecast} />
      <WeatherForecast weatherForecast={updatedWeatherForecast} />
    </div>
  );
};

const styles = {
  dashboardContainer: {
    textAlign: 'center',
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '10px',
    height: '100vh'
  },
  header: {
    color: '#333',
    fontSize: '2em',
    marginBottom: '20px',
  },
};

export default WeatherDashboard;
