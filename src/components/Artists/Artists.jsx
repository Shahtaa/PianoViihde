import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Artists() {
    // Artist data with image URL pointing to the image inside the public folder
    const artists = [
        {
            name: 'Anna Katariina',
            description: 'Lyhyt kuvaus Anna Katariinasta.',
            imageUrl: '/images/artists_jpg.jpg', // Direct reference to the public directory
            moreInfoUrl: '/artists/anna-katariina',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Duo Songbirds',
            description: 'Lyhyt kuvaus Duo Songbirdsistä.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/duo-songbirds',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Saksofonisti Anton Morozov',
            description: 'Lyhyt kuvaus Anton Morozovista.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/anton-morozov',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Tytti Koivunen',
            description: 'Lyhyt kuvaus Tytti Koivusesta.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/tytti-koivunen',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Lotta Virkkunen',
            description: 'Lyhyt kuvaus Lotta Virkkusesta.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/lotta-virkkunen',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Tanja Vähäsarja',
            description: 'Lyhyt kuvaus Tanja Vähäsarjasta.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/tanja-vahasarja',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Juontaja Kimmo Oksanen',
            description: 'Lyhyt kuvaus Kimmo Oksasesta.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/kimmo-oksanen',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Toni Jokiniitty',
            description: 'Lyhyt kuvaus Toni Jokiniitystä.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/toni-jokiniitty',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Joonas Eloranta',
            description: 'Lyhyt kuvaus Joonas Elorannasta.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/joonas-eloranta',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'PUSHKIN Quintett',
            description: 'Lyhyt kuvaus PUSHKIN Quintetista.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/pushkin-quintett',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Night Shift',
            description: 'Lyhyt kuvaus Night Shiftistä.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/night-shift',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Henriikka Roo',
            description: 'Lyhyt kuvaus Henriikka Roosta.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/henriikka-roo',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
        {
            name: 'Tampereen Ukuleleorkesteri',
            description: 'Lyhyt kuvaus Tampereen Ukuleleorkesterista.',
            imageUrl: '/images/artists_jpg.jpg',
            moreInfoUrl: '/artists/tampereen-ukuleleorkesteri',
            facebookUrl: 'https://facebook.com',
            instagramUrl: 'https://instagram.com',
            youtubeUrl: 'https://youtube.com',
        },
    ];

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Artistit
            </Typography>
            <Grid container spacing={4}>
                {artists.map((artist, index) => (
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
                                src={artist.imageUrl}
                                alt={`Artist ${artist.name}`}
                                onError={(e) => e.target.src = '/images/fallback.jpg'} // Fallback image on error
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
                                {/* Name and Social Media Icons on the same line */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {artist.name}
                                    </Typography>
                                    {/* Social Media Icons */}
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <IconButton
                                            color="primary"
                                            onClick={() => window.location.href = artist.facebookUrl}
                                            sx={{ width: 30, height: 30 }}
                                        >
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton
                                            color="primary"
                                            onClick={() => window.location.href = artist.instagramUrl}
                                            sx={{ width: 30, height: 30 }}
                                        >
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton
                                            color="primary"
                                            onClick={() => window.location.href = artist.youtubeUrl}
                                            sx={{ width: 30, height: 30 }}
                                        >
                                            <YouTubeIcon />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    {artist.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mb: 2 }}
                                    onClick={() => window.location.href = artist.moreInfoUrl} // Redirect to the artist's "More Info" page
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

export default Artists