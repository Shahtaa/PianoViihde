import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Box, Button, Typography, Container } from '@mui/material'
import styles from './HeroSection.module.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

function HeroSection() {
  return (
    <Box className={styles.heroContainer}>
      {/* Overlay для затемнения */}
      <Box
        className={styles.overlay}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 1)', // затемнение
          zIndex: 1, // overlay будет над изображениями
        }}
      />

      {/* Статичный текст поверх overlay */}
      <Container
        sx={{
          position: 'absolute',
          top: { xs: '50%', sm: '40%', md: '30%' },
          left: { xs: '50%', md: '40%' },
          transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%)' },
          color: '#fff',
          textAlign: { xs: 'center', sm: 'center', md: 'left' },
          maxWidth: { xs: '80%', sm: '70%', md: 'auto' },
          padding: { xs: '0 1rem' },
          zIndex: 2, // текст будет над overlay
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
              width: { xs: '50%', sm: '50%', md: 'auto' },
              padding: { xs: '5px', lg: '10px' },
              fontSize: { xs: '1rem', lg: '1.5rem' },
            }}
          >
            Yhteystiedot
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              width: { xs: '50%', sm: '50%', md: 'auto' },
              padding: { xs: '5px', lg: '10px' },
              fontSize: { xs: '1rem', lg: '1.5rem' },
            }}
          >
            Meistä
          </Button>
        </Box>
      </Container>

      {/* Прокручиваемый слайдер */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        style={{ position: 'absolute', top: 0, width: '100%', height: '100vh' }}
      >
        {/* Слайды с изображениями */}
        <SwiperSlide>
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}images/kansikuva.webp`}
            alt="Slide 1"
            className={styles.slideImage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={`${
              import.meta.env.VITE_PUBLIC_URL
            }images/kansikuva_reverse.webp`}
            alt="Slide 2"
            className={styles.slideImage}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default HeroSection
