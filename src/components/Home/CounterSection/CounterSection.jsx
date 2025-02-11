import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

function CounterSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [yearCount, setYearCount] = useState(21); // Начальный год
  const [concertsCount, setConcertsCount] = useState(1257); // Начальное количество концертов
  const [hasUpdated, setHasUpdated] = useState(false); // Флаг для проверки, был ли год уже увеличен

  useEffect(() => {
    // Симулируем 1 января 2027 года
    const today = new Date(); // Текущая дата

    const currentYear = today.getFullYear(); // Текущий год
    const startYear = 2007; // Год основания компании
    let years = currentYear - startYear; // Разница между годами
    
    // Если сегодня 1 января и год еще не обновлен
    if (today.getMonth() === 0 && today.getDate() === 1 && !hasUpdated) {
      years += 1; // Увеличиваем на 1
      setHasUpdated(true); // Устанавливаем флаг, что год был увеличен
    }

    // Сбрасываем флаг на false 2 января
    if (today.getMonth() === 0 && today.getDate() === 2) {
      setHasUpdated(false); // Сбрасываем флаг для следующего года
    }

    setYearCount(years); // Устанавливаем количество лет
  }, [hasUpdated]);

  useEffect(() => {
    // Запрос на получение количества концертов
    const fetchConcertCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/gigs/concert-count'); // Запрос на сервер
        setConcertsCount(1257 + response.data.count); // Прибавляем количество концертов из базы данных
      } catch (err) {
        console.error('Error fetching concert count:', err);
      }
    };

    fetchConcertCount();
  }, []); // Запрос выполняется только при монтировании компонента

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
