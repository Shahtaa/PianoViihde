import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  Button,
  CircularProgress,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PianistPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pianist, setPianist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/pianists/${id}`)
      .then((response) => {
        console.log('Pianist API Response:', response.data); // Логируем ответ API

        let pianistData = response.data;

        // ✅ Защита от null/undefined
        pianistData.videos = Array.isArray(pianistData.videos) ? pianistData.videos : [];

        setPianist(pianistData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching pianist:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!pianist) {
    return <Typography variant="h5" sx={{ textAlign: 'center', mt: 4 }}>Pianisti ei löytynyt</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      {/* Кнопка "Назад" */}
      <Button variant="contained" startIcon={<ArrowBackIcon />} sx={{ mb: 4 }} onClick={() => navigate('/pianists')}>
        Takaisin
      </Button>

      <Grid container spacing={4} alignItems="center">
        {/* Фото пианиста */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={pianist.imageUrl || 'https://via.placeholder.com/400'}
              alt={pianist.name}
              sx={{ borderRadius: 2, maxHeight: '400px', objectFit: 'cover' }}
            />
          </Card>
        </Grid>

        {/* Информация */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            {pianist.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>{pianist.description}</Typography>

          {/* Кнопка бронирования */}
          <Button variant="contained" color="secondary" fullWidth onClick={() => navigate('/contact')}>
            Varaa esiintyjää
          </Button>
        </Grid>

        {/* Видео */}
        {pianist.videos.length > 0 ? (
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
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
                      sx={{ width: '100%', height: '300px', border: 'none' }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, color: 'gray' }}>
            🎵 Видео отсутствуют
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default PianistPage;
