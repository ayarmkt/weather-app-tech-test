import './App.css';
import { getWeatherData, getAllWeatherData } from './API/getWeatherData';
import { locationData } from './assets/locationData';
import WeatherMeasureTabs from './components/WeatherMeasureTab/WeatherMeasureTab';
import CityButtons from './components/CityButtons';
import WeatherTable from './components/WeatherTable';
import React, { useState } from 'react';

const getOneWeatherData = async (locationData) => {
  const result = await getWeatherData(
    locationData['lat_ne'],
    locationData['lon_ne'],
    locationData['lat_sw'],
    locationData['lon_sw']
  );
  console.log('result just Paris', Object.entries(result.body[0].measures)[0]);
  return result;
};

const App = () => {
  const [value, setValue] = useState(0);

  getAllWeatherData(locationData);

  console.log(getOneWeatherData(locationData[0]));

  return (
    <>
      <h1>Widget Weathermap</h1>
      <WeatherMeasureTabs value={value} setValue={setValue} />
      <WeatherTable value={value} />
      <CityButtons locationData={locationData} />
    </>
  );
};

export default App;

//scope=read_station read_thermostat
