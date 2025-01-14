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
    date: '',
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

  const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://your-production-domain.com/api/contact'
    : 'http://localhost:3000/api/contact';


    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return; // Проверяем валидацию
    
      try {
        const response = await fetch(`${API_URL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData), // Отправляем данные из формы
        });
    
        if (!response.ok) {
          throw new Error('Ошибка при отправке сообщения');
        }
    
        const result = await response.json();
        console.log('Результат от сервера:', result);
    
        alert('Сообщение успешно отправлено!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          date: '',
          message: '',
        }); // Очищаем форму после успешной отправки
      } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
        alert('Не удалось отправить сообщение. Попробуйте еще раз.');
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
              onChange={handleInputChange}
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
