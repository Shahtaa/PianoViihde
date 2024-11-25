import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}
      >
        Ota Yhteyttä
      </Typography>
      <ContactForm />
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
  )
}

export default Contact
