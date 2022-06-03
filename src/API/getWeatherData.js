import { formatBasicData } from '../utils/formatBasicData';

const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const getWeatherData = async (
  { lat_ne, lon_ne, lat_sw, lon_sw },
  setWeatherInfo
) => {
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
          scope: 'read_station read_thermostat',
        }),

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    );

    if (!response.ok) throw new Error('cannot find access token');

    const data = await response.json();
    const token = data['access_token'];
    return token;
  };

  const fetchWeatherData = async (token) => {
    const response = await fetch(
      `https://api.netatmo.net/api/getpublicdata?lat_ne=${lat_ne}&lon_ne=${lon_ne}&lat_sw=${lat_sw}&lon_sw=${lon_sw}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) throw new Error('cannot find weather data');
    const data = await response.json();
    return data;
  };

  try {
    const token = await fetchAuthData();
    const result = await fetchWeatherData(token);

    if (result.body.length === 0) {
      await setWeatherInfo(null);
      return result;
    }
    await setWeatherInfo(formatBasicData(result));
    return result;
  } catch (error) {
    console.error(error);
  }
};
