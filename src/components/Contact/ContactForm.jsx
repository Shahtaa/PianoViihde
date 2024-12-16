import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    date: '', // Adding a date field
  });

  const [errors, setErrors] = useState({});

  const subjects = [
    'Livemusiikki ravintoloissa',
    'Yritystilaisuudet',
    'Taustamusiikkia tilaisuuksiin',
    'Häämusiikki',
    'Sävellyspalvelut',
    'Muu',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Nimi on pakollinen';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Sähköposti on pakollinen';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Sähköpostin muoto ei ole oikea';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Viesti on pakollinen';
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = 'Päivämäärä on pakollinen';
      isValid = false;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      if (selectedDate < today) {
        newErrors.date = 'Valitse päivämäärä, joka on tänään tai tulevaisuudessa';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Contact form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="name"
            name="name"
            label="Nimi"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            required
            error={!!errors.name}
            helperText={errors.name}
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Sähköposti"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            required
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            name="phone"
            label="Puhelin"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleInputChange}
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="subject-label">Aihe</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              autoComplete="off"
            >
              {subjects.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="date"
            name="date"
            label="Päivämäärä"
            variant="outlined"
            fullWidth
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            required
            error={!!errors.date}
            helperText={errors.date}
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            name="message"
            label="Viesti"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            error={!!errors.message}
            helperText={errors.message}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: '10px 20px',
              fontWeight: 'bold',
              borderRadius: '25px',
              textTransform: 'none',
            }}
          >
            Lähetä
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;