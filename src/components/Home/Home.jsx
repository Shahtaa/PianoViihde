import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import IntroText from './IntroText/IntroText'
import CounterSection from './CounterSection/CounterSection'
import PartnerLogos from './PartnerLogos/PartnerLogos'
import TestimonialsCarousel from './TestimonialsCarousel/TestimonialsCarousel'
import InstagramFeed from './InstagramFeed/InstagramFeed'
import ContactSection from './ContactSection/ContactSection'
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <>
        <HeroSection />
        <IntroText />
        <CounterSection />
        <PartnerLogos />
        <TestimonialsCarousel />
        <InstagramFeed />
        <ContactSection />
      </>
    )
}

export default Home;