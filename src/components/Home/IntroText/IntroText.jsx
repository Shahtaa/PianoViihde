import React from 'react';
import { Box, Typography, Button } from '@mui/material'

function IntroText() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '40vh',
        padding: '2rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Основной заголовок */}
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
      >
        Piano & Viihde <br />
        Ohjelmatoimisto
      </Typography>

      {/* Описание */}
      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: '600px',
          mb: 3,
          color: '#555',
          textAlign: 'center',
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.4' },
        }}
      >
        Ohjelmatoimisto Piano & Viihde on virkeä tamperelainen musiikkia ja
        tanssia välittävä yritys. Jos haussa on pianisti juhliin, säestäjäksi
        tai taustalle tunnelmoimaan, olet juuri oikeilla sivuilla! Välitämme
        pianisteja, kitaristeja, duoja, trioja sekä erilaisia yhtyeitä niin
        kevyen kuin klassisen musiikin aloilta ravintoloihin, firmakeikoille
        sekä yksityistilaisuuksiin. Välitämme esiintyjiä Pirkanmaan lisäksi myös
        Helsingissä, Turussa, Jyväskylässä ja Joensuussa. <br />
        <br />
        Olipa kyseessä yritystilaisuus, syntymäpäivät, häät, valmistujaiset,
        kotikonsertti, pikkujoulubileet tai eläkkeellelähtöjuhlat, voit löytää
        listoiltamme juuri sinulle sopivan esiintyjän tai taustamuusikon
        tilaisuuteesi viihdyttämään.
      </Typography>

      {/* Кнопка */}
      <Button variant="contained" color="primary" size="medium">
        Ota yhteyttä
      </Button>
    </Box>
  )
}

export default IntroText
