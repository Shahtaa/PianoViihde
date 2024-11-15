import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Pianists() {
    // Pianist data array
    const pianists = [
        {
            name: 'Piia Kristiina',
            description: 'Klassiselta taustalta monipuoliseksi viihdepianistiksi kehittynyt. Keikkailee aktiivisesti Duo Primadonnien, Duo Songbirdsin ja muiden kanssa. Musiikillisesti Piia on omistautunut viihdepianon soitolle, jolle ei löydy rajoituksia.',
            imageUrl: '/images/pianist.jpg', // Use relative path
            moreInfoUrl: '/pianists/piia-kristiina',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Ruut',
            description: 'Ruut on soittanut klassista pianoa 19 vuotta Tampereen konservatoriossa. Hän soittaa tyylikästä kevyttä musiikkia, jatsahtavia viihdemusiikin klassikoita ja ikivihreitä.',
            imageUrl: '/images/pianist.jpg',
            moreInfoUrl: '/pianists/ruut',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Laura',
            description: 'Laura on musiikin ammattilainen, joka soittaa jazzia ja klassista musiikkia. Hän on myös musiikkiopiston rehtori ja esiintyy aktiivisesti sekä pianistin että viulistin rooleissa.',
            imageUrl: '/images/pianist.jpg',
            moreInfoUrl: '/pianists/laura',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Arto',
            description: 'Arto on romanttinen ja tunteikas pianisti, jonka soittotyyli on vaikuttunut Chopinista. Hänen musiikkinsa viehättää monia ja se sopii erinomaisesti solistin säestyksiksi tai ruokailun taustalle.',
            imageUrl: '/images/pianist.jpg',
            moreInfoUrl: '/pianists/arto',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Joonas',
            description: 'Joonas on monipuolinen freelance-muusikko, joka on erikoistunut viihdemusiikkiin ja jazziin. Hänen ohjelmistonsa kattaa laajan valikoiman musiikkityylejä, ja hän on soittanut monilla teatterilavoilla.',
            imageUrl: '/images/pianist.jpg',
            moreInfoUrl: '/pianists/joonas',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
    ];

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Pianistit
            </Typography>
            <Grid container spacing={4}>
                {pianists.map((pianist, index) => (
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
                            {/* Image */}
                            <Box
                                component="img"
                                src={pianist.imageUrl}
                                alt={`Pianist ${index + 1}`}
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

                            {/* Card Content */}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {pianist.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <IconButton color="primary" onClick={() => window.location.href = pianist.facebookUrl}>
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton color="primary" onClick={() => window.location.href = pianist.instagramUrl}>
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton color="primary" onClick={() => window.location.href = pianist.youtubeUrl}>
                                            <YouTubeIcon />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    {pianist.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mb: 2 }}
                                    onClick={() => window.location.href = pianist.moreInfoUrl}
                                >
                                    Lisää tietoja
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Pianists;