import './App.css';
import { getAllWeatherData } from './API/getWeatherData';
import { locationData } from './assets/locationData';

const App = () => {
  getAllWeatherData(locationData);
};

export default App;

//scope=read_station read_thermostat
