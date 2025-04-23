import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Container,
  CircularProgress,
  Button,
  Grid,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';

function ArtistPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/artists/${id}`)
      .then((response) => {
        setArtist(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching artist:', error);
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

  if (!artist) {
    return (
      <Typography variant="h5" sx={{ textAlign: 'center', mt: 4 }}>
        Taiteilijaa ei löytynyt.
      </Typography>
    );
  }

  const imageUrl = artist.image
    ? `/images/${artist.image}`
    : '/placeholders/fallback.webp'; // Заменяем на fallback, если фото нет

  function normalizeYouTubeUrl(url) {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // Если уже embed или не распознано
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button onClick={() => navigate('/artists')} variant="contained" startIcon={<ArrowBackIcon />} sx={{ mb: 4 }}>
        Takaisin
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 400, width: '100%', boxShadow: 3, borderRadius: 3, overflow: 'hidden' }}>
              <CardMedia
                component="img"
                src={imageUrl}
                alt={artist.name || 'Artist Image'}
                onError={(e) => {
                  if (!e.target.src.includes('fallback.webp')) {
                    e.target.src = '/images/fallback.webp';
                  }
                }}
                sx={{
                  objectFit: {
                    xs: 'contain', // Показываем всю картинку на телефоне, без обрезки
                    md: 'cover',   // Обрезаем для эффекта фона на десктопе
                  },
                  width: '100%',
                  height: {
                    xs: 'auto',    // Адаптивная высота на мобилке
                    md: 500,       // Фиксированная высота на десктопе
                  },
                  backgroundColor: '#000', // Заполняем черным фон за пределами картинки
                }}
              />

            </Card>
          </Box>
        </Grid>


        {/* Правая часть с текстом и кнопкой */}
        <Grid item xs={12} md={7}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            {artist.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4, whiteSpace: 'pre-line', lineHeight: 1.8 }}>
            {artist.description}
          </Typography>

          {/* Ссылка на YouTube, если имеется */}
          {artist.youtubeUrl && (
            <Button color="primary" onClick={() => window.open(artist.youtubeUrl, '_blank')} startIcon={<YouTubeIcon />}>
              YouTube
            </Button>
          )}

          {/* Кнопка бронирования */}
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

      {/* Видео с YouTube */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
          Videot
        </Typography>
        <Grid container spacing={4}>
          {artist.videos &&
            artist.videos.map((videoUrl, index) => (
              <Grid item xs={12} md={6} key={index}>
                <iframe
                  width="100%"
                  height="315"
                  src={normalizeYouTubeUrl(videoUrl)}
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
  );
}

export default ArtistPage;
