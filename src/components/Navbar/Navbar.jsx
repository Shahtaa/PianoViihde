import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

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
        onClick={() => setOpenDrawer(false)}
      >
        ETUSIVU
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/gigs"
        onClick={() => setOpenDrawer(false)}
      >
        KEIKAT
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/services"
        onClick={() => setOpenDrawer(false)}
      >
        PALVELUT
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/pianists"
        onClick={() => setOpenDrawer(false)}
      >
        PIANISTIT
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/artists"
        onClick={() => setOpenDrawer(false)}
      >
        ARTISTIT
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/contact"
        onClick={() => setOpenDrawer(false)}
      >
        OTA YHTEYTTÄ
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
          <Button color="inherit" component={Link} to="/">
            ETUSIVU
          </Button>
          <Button color="inherit" component={Link} to="/gigs">
            KEIKAT
          </Button>
          <Button color="inherit" component={Link} to="/services">
            PALVELUT
          </Button>
          <Button color="inherit" component={Link} to="/pianists">
            PIANISTIT
          </Button>
          <Button color="inherit" component={Link} to="/artists">
            ARTISTIT
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            OTA YHTEYTTÄ
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