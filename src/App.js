import './App.css';
import { getAllWeatherData } from './API/getWeatherData';
import { locationData } from './assets/locationData';
import WeatherMeasureTabs from './components/WeatherMeasureTab/WeatherMeasureTab';
import CityButtons from './components/CityButtons';

const App = () => {
  getAllWeatherData(locationData);

  return (
    <>
      <h1>Widget Weathermap</h1>
      <WeatherMeasureTabs />
      <CityButtons locationData={locationData} />
    </>
  );
};

export default App;

//scope=read_station read_thermostat
