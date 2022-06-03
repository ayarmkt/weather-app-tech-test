import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const WeatherMeasureTabs = ({ value, setValue, className }) => {
  const handleChange = (e, newValue) => {
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
          {/* <Tab label='Rain' {...a11yProps(1)} />
          <Tab label='Wind' {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
    </Box>
  );
};

export default WeatherMeasureTabs;
