import React, { useState } from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import ContactForm from './ContactForm';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true); // Отображение сообщения об успешной отправке
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}
      >
        Ota Yhteyttä
      </Typography>
      {!formSubmitted ? (
        <ContactForm onFormSubmit={handleFormSubmit} />
      ) : (
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mt: 4, color: 'green' }}
        >
          Kiitos viestistäsi! Otamme sinuun yhteyttä pian.
        </Typography>
      )}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Lähettämällä viestin hyväksyt{' '}
          <Link
            href="/tietosuojaseloste"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            tietosuojaselosteen
          </Link>{' '}
          ja ymmärrät, että tietojasi käsitellään turvallisesti.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
