import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  CircularProgress,
} from '@mui/material';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';


const TestimonialsCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let isMounted = true;

    const fetchReviews = async () => {
      try {
        console.log("API URL:", API_BASE_URL);
        const response = await fetch(`${API_BASE_URL}/api/reviews`);
        if (!response.ok) throw new Error('Virhe ladattaessa arvioita');

        const data = await response.json();

        if (isMounted && JSON.stringify(reviews) !== JSON.stringify(data.data)) {
          setReviews(data.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const settings = {
    dots: true,
    infinite: reviews.length > 1, // Отключаем infinite, если элемент один
    speed: 500,
    slidesToShow: reviews.length > 1 ? 2 : 1, // Показываем 2 слайда, если элементов больше одного
    slidesToScroll: reviews.length > 1 ? 2 : 1,
    autoplay: reviews.length > 1, // Отключаем автопрокрутку, если элемент один
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
  };


  return (
    <Box sx={{ maxWidth: '1200px', margin: '30px auto', py: { xs: 3, sm: 6 }, px: { xs: 1, sm: 4 },
      backgroundColor: '#f0f8ff', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
        Palautteet
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography align="center" color="error">{error}</Typography>
      ) : reviews.length === 0 ? (
        <Typography align="center" sx={{ color: '#555', fontStyle: 'italic' }}>
          Tällä hetkellä ei ole uusia palautteita
        </Typography>
      ) : reviews.length === 1 ? (
        // Отображение одного отзыва без слайдера
        <Box sx={{ px: 2 }}>
          <Card sx={{ p: 3, borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', color: '#222' }}>
                  {reviews[0].review_title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{reviews[0].review_body}"
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar alt={reviews[0].reviewer_name} sx={{ bgcolor: '#1976d2', color: '#fff', width: 48, height: 48 }}>
                    {reviews[0].reviewer_name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">{reviews[0].reviewer_name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(reviews[0].date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ) : (
        // Отображение слайдера, если отзывов больше одного
        <Slider {...settings}>
          {reviews.map((review) => (
            <Box key={review.id} sx={{ px: 2 }}>
              <Card sx={{ p: 3, borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
                <CardContent>
                  <Stack spacing={2} alignItems="center">
                    <Typography variant="h6" fontWeight="bold" sx={{ textAlign: 'center', color: '#222' }}>
                      {review.review_title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', fontStyle: 'italic', lineHeight: '1.6' }}>
                      "{review.review_body}"
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar alt={review.reviewer_name} sx={{ bgcolor: '#1976d2', color: '#fff', width: 48, height: 48 }}>
                        {review.reviewer_name[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">{review.reviewer_name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(review.date).toLocaleDateString()}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default React.memo(TestimonialsCarousel);