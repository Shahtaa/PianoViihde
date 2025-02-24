import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const PianistCard = ({ pianist }) => {
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
      {/* Image */}
      <Box
        component="img"
        src={pianist.imageUrl}
        alt={`Pianist ${pianist.name}`}
        onError={(e) => (e.target.src = '/images/fallback.jpg')} // Fallback image if image fails
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