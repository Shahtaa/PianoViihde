import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Rating,
} from '@mui/material'

const reviews = [
  {
    id: 1,
    reviewer_name: 'Emma S.',
    rating: 5,
    review_title: 'Excellent Service!',
    review_body:
      'The service provided was beyond my expectations. The pianist was incredibly talented and professional. Highly recommend!',
    date: '2024-11-20',
  },
  {
    id: 2,
    reviewer_name: 'John D.',
    rating: 4,
    review_title: 'Great Experience',
    review_body:
      'Very good experience overall. The pianist played beautifully, but the event could have been better with a more versatile playlist.',
    date: '2024-11-19',
  },
  {
    id: 3,
    reviewer_name: 'Sofia M.',
    rating: 3,
    review_title: 'Good but Room for Improvement',
    review_body:
      'The pianist was skilled, but the music didn’t fit the vibe I was hoping for. Perhaps a wider selection of genres could be included.',
    date: '2024-11-18',
  },
  {
    id: 4,
    reviewer_name: 'Lucas T.',
    rating: 2,
    review_title: 'Not What I Expected',
    review_body:
      'I had higher expectations based on reviews, but the performance was a bit underwhelming. The sound quality was also not great.',
    date: '2024-11-17',
  },
  {
    id: 5,
    reviewer_name: 'Mia R.',
    rating: 5,
    review_title: 'Amazing Performance',
    review_body:
      'The pianist was exceptional! The event was perfect, and I received so many compliments about the music. Would definitely book again.',
    date: '2024-11-15',
  },
  {
    id: 6,
    reviewer_name: 'Oliver K.',
    rating: 4,
    review_title: 'Very Talented',
    review_body:
      'The pianist was very talented and played beautifully. I would definitely recommend them for a classy event.',
    date: '2024-11-14',
  },
  {
    id: 7,
    reviewer_name: 'Ella W.',
    rating: 5,
    review_title: 'Outstanding!',
    review_body:
      'Everything was perfect from start to finish. The pianist created an unforgettable atmosphere for our event.',
    date: '2024-11-13',
  },
  {
    id: 8,
    reviewer_name: 'Noah L.',
    rating: 3,
    review_title: 'Good Performance',
    review_body:
      'The performance was good, but it could have been better with some more interaction with the audience.',
    date: '2024-11-12',
  },
  {
    id: 9,
    reviewer_name: 'Charlotte B.',
    rating: 5,
    review_title: 'Highly Recommended',
    review_body:
      'I can’t say enough good things about the pianist. Truly professional and talented!',
    date: '2024-11-11',
  },
  {
    id: 10,
    reviewer_name: 'William H.',
    rating: 4,
    review_title: 'Great Music',
    review_body:
      'The music was beautiful and added a lot to our event. A great choice for anyone looking for a pianist.',
    date: '2024-11-10',
  },
]


const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // По умолчанию показываем две карточки
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Убираем стрелки
    responsive: [
      {
        breakpoint: 768, // Максимальная ширина экрана
        settings: {
          slidesToShow: 1, // Показываем одну карточку
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '30px auto',
        py: { xs: 3, sm: 6 },
        px: { xs: 1, sm: 4 },
        backgroundColor: '#f0f8ff',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}
      >
        Palautteet
      </Typography>
      <Slider {...settings}>
        {reviews.map((review) => (
          <Box
            key={review.id}
            sx={{
              px: 2,
            }}
          >
            <Card
              sx={{
                p: 3,
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
              }}
            >
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  {/* Заголовок отзыва */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ textAlign: 'center', color: '#222' }}
                  >
                    {review.review_title}
                  </Typography>
                  {/* Текст отзыва */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      textAlign: 'center',
                      fontStyle: 'italic',
                      lineHeight: '1.6',
                    }}
                  >
                    "{review.review_body}"
                  </Typography>
                  {/* Имя автора и дата */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar
                      alt={review.reviewer_name}
                      sx={{
                        bgcolor: '#1976d2',
                        color: '#fff',
                        width: 48,
                        height: 48,
                      }}
                    >
                      {review.reviewer_name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.reviewer_name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Stack>
                  {/* Рейтинг */}
                  <Rating value={review.rating} readOnly size="small" />
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default TestimonialsCarousel
