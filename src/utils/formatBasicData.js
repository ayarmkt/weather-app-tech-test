export const formatBasicData = (weatherData) => {
  const weatherMeasures = Object.entries(weatherData.body[0].measures).map(
    (arr) => arr[1]
  );
  console.log('for formatting 1', weatherMeasures);
  console.log(
    'for formatting 2',
    Object.values(weatherMeasures[1]['res'])[0][0]
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
  console.log('basicData', basicData);
  //return weatherData;
  return basicData;
};
