import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${require('../assets/LANDING_WETSUIT.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1a1819',
            height: 'fit-content',
            width: 'fit-content'
          }}
        >
          <img
            src={require('../assets/BETWET-LOGO.jpg')}
            alt=''
            height='50px'
          />
          <Typography
            color='white'
            textAlign='right'
            fontSize='13px'
            padding='0 8px 0 4px'
          >
            Curated by
            <br />
            Surf Utility
          </Typography>
        </Box>

        <Button
          sx={{
            height: '70px',
            width: '260px',
            fontSize: '18px',
            backgroundColor: 'white',
            borderRadius: '50px',
            color: 'black',
            marginBottom: '40px',
            '&:hover': {
              backgroundColor: 'lightgray'
            }
          }}
          onClick={() => navigate('/countdown')}
          // onClick={() => navigate('/scheduler')}
        >
          Enter Experience
        </Button>
      </Box>
    </Grid>
  );
};
