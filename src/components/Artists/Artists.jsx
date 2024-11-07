// src/components/Artists.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Artists() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Artists
            </Typography>
            <Grid container spacing={4}>
                {[...Array(6)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                            <img
                                src="https://via.placeholder.com/350x200"
                                alt={`Artist ${index + 1}`}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
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