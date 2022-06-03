import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
//   }

function TabPanel(
  { children, value, index, ...other } //: TabPanelProps
) {
  //const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (
  index //: number
) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    //'aria-controls': `simple-tabpanel-3`,
  };
};

const WeatherMeasureTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    e, //: React.SyntheticEvent
    newValue //: number
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Temperature' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        TABLE ONE
      </TabPanel>
      <TabPanel value={value} index={1}>
        TABLE TWO
      </TabPanel>
      <TabPanel value={value} index={2}>
        TABLE THREE
      </TabPanel>
    </Box>
  );
};

export default WeatherMeasureTabs;
