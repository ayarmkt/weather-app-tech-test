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

    //console.log('response', response);
    const data = await response.json();
    const token = data['access_token'];
    return token;
  };

  const fetchWeatherData = async (token) => {
    //console.log('token inside', token);
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
    //console.log('data for weather', data);
    return data;
  };

  try {
    const token = await fetchAuthData();
    const result = await fetchWeatherData(token);
    console.log('weather result inside getWeatherData', result);
    // console.log(
    //   'for formatting',
    //   Object.entries(result.body[0].measures).map((arr) => arr[1]).map(obj => )
    // );
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

// export const getAllWeatherData = async (locationData) => {
//   const results = await Promise.all(
//     locationData.map(async (location) => {
//       //console.log(location);

//       const result = await getWeatherData(
//         location['lat_ne'],
//         location['lon_ne'],
//         location['lat_sw'],
//         location['lon_sw']
//       );
//       console.log('result', location.location, result);
//       return result;
//     })
//   );
//   console.log('results', results);
// };

// export const getOneWeatherData = (locationData) => {
//   // const result = getWeatherData(locationData);
//   // //console.log('result just Paris', Object.entries(result.body[0].measures)[0]);
//   // return result;
// };

// export const getOneWeatherData = async (locationData, setWeatherInfo) => {
//   const getResult = async () => {
//     const result = await getWeatherData(locationData);
//     //console.log('result just one', result);
//     return result;
//   };

//   try {
//     const result = await getResult();
//     setWeatherInfo(result);
//     //console.log('final result', result);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };
