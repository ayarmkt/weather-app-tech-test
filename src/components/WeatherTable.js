import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { locationData } from '../assets/locationData';

const WeatherTable = ({ value, weatherInfo, className }) => {
  console.log('data I want to use', weatherInfo);
  let basicData;
  let weatherMeasuresNames;
  //let noWeatherInfo;
  if (weatherInfo) {
    [basicData] = Object.values(weatherInfo);
    weatherMeasuresNames = Object.keys(basicData);
    //noWeatherInfo = !weatherInfo.body;
  }
  //New York: {temperature: 25, humidity: 59, pressure: 1018}

  const rows = [weatherInfo];

  return (
    <>
      {/* {!weatherInfo && <p>Loading...</p>} */}
      {/* {weatherInfo && noWeatherInfo && <p>No results</p>} */}
      <TableContainer
        className={className}
        component={Paper}
        value={value}
        index={0}
        // sx={{ maxWidth: 600 }}
      >
        <Table //sx={{ maxWidth: 300 }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>City</TableCell>
              {weatherInfo !== null &&
                weatherMeasuresNames.map((name) => (
                  <TableCell key={name} align='right' sx={{ fontWeight: 700 }}>
                    {name}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {weatherInfo === null && <TableCell>No data.</TableCell>}
            {weatherInfo !== null &&
              rows.map((row) => (
                <TableRow
                  key={Object.keys(row)}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {Object.keys(row)}
                  </TableCell>
                  {weatherMeasuresNames.map((name) => (
                    <TableCell key={name} align='right'>
                      {basicData[name]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </TabPanel> */}
      {/* <TabPanel value={value} index={1}>
        TABLE TWO
      </TabPanel>
      <TabPanel value={value} index={2}>
        TABLE THREE
      </TabPanel> */}
    </>
  );
};

export default WeatherTable;
