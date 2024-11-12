import React from 'react';
import { Box, Typography } from '@mui/material';

function IntroText() {
  return (
    <Box sx={{ marginBottom: 4, paddingX: { xs: 2, sm: 4 }, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '18px' }, color: '#333', lineHeight: 1.6 }}>
        Ohjelmatoimisto Piano & Viihde on virkeä tamperelainen musiikkia ja tanssia välittävä yritys.
        Jos haussa on pianisti juhliin, säestäjäksi tai taustalle tunnelmoimaan, olet juuri oikeilla sivuilla!
        Välitämme pianisteja, kitaristeja, duoja, trioja sekä erilaisia yhtyeitä niin kevyen kuin klassisen musiikin aloilta
        ravintoloihin, firmakeikoille sekä yksityistilaisuuksiin. Välitämme esiintyjiä Pirkanmaan lisäksi myös Helsingissä,
        Turussa, Jyväskylässä ja Joensuussa.
      </Typography>

      <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '18px' }, color: '#333', marginTop: 2, lineHeight: 1.6 }}>
        Olipa kyseessä yritystilaisuus, syntymäpäivät, häät, valmistujaiset, kotikonsertti, pikkujoulubileet tai
        eläkkeellelähtöjuhlat, voit löytää listoiltamme juuri sinulle sopivan esiintyjän tai taustamuusikon
        tilaisuuteesi viihdyttämään.
      </Typography>
    </Box>
  );
}

export default IntroText;