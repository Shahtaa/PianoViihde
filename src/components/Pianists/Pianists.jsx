import React from 'react';
import { Container, Typography } from '@mui/material';
import PianistList from './PianistList';  // Import PianistList

function Pianists() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Pianistit
            </Typography>
            {/* Render PianistList to fetch and display the data */}
            <PianistList />
        </Container>
    );
}

export default Pianists;