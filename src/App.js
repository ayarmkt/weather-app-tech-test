import './App.css';
import { getWeatherData } from './API/getWeatherData';
//getAllWeatherData,
//getOneWeatherData,

import { locationData } from './assets/locationData';
import WeatherMeasureTabs from './components/WeatherMeasureTab/WeatherMeasureTab';
import CityButtons from './components/CityButtons';
import WeatherTable from './components/WeatherTable';
import React, { useEffect, useState } from 'react';

// const getOneWeatherData = async (locationData, setWeatherInfo) => {
//   const getResult = async () => {
//     const result = await getWeatherData(locationData);
//     console.log('result just one', result);
//     return result;
//   };

//   try {
//     const result = await getResult();
//     setWeatherInfo(result);
//     console.log('final result', result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedCity, setSelectedCity] = useState(
    ...Object.keys(locationData[value])
  );
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  //Change later
  const [weatherInfo, setWeatherInfo] = useState({
    Paris: { temperature: 25, humidity: 59, pressure: 1018 },
  });

  useEffect(() => {
    const getData = async () => {
      await getWeatherData(
        locationData[selectedCityIndex][selectedCity],
        setWeatherInfo
      );
    };
    getData();
  }, [selectedCity]);

  useEffect(() => {
    console.log('selected tab changed', value);
    //DISPLAY NEW TEMPERATURE DATA
  }, [value]);

  useEffect(() => {
    console.log('new weatherInfo data', weatherInfo);
    //DISPLAY NEW WEATHER RESULTS
  }, [weatherInfo]);

  useEffect(() => {
    console.log('initial weatherInfo data', weatherInfo);
    //DISPLAY NEW WEATHER RESULTS
  }, []);
  //console.log('stored weatherInfo', weatherInfo);

  //console.log(value, selectedCity, locationData[value][selectedCity]);
  //getAllWeatherData(locationData);

  //const weatherInfo = getWeatherData(locationData[value][selectedCity]);
  // const getWeatherInfo = () => {
  //   const callResult = async () => {
  //     const result = await getWeatherData(
  //       locationData[value][selectedCity],
  //       setWeatherInfo
  //     );
  //     return result;
  //   };

  //   try {
  //     callResult();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getWeatherInfo();
  //   console.log('weather initial', weatherInfo);
  // }, []);

  // useEffect(() => {
  //   getWeatherInfo();
  //   console.log('weather changed', weatherInfo);
  // }, [value, selectedCity]);

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

//scope=read_station read_thermostat
