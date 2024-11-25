import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import ContactForm from '../../Contact/ContactForm'

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          Ota Yhteyttä
        </Typography>
        <ContactForm />
      </Container>
    </Box>
  )
}

export default ContactSection
