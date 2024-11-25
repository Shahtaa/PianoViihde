import React from 'react'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'

const Keikat = () => {
  const gigs = [
    {
      title: 'Ravintola Helsinki',
      date: '25.12.2024',
      location: 'Helsinki, Finland',
    },
    {
      title: 'Yritystilaisuus Espoo',
      date: '30.12.2024',
      location: 'Espoo, Finland',
    },
    {
      title: 'Uudenvuoden juhlat',
      date: '31.12.2024',
      location: 'Tampere, Finland',
    },
    { title: 'Kesäjuhlat', date: '01.07.2025', location: 'Turku, Finland' },
    { title: 'Festival Espoo', date: '15.08.2025', location: 'Espoo, Finland' },
    { title: 'Jazz Night', date: '20.09.2025', location: 'Helsinki, Finland' },
    { title: 'Private Event', date: '05.10.2025', location: 'Oulu, Finland' },
    {
      title: 'Christmas Party',
      date: '24.12.2025',
      location: 'Rovaniemi, Finland',
    },
  ]

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      >
        Tulevat Keikat
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {gigs.map((gig, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
                  >
                    {gig.title} - {gig.date}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ fontStyle: 'italic', textAlign: 'center' }}
                  >
                    {gig.location}
                  </Typography>
                }
              />
            </ListItem>
            {index < gigs.length - 1 && (
              <Divider variant="middle" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )
}

export default Keikat
