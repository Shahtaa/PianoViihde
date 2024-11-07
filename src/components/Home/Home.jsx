import React from 'react';
import HeroSection from './HeroSection';
import IntroText from './IntroText';
import CounterSection from './CounterSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import InstagramFeed from './InstagramFeed';
import ContactSection from './ContactSection';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: 5 }}>
            <Container>
                <HeroSection />
                <IntroText />
                <CounterSection />
                <TestimonialsCarousel />
                <InstagramFeed />
                <ContactSection />

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