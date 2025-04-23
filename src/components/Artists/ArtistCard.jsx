import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image'; // Import the ImageIcon directly

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if fallback fails
    e.target.src = '/images/fallback.webp'; // Fallback image
  };

  const imageUrl = artist.image
    ? `/images/${artist.image}`
    : '/placeholders/fallback.webp';

  // Ограничиваем текст, показывая только первые 150 символов
  const description = artist.description ? artist.description.slice(0, 150) + '...' : '';



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
            alt={`Artist ${artist.name}`}
            onError={handleImageError}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: {
                xs: 'contain',
                sm: 'cover',
              },
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
            {artist.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ height: '60px', overflow: 'hidden' }}>
            {description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 'auto' }} // Ensures button stays at the bottom
          onClick={() => navigate(`/artists/${artist.id}`)}
        >
          Lisätietoja
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
