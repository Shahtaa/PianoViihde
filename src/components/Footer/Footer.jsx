import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#1976d2', color: 'white', py: 2, mt: 'auto', textAlign: 'center' }}>
            <Container>
                <Typography variant="body2">&copy; 2024 PianoViihde. All rights reserved.</Typography>
            </Container>
        </Box>
    );
}

export default Footer;