import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material'; // Make sure Button is imported
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu Icon for Burger Menu

function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false); // State for controlling Drawer visibility

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
          to="/media"
          onClick={() => setOpenDrawer(false)}
        >
          MEDIA
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
    )

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
            onClick={() => toggleDrawer(true)} // Open Drawer when clicked
            sx={{ display: { xs: 'block', md: 'none' } }} // Show only on small screens (mobile)
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
            <Button color="inherit" component={Link} to="/media">
              MEDIA
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              OTA YHTEYTTÄ
            </Button>
          </Box>
        </Toolbar>

        {/* Drawer (Mobile Menu) */}
        <Drawer
          anchor="right" // Drawer comes from the right side
          open={openDrawer} // If true, Drawer will be open
          onClose={() => toggleDrawer(false)} // Close the Drawer when clicking outside
        >
          {menuItems} {/* The items that appear inside the Drawer */}
        </Drawer>
      </AppBar>
    )
}

export default Navbar;