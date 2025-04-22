import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import ArtistCard from './ArtistCard';  // Импортируем компонент ArtistCard
import axios from 'axios';

function Artists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true); // Состояние для загрузки

  useEffect(() => {
    // Запрос на получение данных о артистах с бэкенда
    axios
      .get(`/api/artists`)
      .then((response) => {
        setArtists(response.data); // Обновляем состояние с полученными данными
        setLoading(false); // Останавливаем индикатор загрузки
      })
      .catch((error) => {
        console.error('Ошибка при получении данных об артистах:', error);
        setLoading(false); // Останавливаем индикатор загрузки даже при ошибке
      })
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Artistit
      </Typography>

      {/* Показываем индикатор загрузки, если данные еще не загружены */}
      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={4}>
          {artists.map((artist, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Используем ArtistCard для отображения каждого артиста */}
              <ArtistCard artist={artist} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Artists;
