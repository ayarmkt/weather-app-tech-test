const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const getWeatherData = async () => {
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

    console.log('response', response);
    const data = await response.json();
    const token = data['access_token'];
    return token;
  };

  const fetchWeatherData = async (token) => {
    console.log('token inside', token);
    const response = await fetch(
      'https://api.netatmo.net/api/getpublicdata?lat_ne=48.86471476180278&lon_ne=2.373046875&lat_sw=48.83579746243092&lon_sw=2.3291015625',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) throw new Error('cannot find weather data');
    const data = await response.json();
    console.log('data for weather', data);
    return data;
  };

  try {
    const token = await fetchAuthData();
    const result = await fetchWeatherData(token);
    console.log('weather result', result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
