import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'; // Import the ImageIcon directly

const PianistCard = ({ pianist }) => {
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if fallback fails
    e.target.src = '/images/fallback.jpg'; // Fallback image
  };

  const imageUrl = pianist.imageUrl ? pianist.imageUrl : ''; // If imageUrl is missing, it'll be empty

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
        sx={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* If there's no image, show the 'no image' icon */}
        {imageUrl ? (
          <Box
            component="img"
            src={imageUrl}
            alt={`Pianist ${pianist.name}`}
            onError={handleImageError}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)', // Zoom effect on hover
              },
            }}
          />
        ) : (
          // Show 'no image' icon when there's no image
          <ImageIcon sx={{ fontSize: 100, color: 'grey.500' }} />
        )}
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            {pianist.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {pianist.description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to={`/pianists/${pianist.id}`}
          sx={{ mt: 'auto' }} // Ensures button stays at the bottom
        >
          Lisää tietoja
        </Button>
      </CardContent>
    </Card>
  );
};

export default PianistCard;