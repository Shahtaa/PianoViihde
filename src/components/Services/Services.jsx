import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import axios from 'axios';

function Services() {
    // State to hold services data
    const [services, setServices] = useState([]);

    // Fetch services data from backend on component mount
    useEffect(() => {
        axios.get('http://localhost:3000/api/services')
            .then(response => setServices(response.data))
            .catch(error => console.error("Error fetching services:", error));
    }, []);

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Palvelukategoriat
            </Typography>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                height: 450,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={service.imageUrl}
                                alt={`Service ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    {service.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mb: 2 }}
                                    onClick={() => window.location.href = service.moreInfoUrl}
                                >
                                    Lisätietoja
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Services;