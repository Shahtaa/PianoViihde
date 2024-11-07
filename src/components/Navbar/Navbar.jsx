import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Ohjelmatoimisto Piano Viihde
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        ETUSIVU
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
        </AppBar>
    );
}

export default Navbar;