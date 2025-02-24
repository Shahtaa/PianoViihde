import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeButton, setActiveButton] = useState('/'); // Track active button

  // Toggle Drawer open/close
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  // Menu items to be displayed inside the Drawer
  const menuItems = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
      }}
    >
      <Button
        color="inherit"
        component={Link}
        to="/"
        onClick={() => setActiveButton('/')} // Update active button on click
      >
        <Typography
          sx={{
            borderBottom: activeButton === '/' ? '2px solid' : 'none',
            paddingBottom: '4px', // Adjust the position of the line
          }}
        >
          ETUSIVU
        </Typography>
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/gigs"
        onClick={() => setActiveButton('/gigs')}
      >
        <Typography
          sx={{
            borderBottom: activeButton === '/gigs' ? '2px solid' : 'none',
            paddingBottom: '4px',
          }}
        >
          KEIKAT
        </Typography>
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/services"
        onClick={() => setActiveButton('/services')}
      >
        <Typography
          sx={{
            borderBottom: activeButton === '/services' ? '2px solid' : 'none',
            paddingBottom: '4px',
          }}
        >
          PALVELUT
        </Typography>
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/pianists"
        onClick={() => setActiveButton('/pianists')}
      >
        <Typography
          sx={{
            borderBottom: activeButton === '/pianists' ? '2px solid' : 'none',
            paddingBottom: '4px',
          }}
        >
          PIANISTIT
        </Typography>
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/artists"
        onClick={() => setActiveButton('/artists')}
      >
        <Typography
          sx={{
            borderBottom: activeButton === '/artists' ? '2px solid' : 'none',
            paddingBottom: '4px',
          }}
        >
          ARTISTIT
        </Typography>
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/contact"
        onClick={() => setActiveButton('/contact')}
      >
        <Typography
          sx={{
            borderBottom: activeButton === '/contact' ? '2px solid' : 'none',
            paddingBottom: '4px',
          }}
        >
          OTA YHTEYTTÄ
        </Typography>
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ohjelmatoimisto Piano Viihde
        </Typography>

        {/* Burger Menu Icon (visible on mobile) */}
        <IconButton
          color="inherit"
          edge="end"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Menu (visible on medium and large screens) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            onClick={() => setActiveButton('/')}
          >
            <Typography
              sx={{
                borderBottom: activeButton === '/' ? '2px solid' : 'none',
                paddingBottom: '4px',
              }}
            >
              ETUSIVU
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/gigs"
            onClick={() => setActiveButton('/gigs')}
          >
            <Typography
              sx={{
                borderBottom: activeButton === '/gigs' ? '2px solid' : 'none',
                paddingBottom: '4px',
              }}
            >
              KEIKAT
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/services"
            onClick={() => setActiveButton('/services')}
          >
            <Typography
              sx={{
                borderBottom: activeButton === '/services' ? '2px solid' : 'none',
                paddingBottom: '4px',
              }}
            >
              PALVELUT
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/pianists"
            onClick={() => setActiveButton('/pianists')}
          >
            <Typography
              sx={{
                borderBottom: activeButton === '/pianists' ? '2px solid' : 'none',
                paddingBottom: '4px',
              }}
            >
              PIANISTIT
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/artists"
            onClick={() => setActiveButton('/artists')}
          >
            <Typography
              sx={{
                borderBottom: activeButton === '/artists' ? '2px solid' : 'none',
                paddingBottom: '4px',
              }}
            >
              ARTISTIT
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            onClick={() => setActiveButton('/contact')}
          >
            <Typography
              sx={{
                borderBottom: activeButton === '/contact' ? '2px solid' : 'none',
                paddingBottom: '4px',
              }}
            >
              OTA YHTEYTTÄ
            </Typography>
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        {menuItems}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;