// src/components/PianistCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material'

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
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {pianist.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {pianist.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to={`/pianists/${pianist.id}`} // Используем ID из объекта
        >
          Lisää tietoja
        </Button>
      </CardContent>
    </Card>
  )
}

export default PianistCard;