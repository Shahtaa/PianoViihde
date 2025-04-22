import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Для блокировки кнопки во время отправки

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

  // Для select (потому что в Select event.target это объект, а не input)
  const handleSelectChange = (e) => {
    setFormData((prevData) => ({ ...prevData, subject: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nimi on pakollinen';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Sähköposti on pakollinen';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Sähköpostin muoto ei ole oikea';
    }

    if (formData.phone && !/^\d{6,15}$/.test(formData.phone)) {
      newErrors.phone = 'Puhelin tulee sisältää vain numeroita (6–15 merkkiä)';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Aihe on pakollinen';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Viesti on pakollinen';
    }

    if (!formData.date.trim()) {
      newErrors.date = 'Päivämäärä on pakollinen';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      if (selectedDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
        newErrors.date = 'Valitse päivämäärä, joka on tänään tai tulevaisuudessa';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    console.log('Отправка формы:', formData);

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Virhe viestin lähettämisessä');
      }

      const result = await response.json();
      console.log('Ответ сервера:', result);

      toast.success('Viesti lähetettiin onnistuneesti!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        date: '',
        message: '',
      });
    } catch (error) {
      console.error('Virhe lähettämisessä:', error);
      toast.error(`Virhe: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }

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
            error={!!errors.name}
            helperText={errors.name}
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
            error={!!errors.email}
            helperText={errors.email}
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
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={!!errors.subject}>
            <InputLabel id="subject-label">Aihe</InputLabel>
            <Select
              labelId="subject-label"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleSelectChange}
            >
              {subjects.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {errors.subject && (
              <Box sx={{ color: 'red', mt: 1, fontSize: '0.875rem' }}>
                {errors.subject}
              </Box>
            )}
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
            error={!!errors.date}
            helperText={errors.date}
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
            error={!!errors.message}
            helperText={errors.message}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{
              padding: '10px 20px',
              fontWeight: 'bold',
              borderRadius: '25px',
              textTransform: 'none',
            }}
          >
            {isSubmitting ? 'Lähetetään...' : 'Lähetä'}
          </Button>
        </Grid>
      </Grid>
      <ToastContainer position="bottom-right" autoClose={5000} theme="light" />
    </form>
  );
};

export default ContactForm;
