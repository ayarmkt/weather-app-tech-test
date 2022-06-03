import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const CityButtons = ({
  locationData,
  selectedCity,
  setSelectedCity,
  setSelectedCityIndex,
}) => {
  //const [selectedCity, setSelectedCity] = useState('Paris');

  const handleClick = (e) => {
    setSelectedCity(e.target.textContent);
    const locationsNameArray = locationData
      .map((location) => Object.keys(location))
      .map(([locationName]) => locationName);
    const selectedCityIndex = locationsNameArray.indexOf(e.target.textContent);
    // console.log(
    //   locationData
    //     .map((location) => Object.keys(location))
    //     .map(([locationName]) => locationName)
    //     .indexOf(e.target.textContent)
    // );
    setSelectedCityIndex(selectedCityIndex);
  };

  const buttons = locationData.map((location) => {
    const locationName = Object.keys(location).toString();

    return (
      <Button
        key={Object.keys(location)}
        variant={locationName === selectedCity ? 'contained' : 'outlined'}
        onClick={handleClick}
      >
        {Object.keys(location)}
      </Button>
    );
  });

  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation='vertical'
        aria-label='vertical outlined button group'
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

export default CityButtons;
