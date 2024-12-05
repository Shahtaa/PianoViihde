import React from 'react'
import Typography from '@mui/material/Typography'
import './PartnerLogos.css'

const PartnerLogos = () => {
  const partners = [
    {
      name: 'Partner 1',
      logo: '/images/logos/logo1.png',
      url: 'https://partner1.com',
    },
    {
      name: 'Partner 2',
      logo: '/images/logos/logo2.jpg',
      url: 'https://partner2.com',
    },
    {
      name: 'Partner 3',
      logo: '/images/logos/logo3.jpg',
      url: 'https://partner3.com',
    },
    {
      name: 'Partner 4',
      logo: '/images/logos/logo4.jpg',
      url: 'https://partner4.com',
    },
    {
      name: 'Partner 5',
      logo: '/images/logos/logo5.jpg',
      url: 'https://partner5.com',
    },
  ]

  // Дублируем логотипы 4 раза для плавной прокрутки
  const repeatedLogos = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ]

  return (
    <div className="partner-logos-container">
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', mb: 5, color: '#333' }}
      >
        Yhteistyössä
      </Typography>
      <div className="logos-marquee">
        <div className="logos-track">
          {repeatedLogos.map((partner, index) => (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="logo-item"
            >
              <img src={partner.logo} alt={partner.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerLogos
