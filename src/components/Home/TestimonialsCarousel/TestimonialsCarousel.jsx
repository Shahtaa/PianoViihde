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

// Reusable Styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '30px auto',
    py: { xs: 3, sm: 6 },
    px: { xs: 1, sm: 4 },
    backgroundColor: '#f0f8ff',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontWeight: 'bold',
    mb: 4,
    color: '#333',
  },
  card: {
    p: 3,
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    width: { xs: '100%', sm: '480px' },
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    m: '0 auto',
    mb: '1rem',
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    bgcolor: '#1976d2',
    color: '#fff',
    width: 48,
    height: 48,
  },
  reviewerName: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  reviewText: {
    fontStyle: 'italic',
    lineHeight: '1.6',
    textAlign: 'center',
  },
  date: {
    color: 'text.secondary',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
  },
  noReviews: {
    color: '#555',
    fontStyle: 'italic',
  },
};

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
    infinite: reviews.length > 1,
    speed: 500,
    slidesToShow: reviews.length > 1 ? 2 : 1,
    slidesToScroll: reviews.length > 1 ? 2 : 1,
    autoplay: reviews.length > 1,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const truncateReviewText = (text) => {
    if (text.length > 200) {
      return text.slice(0, 200) + '...';
    }
    return text;
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" align="center" sx={styles.title}>
        Palautteet
      </Typography>

      {loading ? (
        <Box sx={styles.loader}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography align="center" color="error">{error}</Typography>
      ) : reviews.length === 0 ? (
        <Typography align="center" sx={styles.noReviews}>
          Tällä hetkellä ei ole uusia palautteita
        </Typography>
      ) : reviews.length === 1 ? (
        // Single review without the slider
        <Box sx={{ px: 2 }}>
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Stack spacing={2} alignItems="center">
                <Typography variant="h6" fontWeight="bold" sx={styles.reviewerName}>
                  {reviews[0].review_title}
                </Typography>
                <Typography variant="body1" sx={styles.reviewText}>
                  "{truncateReviewText(reviews[0].review_body)}"
                </Typography>
              </Stack>
            </CardContent>
            <Box sx={{ marginTop: 'auto' }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ justifyContent: 'center' }}>
                <Avatar alt={reviews[0].reviewer_name} sx={styles.avatar}>
                  {reviews[0].reviewer_name[0]}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={styles.reviewerName}>
                    {reviews[0].reviewer_name}
                  </Typography>
                  <Typography variant="caption" sx={styles.date}>
                    {new Date(reviews[0].date).toLocaleDateString()}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Card>
        </Box>
      ) : (
        // Multiple reviews with the slider
        <Slider {...settings}>
          {reviews.map((review) => (
            <Box key={review.id} sx={{ px: 2 }}>
              <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                  <Stack spacing={2} alignItems="center">
                    <Typography variant="h6" fontWeight="bold" sx={styles.reviewerName}>
                      {review.review_title}
                    </Typography>
                    <Typography variant="body1" sx={styles.reviewText}>
                      "{truncateReviewText(review.review_body)}"
                    </Typography>
                  </Stack>
                </CardContent>
                <Box sx={{ marginTop: 'auto' }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ justifyContent: 'center' }}>
                    <Avatar alt={review.reviewer_name} sx={styles.avatar}>
                      {review.reviewer_name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={styles.reviewerName}>
                        {review.reviewer_name}
                      </Typography>
                      <Typography variant="caption" sx={styles.date}>
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default React.memo(TestimonialsCarousel);