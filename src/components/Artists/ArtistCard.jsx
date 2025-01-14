import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate()

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
        src={artist.imageUrl}
        alt={`Artist ${artist.name}`}
        onError={(e) => (e.target.src = '/images/fallback.jpg')}
        sx={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {artist.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {artist.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate(`/artists/${artist.id}`)}
        >
          Lisätietoja
        </Button>
      </CardContent>
    </Card>
  )
}

export default ArtistCard