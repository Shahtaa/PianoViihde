// src/components/ServicesList.jsx
import React from 'react';
import { Grid } from '@mui/material';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component

function ServicesList({ services }) {
    return (
        <Grid container spacing={4}>
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <ServiceCard service={service} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ServicesList;