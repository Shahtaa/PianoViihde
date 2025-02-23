import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Container,
  CircularProgress,
  Button,
  Grid,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import YouTubeIcon from '@mui/icons-material/YouTube'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

function ArtistPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/artists/${id}`)
      .then((response) => {
        setArtist(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching artist:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (!artist) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 4 }}>
        Taiteilijaa ei löytynyt.
      </Typography>
    )
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        onClick={() => navigate('/artists')}
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Takaisin
      </Button>
      <Grid container spacing={4}>
        {/* Left block with image */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image={artist.imageUrl}
              alt={artist.name || 'Artist Image'}
              sx={{ objectFit: 'cover' }}
            />
          </Card>
        </Grid>

        {/* Right block with text and button */}
        <Grid item xs={12} md={7}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            {artist.name}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mb: 4, lineHeight: 1.8 }}
          >
            {artist.description}
          </Typography>

          {/* YouTube Link */}
          {artist.youtubeUrl && (
            <Button
              color="primary"
              onClick={() => window.open(artist.youtubeUrl, '_blank')}
              startIcon={<YouTubeIcon />}
            >
              YouTube
            </Button>
          )}

          {/* Booking Button */}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate('/contact')}
            sx={{ mt: 2 }}
          >
            Varaa esiintyjää
          </Button>
        </Grid>
      </Grid>

      {/* YouTube Videos */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Videoita YouTubesta
        </Typography>
        <Grid container spacing={4}>
          {artist.videos &&
            artist.videos.map((videoUrl, index) => (
              <Grid item xs={12} md={6} key={index}>
                <iframe
                  width="100%"
                  height="315"
                  src={videoUrl}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default ArtistPage