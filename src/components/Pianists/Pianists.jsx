import React, { useEffect, useState } from 'react'
import { Container, Typography, CircularProgress, Box } from '@mui/material'
import PianistList from './PianistList' // Импортируем компонент PianistList

function Pianists() {
  const [loading, setLoading] = useState(true) // Состояние для загрузки данных

  useEffect(() => {
    // Симуляция загрузки данных
    const fetchData = async () => {
      setLoading(true)
      // После завершения загрузки данных, обновим состояние
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Pianistit
      </Typography>

      {/* Отображаем спиннер во время загрузки */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        // Когда данные загружены, отображаем список пианистов
        <PianistList />
      )}
    </Container>
  )
}

export default Pianists
