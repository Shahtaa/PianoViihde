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
            {/* Затемнение */}
            <Box className={styles.overlay} />

            {/* Контент поверх слайда */}
            <Container className={styles.content}>
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                Piano & Viihde
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', gap: '16px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                >
                  Yhteystiedot
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.button}
                >
                  Meistä
                </Button>
              </Box>
            </Container>
          </Box>
        </SwiperSlide>

        {/* Добавьте дополнительные SwiperSlide для других изображений */}
        <SwiperSlide>
          <Box sx={{ position: 'relative' }}>
            <img
              src="your-image2.jpg"
              alt="Slide 2"
              className={styles.slideImage}
            />
            <Box className={styles.overlay} />
            <Container
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                Piano & Viihde
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.button}
                >
                  Кнопка 1
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.button}
                >
                  Кнопка 2
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
