import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {artist.name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              color="primary"
              onClick={() => window.open(artist.facebookUrl, '_blank')}
              sx={{ width: 30, height: 30 }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => window.open(artist.instagramUrl, '_blank')}
              sx={{ width: 30, height: 30 }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => window.open(artist.youtubeUrl, '_blank')}
              sx={{ width: 30, height: 30 }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {artist.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
          onClick={() => (window.location.href = `/artists/${artist.id}`)}
        >
          Lisätietoja
        </Button>
      </CardContent>
    </Card>
  )
}

export default ArtistCard
