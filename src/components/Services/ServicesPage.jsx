import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  CircularProgress,
  Divider,
  Button,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import axios from 'axios'

function ServicePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/services/${id}`)
      .then((response) => {
        setService(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching service:', error)
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

  if (!service) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 4 }}>
        Palvelu ei löytynyt.
      </Typography>
    )
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
        onClick={() => navigate('/services')}
      >
        Takaisin
      </Button>

      <Card
        sx={{
          mb: 4,
          boxShadow: 3,
          borderRadius: 3,
        }}
      >
        {service.imageUrl && (
          <CardMedia
            component="img"
            height="400"
            image={service.imageUrl}
            alt={service.title || 'Service Image'}
            sx={{ objectFit: 'cover' }}
          />
        )}
        <CardContent>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
          >
            {service.title || 'No Title'}
          </Typography>
        </CardContent>
      </Card>

      {Array.isArray(service.details) &&
        service.details.map((detail, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
              },
              gap: 4,
              mb: 6,
              alignItems: 'center',
            }}
          >
            {detail.imageUrl && (
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    boxShadow: 3,
                    overflow: 'hidden',
                    borderRadius: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={detail.imageUrl}
                    alt={detail.heading || 'Detail Image'}
                    sx={{ objectFit: 'cover' }}
                  />
                </Card>
              </Box>
            )}
            <Box sx={{ flex: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                {detail.heading || 'No Heading'}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {detail.text || 'No description available.'}
              </Typography>
            </Box>
          </Box>
        ))}
    </Container>
  )
}

export default ServicePage
