import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import WeatherTable from '../WeatherTable';

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
//   }

const a11yProps = (
  index //: number
) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    //'aria-controls': `simple-tabpanel-3`,
  };
};

const WeatherMeasureTabs = ({ value, setValue, className }) => {
  //const [value, setValue] = useState(0);

  const handleChange = (
    e, //: React.SyntheticEvent
    newValue //: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box className={className} sx={{ width: '100%', mb: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Temperature' {...a11yProps(0)} />
          <Tab label='Temperature' {...a11yProps(1)} />
          <Tab label='Temperature' {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* <WeatherTable value={value} /> */}
      {/* <TabPanel value={value} index={0}>
        TABLE ONE
      </TabPanel>
      <TabPanel value={value} index={1}>
        TABLE TWO
      </TabPanel>
      <TabPanel value={value} index={2}>
        TABLE THREE
      </TabPanel> */}
    </Box>
  );
};

export default WeatherMeasureTabs;
