import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data
        console.log('Contact form submitted');
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
                Ota Yhteyttä
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Nimi"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Sähköposti"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Box>
                <Box sx={{ mb: 4 }}>
                    <TextField
                        label="Viesti"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Lähetä
                    </Button>
                </Box>
            </form>
        </Container>
    );
}

export default Contact;