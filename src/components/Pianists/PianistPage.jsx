import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Card,
  CardMedia,
  Button,
  CircularProgress,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function PianistPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pianist, setPianist] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/pianists/${id}`)
      .then((response) => {
        setPianist(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching pianist:', error)
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

  if (!pianist) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 4 }}>
        Артист не найден.
      </Typography>
    )
  }

  return (
    <Container sx={{ mt: 4 }}>
      {/* Кнопка "Назад" */}
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
        onClick={() => navigate('/pianists')}
      >
        Takaisin
      </Button>

      <Grid container spacing={4} alignItems="center">
        {/* Фото артиста */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={pianist.imageUrl}
              alt={pianist.name}
              sx={{
                borderRadius: 2,
                maxHeight: '400px',
                objectFit: 'cover',
              }}
            />
          </Card>
        </Grid>

        {/* Текст и ссылки */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            {pianist.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {pianist.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <IconButton
              color="primary"
              href={pianist.facebookUrl}
              target="_blank"
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              href={pianist.instagramUrl}
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="primary"
              href={pianist.youtubeUrl}
              target="_blank"
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Кнопка "Varaa esiintyjää" */}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate('/contact')}
          >
            Varaa esiintyjää
          </Button>
        </Grid>

        {/* Видео с YouTube */}
        {pianist.videos && pianist.videos.length > 0 && (
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
            >
              Видео с YouTube
            </Typography>
            <Grid container spacing={2}>
              {pianist.videos.map((videoUrl, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <Box
                      component="iframe"
                      src={videoUrl}
                      title={`Pianist Video ${index + 1}`}
                      allow="fullscreen"
                      sx={{
                        width: '100%',
                        height: '300px',
                        border: 'none',
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default PianistPage
