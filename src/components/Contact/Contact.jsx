import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const subjects = [
        'Pianistin varaus',
        'Tapahtumamusiikki',
        'Häiden viihde',
        'Yritystilaisuudet',
        'Yksityistilaisuudet',
        'Hintatiedot',
        'Saatavuuskysely',
        'Erityistoiveet',
        'Muu',
    ];

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Nimi on pakollinen';
            valid = false;
        }

        if (!email) {
            newErrors.email = 'Sähköposti on pakollinen';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Sähköpostin muoto ei ole oikea';
            valid = false;
        }

        if (!message) {
            newErrors.message = 'Viesti on pakollinen';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        console.log('Contact form submitted:', { name, email, phone, subject, message });
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4, mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
                Ota Yhteyttä
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="name"
                            name="name"
                            label="Nimi"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
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
                            id="message"
                            name="message"
                            label="Viesti"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
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
        </Container>
    );
}

export default Contact;