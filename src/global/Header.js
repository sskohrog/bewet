import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/MenuRounded';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: 'absolute', width: '100vw' }}>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'white',
          float: 'right'
        }}
      >
        <MenuIcon sx={{ fontSize: '30px' }} />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }
        }}
      >
        <MenuItem onClick={handleClose}>
          <a
            href='https://bewet-appointments.square.site'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            GET MEASURED
          </a>
        </MenuItem>
      </Menu>
    </Box>
  );
};
