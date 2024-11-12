import React from 'react'
import styles from './HeroSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Button, Typography, Container } from '@mui/material'

function HeroSection() {
  return (
    <Box className={styles.heroContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}images/kansikuva.webp`}
              alt="Slide 1"
              className={styles.slideImage}
            />
            <Box className={styles.overlay} />

            <Container
              sx={{
                position: 'absolute',
                top: { xs: '20%', sm: '25%', md: '30%' },
                left: { xs: '50%', md: '40%' },
                transform: {
                  xs: 'translate(-50%, -50%)',
                  md: 'translate(-50%)',
                },
                color: '#fff',
                textAlign: { xs: 'center', md: 'left' },
                maxWidth: { xs: '80%', sm: '70%', md: 'auto' },
                padding: { xs: '0 1rem' },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '4rem',
                    xl: '6rem',
                  },
                  overflowWrap: 'break-word',
                }}
              >
                Piano & Viihde
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontStyle: 'italic',
                  fontSize: {
                    xs: '1rem',
                    sm: '2rem',
                    md: '2.5rem',
                    lg: '3.2rem',
                    xl: '4rem',
                  },
                  marginBottom: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
                }}
              >
                Ohjelmatoimisto
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  gap: { xs: 1, md: 2 },
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: { xs: '100%', md: 'auto' },
                  }}
                >
                  Yhteystiedot
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    width: { xs: '100%', md: 'auto' },
                  }}
                >
                  Meistä
                </Button>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default HeroSection
