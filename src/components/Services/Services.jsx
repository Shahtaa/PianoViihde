import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

function Services() {
    // Define the services with categories and their descriptions
    const services = [
        {
            title: 'Livemusiikki ravintoloissa',
            description: 'Tarjoamme eläviä musiikkiesityksiä ravintoloissa ja muissa tiloissa, joissa tunnelma luodaan musiikin avulla.',
            imageUrl: 'https://via.placeholder.com/350x200',  // Example image URL
            moreInfoUrl: '/services/livemusiikki-ravintoloissa',
        },
        {
            title: 'Yritystilaisuudet',
            description: 'Räätälöimme musiikkiesityksiä yritystilaisuuksiin, konferensseihin ja juhliin, jotka luovat mieleenpainuvia kokemuksia.',
            imageUrl: 'https://via.placeholder.com/350x200',
            moreInfoUrl: '/services/yritystilaisuudet',
        },
        {
            title: 'Taustamusiikkia tilaisuuksiin',
            description: 'Tarjoamme taustamusiikkia monenlaisiin tilaisuuksiin, kuten vastaanottoihin, kokouksiin ja juhlien tunnelman luomiseen.',
            imageUrl: 'https://via.placeholder.com/350x200',
            moreInfoUrl: '/services/taustamusiikkia-tilaisuuksiin',
        },
        {
            title: 'Häämusiikki',
            description: 'Erityisesti hääjuhliin tarjoamme kauniita musiikkiesityksiä, jotka tekevät päivästä unohtumattoman.',
            imageUrl: 'https://via.placeholder.com/350x200',
            moreInfoUrl: '/services/haamusiikki',
        },
        {
            title: 'Sävellyspalvelut',
            description: 'Tarjoamme sävellyspalveluja niin yksityisille kuin yrityksille – luomme musiikkia erilaisiin projekteihin ja tilaisuuksiin.',
            imageUrl: 'https://via.placeholder.com/350x200',
            moreInfoUrl: '/services/savellyspalvelut',
        },
    ];

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
                                height: 450,  // Set fixed height for uniform card size
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
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
                                src={service.imageUrl}
                                alt={`Service ${index + 1}`}
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

                            {/* Card Content */}
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
                                    onClick={() => window.location.href = service.moreInfoUrl} // Redirect to the service details page
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