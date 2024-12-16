import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, CircularProgress } from '@mui/material'
import ArtistCard from './ArtistCard';  // Import ArtistCard component
import axios from 'axios';

function Artists() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true) // New state for loading status

    useEffect(() => {
      // Fetch artist data from the backend
      axios
        .get('http://localhost:3000/api/artists')
        .then((response) => {
          setArtists(response.data)
          setLoading(false) // Set loading to false when data is fetched
        })
        .catch((error) => {
          console.error('There was an error fetching the artists data:', error)
          setLoading(false) // Set loading to false even on error
        })
    }, [])

    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
          Artistit
        </Typography>
        {/* Show spinner if loading */}
        {loading ? (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {artists.map((artist, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                {/* Use ArtistCard to render each artist */}
                <ArtistCard artist={artist} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    )
}

export default Artists;
