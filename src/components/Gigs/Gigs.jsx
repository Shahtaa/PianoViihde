import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress,
  Button
} from '@mui/material';

const Keikat = () => {
  const [gigs, setGigs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);  // State to toggle past gigs

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/gigs`);
        setGigs(response.data);
      } catch (err) {
        setError('Failed to load gigs data');
        console.error('Error fetching gigs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  // Function to parse date string in DD/MM/YYYY format to YYYY-MM-DD format
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  // Filter gigs based on past or future
  const filteredGigs = gigs.filter(gig => {
    const gigDate = parseDate(gig.date); // Use parseDate to convert the date
    const now = new Date();
    const currentDate = new Date(now.setHours(0, 0, 0, 0)); // Remove time part for accurate comparison

    // Check if gig date is valid
    if (isNaN(gigDate.getTime())) {
      console.error('Invalid gig date:', gig.date);  // Log invalid dates
      return false;  // Skip invalid dates
    }

    // Compare based on the showPast flag
    if (showPast) {
      return gigDate < currentDate; // Past gigs should have a date strictly less than today's date (without time)
    } else {
      return gigDate >= currentDate; // Future gigs should have a date greater than or equal to today's date (without time)
    }
  });

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
        Keikat
      </Typography>

      {error && (
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'error.main', mb: 2 }}>
          {error}
        </Typography>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Button variant="contained" onClick={() => setShowPast(!showPast)} sx={{ mb: 4 }}>
            {showPast ? 'Näytä Tulevat Keikat' : 'Näytä Menneet Keikat'}
          </Button>

          {filteredGigs.length === 0 && (
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 2 }}>
              Ei keikkoja löytynyt.
            </Typography>
          )}

          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {filteredGigs.map((gig, index) => (
              <React.Fragment key={gig.id || index}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                        {gig.title} - {gig.date}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
                        {gig.location}
                      </Typography>
                    }
                  />
                </ListItem>
                {index < filteredGigs.length - 1 && <Divider variant="middle" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default Keikat;
