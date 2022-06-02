const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const getWeatherData = async (latNE, lonNE, latSW, lonSW) => {
  const fetchAuthData = async () => {
    const response = await fetch(
      `https://api.netatmo.com/oauth2/token`,

      {
        method: 'POST',
        body: new URLSearchParams({
          grant_type: 'password',
          client_id: clientID,
          client_secret: clientSecret,
          username: username,
          password: password,
          //scope: 'read_station read_thermostat',
        }),

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    );

    if (!response.ok) throw new Error('cannot find access token');

    //console.log('response', response);
    const data = await response.json();
    const token = data['access_token'];
    return token;
  };

  const fetchWeatherData = async (token) => {
    //console.log('token inside', token);
    const response = await fetch(
      `https://api.netatmo.net/api/getpublicdata?lat_ne=${latNE}&lon_ne=${lonNE}&lat_sw=${latSW}&lon_sw=${lonSW}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) throw new Error('cannot find weather data');
    const data = await response.json();
    //console.log('data for weather', data);
    return data;
  };

  try {
    const token = await fetchAuthData();
    const result = await fetchWeatherData(token);
    //console.log('weather result', result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getAllWeatherData = (locationData) => {
  Promise.all(
    locationData.map(async (location) => {
      //console.log(location);

      const result = await getWeatherData(
        location['lat_ne'],
        location['lon_ne'],
        location['lat_sw'],
        location['lon_sw']
      );
      console.log('result', location.location, result);
      return result;
    })
  );
};
