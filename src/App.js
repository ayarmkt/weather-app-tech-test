import './App.css';
import React, { useEffect, useState } from 'react';
import { getWeatherData } from './API/getWeatherData';
import { locationData } from './assets/locationData';
import WeatherMeasureTabs from './components/WeatherMeasureTab';
import CityButtons from './components/CityButtons';
import WeatherTable from './components/WeatherTable';

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedCity, setSelectedCity] = useState(
    ...Object.keys(locationData[value])
  );
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await getWeatherData(
        locationData[selectedCityIndex][selectedCity],
        setWeatherInfo
      );
    };
    getData();
  }, [selectedCity]);

  return (
    <div className='container'>
      <h1>Widget Weathermap</h1>
      <div className='content-container'>
        <WeatherMeasureTabs
          value={value}
          setValue={setValue}
          className='tabs'
        />
        <WeatherTable
          value={value}
          weatherInfo={weatherInfo}
          className='table'
        />
        <CityButtons
          className='buttons'
          locationData={locationData}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setSelectedCityIndex={setSelectedCityIndex}
        />
      </div>
    </div>
  );
};

export default App;
