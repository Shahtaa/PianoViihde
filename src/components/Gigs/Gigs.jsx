import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress, // Импорт спиннера
} from '@mui/material'

const Keikat = () => {
  // State hooks to manage gigs, errors, and loading state
  const [gigs, setGigs] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true) // Добавили состояние для загрузки

  // Fetch gigs data on component mount
  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/gigs') // Adjust API endpoint as needed
        setGigs(response.data) // Set the gigs data
      } catch (err) {
        setError('Failed to load gigs data')
        console.error('Error fetching gigs:', err)
      } finally {
        setLoading(false) // Ожидание завершилось
      }
    }

    fetchGigs()
  }, []) // Empty dependency array to run only on mount

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

      {/* Show error message if data fetch fails */}
      {error && (
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: 'error.main', mb: 2 }}
        >
          {error}
        </Typography>
      )}

      {/* Show loading spinner while data is being fetched */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* Show message if no gigs are fetched */}
          {gigs.length === 0 && (
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}
            >
              Ei tulevia keikkoja.
            </Typography>
          )}

          {/* Display gigs list */}
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {gigs.map((gig, index) => (
              <React.Fragment key={gig.id || index}>
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
        </>
      )}
    </Box>
  )
};

export default Keikat;
