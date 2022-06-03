import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const WeatherTable = ({ value, weatherInfo, className }) => {
  let basicData;
  let weatherMeasuresNames;
  if (weatherInfo) {
    [basicData] = Object.values(weatherInfo);
    weatherMeasuresNames = Object.keys(basicData);
  }

  const rows = [weatherInfo];

  return (
    <>
      <TableContainer
        className={className}
        component={Paper}
        value={value}
        index={0}
      >
        <Table aria-label='simple table'>
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
    </>
  );
};

export default WeatherTable;
