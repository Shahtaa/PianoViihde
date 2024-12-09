import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, Container, Typography } from '@mui/material'
import ServiceCard from './ServiceCard' // Предполагается, что есть компонент карточки

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/services') // URL вашего бэкенда
      .then((response) => {
        setServices(response.data)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
      })
  }, [])

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Palvelukategoriat
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Services
