import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

// Определяем API URL: если переменная окружения есть, используем её, иначе - локальный сервер
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function CounterSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [yearCount, setYearCount] = useState(21); // Начальный год
  const [concertsCount, setConcertsCount] = useState(1257); // Начальное количество концертов
  const [hasUpdated, setHasUpdated] = useState(false); // Флаг для проверки, был ли год уже увеличен

  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startYear = 2007;
    let years = currentYear - startYear;
    
    if (today.getMonth() === 0 && today.getDate() === 1 && !hasUpdated) {
      years += 1;
      setHasUpdated(true);
    }

    if (today.getMonth() === 0 && today.getDate() === 2) {
      setHasUpdated(false);
    }

    setYearCount(years);
  }, [hasUpdated]);

  useEffect(() => {
    const fetchConcertCount = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/gigs/concert-count`);
        setConcertsCount(1257 + response.data.count);
      } catch (err) {
        console.error('Error fetching concert count:', err);
      }
    };

    fetchConcertCount();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: { xs: 'column', sm: 'row' },
        padding: '2rem 0',
        gap: { xs: 2, sm: 0 },
      }}
    >
      {inView && (
        <>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontSize="5rem">
              <CountUp start={0} end={concertsCount} duration={2.5} />
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              fontSize="1.5rem"
            >
              KEIKKAA
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontSize="5rem">
              <CountUp start={0} end={yearCount} duration={2.5} />
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              fontSize="1.5rem"
            >
              VUOTTA
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

export default CounterSection;
