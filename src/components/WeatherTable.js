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

const createData = (
  name, //: string
  calories, //: number
  fat, //: number
  carbs, //: number
  protein //: number
) => {
  return { name, calories, fat, carbs, protein };
};

const WeatherTable = ({ value }) => {
  //   const TabPanel = (
  //     { children, value, index, ...other } //: TabPanelProps
  //   ) => {
  //     //const { children, value, index, ...other } = props;

  //     return (
  //       <div
  //         role='tabpanel'
  //         hidden={value !== index}
  //         id={`simple-tabpanel-${index}`}
  //         aria-labelledby={`simple-tab-${index}`}
  //         {...other}
  //       >
  //         {value === index && (
  //           <Box sx={{ p: 3 }}>
  //             <Typography>{children}</Typography>
  //           </Box>
  //         )}
  //       </div>
  //     );
  //   };

  const rows = [
    //createData(locationData[0], 237, 9.0, 37, 4.3),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    // {
    //     location: 'Paris',
    //     lat_ne: 48.86471476180278,
    //     lat_sw: 48.83579746243092,
    //     lon_ne: 2.373046875,
    //     lon_sw: 2.3291015625,
    //   },
  ];

  console.log('rows', rows);

  return (
    <>
      {/* <TabPanel value={value} index={0}> */}
      <TableContainer component={Paper} value={value} index={0}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Temperature??</TableCell>
              <TableCell align='right'>Humidity??</TableCell>
              <TableCell align='right'>Pressure??</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
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
