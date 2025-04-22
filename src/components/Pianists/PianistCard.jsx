import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const PianistCard = ({ pianist }) => {
  const handleImageError = (e) => {
    e.target.onerror = null; // предотвращает бесконечный вызов
    e.target.src = '/placeholders/fallback.jpg'; // путь к запасному изображению
  };

  // Если у пианиста нет imageUrl, используем fallback.jpg
  const imageUrl = pianist.image
    ? `/images/${pianist.image}`
    : '/placeholders/fallback.webp';

  // Ограничиваем описание до 100 символов
  const description = pianist.description ? pianist.description.slice(0, 150) + '...' : '';

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
              transform: 'scale(1.1)',
            },
          }}
        />
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
          <Typography variant="body2" color="textSecondary" sx={{ height: '60px', overflow: 'hidden' }}>
            {description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to={`/pianists/${pianist.id}`}
          sx={{ mt: 'auto' }}
        >
          Lisää tietoja
        </Button>
      </CardContent>
    </Card>
  );
};

export default PianistCard;
