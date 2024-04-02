import React, { useContext, useState } from 'react';
import CountdownWidget from 'react-countdown';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

import { FirebaseContext } from '../global/FirebaseContext';

export const Countdown = () => {
  const { addEmailToList } = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !!event.target.value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleJoinWaitlist = () => {
    if (error) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      return;
    } else {
      addEmailToList(email);
      setEmail('');
    }
  };

  const displayTimer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Typography variant='h2' fontWeight='600' pb='6px'>
          WOOHOO !
        </Typography>
      );
    } else {
      return (
        <Box sx={{ display: 'flex', color: 'white' }}>
          {Object.entries({ days, hours, minutes, seconds }).map(
            ([key, value]) => (
              <Box
                sx={{
                  display: 'flex',
                  flexFlow: 'column',
                  alignItems: 'center',
                  padding: '0 40px',
                  borderRight: key !== 'seconds' ? '0.5px solid white' : 'none'
                }}
              >
                <Typography
                  variant='h2'
                  fontWeight='600'
                  pb='6px'
                  letterSpacing='6px'
                >
                  {value}
                </Typography>
                <Typography textTransform='uppercase'>{key}</Typography>
              </Box>
            )
          )}
        </Box>
      );
    }
  };

  return (
    <Grid
      container
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${require('../assets/BEWET_WAITLIST.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box>
          <CountdownWidget
            date={new Date('05/01/2024')}
            renderer={displayTimer}
          />
        </Box>
        <TextField
          id='outlined-basic'
          label='JOIN WAITLIST'
          variant='outlined'
          value={email}
          onChange={handleEmailChange}
          error={!!error}
          sx={{
            backgroundColor: 'white',
            mt: '30px',
            '& label.Mui-focused': {
              color: '#A0AAB4'
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#B2BAC2'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#E0E3E7'
              },
              '&:hover fieldset': {
                borderColor: '#B2BAC2'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C'
              }
            }
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                color={error ? 'error' : 'default'}
                sx={{ marginLeft: '10px' }}
                onClick={handleJoinWaitlist}
              >
                <EmailIcon />
              </IconButton>
            )
          }}
        />
      </Box>
    </Grid>
  );
};
