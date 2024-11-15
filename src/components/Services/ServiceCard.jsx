// src/components/ServiceCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ServiceCard({ service }) {
    return (
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
            <Box
                component="img"
                src={service.imageUrl}
                alt={`Service ${service.title}`}
                onError={(e) => e.target.src = '/images/fallback.jpg'} // Fallback image if image fails
                sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.1)', // Zoom effect on hover
                    },
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {service.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {/* Social Media Icons */}
                        <IconButton color="primary" onClick={() => window.location.href = service.facebookUrl} sx={{ width: 30, height: 30 }}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={() => window.location.href = service.instagramUrl} sx={{ width: 30, height: 30 }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={() => window.location.href = service.youtubeUrl} sx={{ width: 30, height: 30 }}>
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    {service.description}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mb: 2 }}
                    onClick={() => window.location.href = service.moreInfoUrl}
                >
                    Lisätietoja
                </Button>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;