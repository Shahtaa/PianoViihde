import React from 'react';
import HeroSection from './HeroSection'
import IntroText from './IntroText'
import CounterSection from './CounterSection'
import TestimonialsCarousel from './TestimonialsCarousel'
import InstagramFeed from './InstagramFeed'
import ContactSection from './ContactSection'
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: 5 }}>
            <Container>
                <Box textAlign="center" sx={{ marginBottom: 4 }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
                        Ohjelmatoimisto Piano Viihde
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#555', marginTop: 2 }}>
                        Tervetuloa Ohjelmatoimisto Piano & Viihteen sivuille!
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: 4 }}>
                    <Typography variant="body1" sx={{ fontSize: 18, color: '#333' }}>
                        Ohjelmatoimisto Piano & Viihde on virkeä tamperelainen musiikkia ja tanssia
                        välittävä yritys. Jos haussa on pianisti juhliin, säestäjäksi tai taustalle
                        tunnelmoimaan, olet juuri oikeilla sivuilla!
                    </Typography>
                </Box>

                <Box textAlign="center" sx={{ marginBottom: 5 }}>
                    <Button component={Link} to="/contact" variant="contained" color="primary" sx={{ margin: 1 }}>
                        Ota Yhteyttä
                    </Button>
                    <Button component={Link} to="/services" variant="outlined" color="primary" sx={{ margin: 1 }}>
                        Palvelut
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Home;