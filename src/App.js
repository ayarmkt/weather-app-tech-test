import './App.css';
import { getWeatherData } from './API/getWeatherData';

const App = () => {
  getWeatherData();
};

export default App;

//scope=read_station read_thermostat
