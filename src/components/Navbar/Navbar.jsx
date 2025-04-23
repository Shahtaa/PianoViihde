import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  const renderNavButtons = () => {
    const navLinks = [
      { label: 'ETUSIVU', path: '/' },
      { label: 'KEIKAT', path: '/gigs' },
      { label: 'PALVELUT', path: '/services' },
      { label: 'PIANISTIT', path: '/pianists' },
      { label: 'ARTISTIT', path: '/artists' },
      { label: 'OTA YHTEYTTÄ', path: '/contact' },
    ];

    return navLinks.map(({ label, path }) => (
      <Button
        key={label}
        color="inherit"
        component={Link}
        to={path}
        onClick={() => toggleDrawer(false)}
      >
        <Typography
          sx={{
            borderBottom: currentPath === path ? '2px solid' : 'none',
            paddingBottom: '4px',
          }}
        >
          {label}
        </Typography>
      </Button>
    ));
  };

  const menuItems = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      {renderNavButtons()}
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ohjelmatoimisto Piano Viihde
        </Typography>

        <IconButton
          color="inherit"
          edge="end"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {renderNavButtons()}
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
