import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Grid,
  Container,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material' // Импорт CircularProgress
import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true) // Добавляем состояние для загрузки

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/services') // URL вашего бэкенда
      .then((response) => {
        setServices(response.data)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
      })
      .finally(() => {
        setLoading(false) // Завершаем загрузку
      })
  }, [])

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Palvelukategoriat
      </Typography>

      {/* Если данные загружаются, показываем спиннер */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {services.length === 0 ? (
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}
            >
              Ei palveluja saatavilla.
            </Typography>
          ) : (
            services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <ServiceCard service={service} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  )
}

export default Services
