import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

function Artists() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Artists
            </Typography>
            <Grid container spacing={4}>
                {[...Array(6)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                minHeight: 350,
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.03)', // Slightly lift the card
                                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)', // Add shadow on hover
                                },
                            }}
                        >
                            {/* Image with Zoom Effect on Hover */}
                            <Box
                                component="img"
                                src="https://via.placeholder.com/350x200"
                                alt={`Artist ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease', // Smooth zoom effect
                                    '&:hover': {
                                        transform: 'scale(1.1)', // Zoom in the image
                                    },
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6">Artist Name {index + 1}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Short description.
                                </Typography>
                                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    More Info
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Artists;