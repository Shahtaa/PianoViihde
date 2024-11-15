import React from 'react';
import { Grid } from '@mui/material';
import PianistCard from './PianistCard';  // Import the PianistCard component

function PianistGrid({ pianists }) {
    return (
        <Grid container spacing={4}>
            {pianists.map((pianist, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    {/* Use PianistCard to render each pianist */}
                    <PianistCard pianist={pianist} />
                </Grid>
            ))}
        </Grid>
    );
}

export default PianistGrid;