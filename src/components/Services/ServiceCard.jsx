import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image'; // Icon for missing image

function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop if fallback fails
    e.target.src = '/images/fallback.webp'; // Fallback image
  };

  // Если у сервиса нет imageUrl, используем пустую строку
  const imageUrl = service.image
    ? `/images/${service.image}`
    : '/placeholders/fallback.webp';

  // Ограничиваем описание до 150 символов
  const description = service.description
    ? service.description.slice(0, 150) + '...'
    : '';

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 'auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
        },
        marginBottom: '20px', // Отступы между карточками
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Если у сервиса есть изображение, показываем его, иначе показываем иконку */}
        {imageUrl ? (
          <Box
            component="img"
            src={imageUrl}
            alt={`Service ${service.title}`}
            onError={handleImageError}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)', // Эффект увеличения при наведении
              },
            }}
          />
        ) : (
          <ImageIcon sx={{ fontSize: 100, color: 'grey.500' }} />
        )}
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px', // Отступы внутри карточки
          minHeight: '250px', // Устанавливаем минимальную высоту для карточек
        }}
      >
        <Box sx={{ marginBottom: '16px' }}> {/* Добавляем отступ между заголовком и текстом */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            {service.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 'auto' }} // Обеспечиваем, чтобы кнопка была внизу
          onClick={() => navigate(`/services/${service.id}`)}
        >
          Lisätietoja
        </Button>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
