import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

function Pianists() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Pianistit
            </Typography>
            <Grid container spacing={4}>
                {/* Pianist Card 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                        <img
                            src="https://via.placeholder.com/350x200"
                            alt="Pianist"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">Pianisti Nimi 1</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lyhyt kuvaus.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Lisää tietoja
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pianist Card 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                        <img
                            src="https://via.placeholder.com/350x200"
                            alt="Pianist"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">Pianisti Nimi 2</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lyhyt kuvaus.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Lisää tietoja
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pianist Card 3 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                        <img
                            src="https://via.placeholder.com/350x200"
                            alt="Pianist"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">Pianisti Nimi 3</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lyhyt kuvaus.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Lisää tietoja
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pianist Card 4 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                        <img
                            src="https://via.placeholder.com/350x200"
                            alt="Pianist"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">Pianisti Nimi 4</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lyhyt kuvaus.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Lisää tietoja
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pianist Card 5 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                        <img
                            src="https://via.placeholder.com/350x200"
                            alt="Pianist"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">Pianisti Nimi 5</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lyhyt kuvaus.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Lisää tietoja
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pianist Card 6 */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
                        <img
                            src="https://via.placeholder.com/350x200"
                            alt="Pianist"
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography variant="h6">Pianisti Nimi 6</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lyhyt kuvaus.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Lisää tietoja
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Pianists;