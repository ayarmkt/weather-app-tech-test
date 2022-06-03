import './App.css';
import { getAllWeatherData } from './API/getWeatherData';
import { locationData } from './assets/locationData';
import WeatherMeasureTabs from './components/WeatherMeasureTab/WeatherMeasureTab';

const App = () => {
  getAllWeatherData(locationData);

  return (
    <>
      <h1>Widget Weathermap</h1>
      <WeatherMeasureTabs />
    </>
  );
};

export default App;

//scope=read_station read_thermostat
