import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fi } from 'date-fns/locale';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    date: null, // date как объект Date
  });

  const [phone, setPhone] = useState('358');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSelectChange = (e) => {
    setFormData((prevData) => ({ ...prevData, subject: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Nimi on pakollinen';
    if (!formData.email.trim()) {
      newErrors.email = 'Sähköposti on pakollinen';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Sähköpostin muoto ei ole oikea';
    }

    if (formData.phone && !/^\d{6,15}$/.test(formData.phone)) {
      newErrors.phone = 'Puhelin tulee sisältää vain numeroita (6–15 merkkiä)';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Aihe on pakollinen';
    if (!formData.message.trim()) newErrors.message = 'Viesti on pakollinen';

    if (!formData.date) {
      newErrors.date = 'Päivämäärä on pakollinen';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      if (selected.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
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

    const payload = {
      ...formData,
      date: formData.date?.toISOString().split('T')[0],
    };

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Virhe viestin lähettämisessä');
      }

      toast.success('Viesti lähetettiin onnistuneesti!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        date: null,
      });
      setPhone('358');
    } catch (error) {
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
            label="Nimi"
            name="name"
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
            label="Sähköposti"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              '& .form-control': {
                width: '100%',
                height: '56px',
                fontSize: '16px',
                border: '1px solid rgba(0, 0, 0, 0.23)',
                borderRadius: '4px',
                paddingLeft: '48px',
                backgroundColor: '#f5f5f5',
              },
              '& .flag-dropdown': {
                borderRight: '1px solid rgba(0, 0, 0, 0.23)',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
              },
              '& .form-control:focus': {
                borderColor: '#1976d2',
                boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
              },
            }}
          >
            <PhoneInput
              country={'fi'}
              value={phone}
              onChange={(value) => {
                setPhone(value);
                setFormData((prev) => ({ ...prev, phone: value }));
              }}
              enableSearch
              placeholder="Lisää puhelinnumero"
              specialLabel=""
              preferredCountries={['fi']}
              autoFormat
            />
          </Box>
          {errors.phone && (
            <Box sx={{ color: 'red', mt: 1, fontSize: '0.875rem' }}>{errors.phone}</Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={!!errors.subject}>
            <InputLabel id="subject-label">Aihe</InputLabel>
            <Select
              labelId="subject-label"
              name="subject"
              value={formData.subject}
              onChange={handleSelectChange}
            >
              {subjects.map((item, index) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
              ))}
            </Select>
            {errors.subject && (
              <Box sx={{ color: 'red', mt: 1, fontSize: '0.875rem' }}>{errors.subject}</Box>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
            <DatePicker
              value={formData.date}
              onChange={(newValue) => setFormData((prev) => ({ ...prev, date: newValue }))}
              minDate={new Date()}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  placeholder: 'Päivämäärä',
                  fullWidth: true,
                  error: !!errors.date,
                  helperText: errors.date,
                },
              }}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Viesti"
            name="message"
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
            sx={{ padding: '10px 20px', fontWeight: 'bold', borderRadius: '25px', textTransform: 'none' }}
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
