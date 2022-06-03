import { formatCityNames } from './formatCityNames';

export const formatBasicData = (weatherData) => {
  const city = formatCityNames(weatherData.body[0].place.timezone);
  const weatherMeasures = Object.entries(weatherData.body[0].measures).map(
    (arr) => arr[1]
  );

  const basicData = {
    [weatherMeasures[0]['type'][0]]: Object.values(
      weatherMeasures[0]['res']
    )[0][0],
    [weatherMeasures[0]['type'][1]]: Object.values(
      weatherMeasures[0]['res']
    )[0][1],
    [weatherMeasures[1]['type'][0]]: Object.values(
      weatherMeasures[1]['res']
    )[0][0],
  };
  return { [city]: basicData };
};
