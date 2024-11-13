import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; // Import the Facebook icon
import InstagramIcon from '@mui/icons-material/Instagram'; // Import the Instagram icon
import YouTubeIcon from '@mui/icons-material/YouTube'; // Import the YouTube icon

function Pianists() {
    // Pianist data array with all links pointing to the homepage for social media
    const pianists = [
        {
            name: 'Piia Kristiina',
            description: 'Klassiselta taustalta monipuoliseksi viihdepianistiksi kehittynyt. Keikkailee aktiivisesti Duo Primadonnien, Duo Songbirdsin ja muiden kanssa. Musiikillisesti Piia on omistautunut viihdepianon soitolle, jolle ei löydy rajoituksia.',
            imageUrl: 'https://via.placeholder.com/350x200', // Replace with actual image URL
            moreInfoUrl: '/pianists/piia-kristiina', // URL for more info page
            facebookUrl: 'https://facebook.com', // All links pointing to Facebook homepage
            instagramUrl: 'https://instagram.com', // Instagram link
            youtubeUrl: 'https://youtube.com', // YouTube link
        },
        {
            name: 'Ruut',
            description: 'Ruut on soittanut klassista pianoa 19 vuotta Tampereen konservatoriossa. Hän soittaa tyylikästä kevyttä musiikkia, jatsahtavia viihdemusiikin klassikoita ja ikivihreitä.',
            imageUrl: 'https://via.placeholder.com/350x200', // Replace with actual image URL
            moreInfoUrl: '/pianists/ruut', // URL for more info page
            facebookUrl: 'https://facebook.com', // All links pointing to Facebook homepage
            instagramUrl: 'https://instagram.com', // Instagram link
            youtubeUrl: 'https://youtube.com', // YouTube link
        },
        {
            name: 'Laura',
            description: 'Laura on musiikin ammattilainen, joka soittaa jazzia ja klassista musiikkia. Hän on myös musiikkiopiston rehtori ja esiintyy aktiivisesti sekä pianistin että viulistin rooleissa.',
            imageUrl: 'https://via.placeholder.com/350x200', // Replace with actual image URL
            moreInfoUrl: '/pianists/laura', // URL for more info page
            facebookUrl: 'https://facebook.com', // All links pointing to Facebook homepage
            instagramUrl: 'https://instagram.com', // Instagram link
            youtubeUrl: 'https://youtube.com', // YouTube link
        },
        {
            name: 'Arto',
            description: 'Arto on romanttinen ja tunteikas pianisti, jonka soittotyyli on vaikuttunut Chopinista. Hänen musiikkinsa viehättää monia ja se sopii erinomaisesti solistin säestyksiksi tai ruokailun taustalle.',
            imageUrl: 'https://via.placeholder.com/350x200', // Replace with actual image URL
            moreInfoUrl: '/pianists/arto', // URL for more info page
            facebookUrl: 'https://facebook.com', // All links pointing to Facebook homepage
            instagramUrl: 'https://instagram.com', // Instagram link
            youtubeUrl: 'https://youtube.com', // YouTube link
        },
        {
            name: 'Joonas',
            description: 'Joonas on monipuolinen freelance-muusikko, joka on erikoistunut viihdemusiikkiin ja jazziin. Hänen ohjelmistonsa kattaa laajan valikoiman musiikkityylejä, ja hän on soittanut monilla teatterilavoilla.',
            imageUrl: 'https://via.placeholder.com/350x200', // Replace with actual image URL
            moreInfoUrl: '/pianists/joonas', // URL for more info page
            facebookUrl: 'https://facebook.com', // All links pointing to Facebook homepage
            instagramUrl: 'https://instagram.com', // Instagram link
            youtubeUrl: 'https://youtube.com', // YouTube link
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
                                src={pianist.imageUrl}
                                alt={`Pianist ${index + 1}`}
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
                                {/* Name and social icons on the same line */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {pianist.name}
                                    </Typography>
                                    {/* Social Media Icons */}
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        {/* Facebook Icon */}
                                        <IconButton
                                            color="primary"
                                            onClick={() => window.location.href = pianist.facebookUrl}
                                            sx={{ width: 30, height: 30 }}
                                        >
                                            <FacebookIcon />
                                        </IconButton>
                                        {/* Instagram Icon */}
                                        <IconButton
                                            color="primary"
                                            onClick={() => window.location.href = pianist.instagramUrl}
                                            sx={{ width: 30, height: 30 }}
                                        >
                                            <InstagramIcon />
                                        </IconButton>
                                        {/* YouTube Icon */}
                                        <IconButton
                                            color="primary"
                                            onClick={() => window.location.href = pianist.youtubeUrl}
                                            sx={{ width: 30, height: 30 }}
                                        >
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
                                    onClick={() => window.location.href = pianist.moreInfoUrl} // Redirect to the pianist's "More Info" page
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