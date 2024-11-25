import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

function InstagramFeed() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchInstagramData() {
      try {
        const response = await fetch('http://localhost:3000/api/instagram/feed')
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed')
        }
        const data = await response.json()
        setPosts(data.slice(0, 8)) // Берем только первые 8 постов
      } catch (err) {
        console.error('Error fetching Instagram feed:', err)
        setError('Failed to load Instagram feed')
      }
    }

    fetchInstagramData()
  }, [])

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error" align="center">
          {error}
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        maxWidth: '1200px', // Ограничиваем ширину всего блока
        margin: '0 auto', // Центрируем на странице
        backgroundColor: '#f9f9f9',
        borderRadius: '16px',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}
      >
        Instagram
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid
            item
            xs={6} // 2 карточки на строке для мобильных устройств
            sm={6} // 3 карточки на строке для планшетов
            md={3} // 4 карточки на строке для десктопа
            key={post.id}
          >
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
              onClick={() => window.open(post.permalink, '_blank')} // Перенаправление на Instagram
            >
              <Box
                sx={{
                  aspectRatio: '1', // Квадратные карточки
                  backgroundImage: `url(${
                    post.media_url.includes('.mp4')
                      ? post.thumbnail_url
                      : post.media_url
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <CardContent
                sx={{
                  px: { xs: 1, sm: 2 }, // Уменьшенные отступы на мобильных
                  py: { xs: 1, sm: 2 },
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Уменьшенный текст на мобильных
                  }}
                >
                  {post.caption || 'No caption'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default InstagramFeed
