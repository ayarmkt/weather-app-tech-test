import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const CityButtons = ({ locationData }) => {
  const [selectedBtn, setSelectedBtn] = useState('Paris');

  const handleClick = (e) => {
    setSelectedBtn(e.target.textContent);
  };

  const buttons = locationData.map((location) => (
    <Button
      key={location.location}
      variant={location.location === selectedBtn ? 'contained' : 'outlined'}
      onClick={handleClick}
    >
      {location.location}
    </Button>
  ));

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
