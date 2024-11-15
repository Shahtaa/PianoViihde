import React from 'react'
import CountUp from 'react-countup'
import { Box, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer'

function CounterSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: { xs: 'column', sm: 'row' },
        padding: '2rem 0',
        gap: { xs: 2, sm: 0 },
      }}
    >
      {inView && (
        <>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontSize="5rem">
              <CountUp start={0} end={120} duration={2.5} />
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              fontSize="1.5rem"
            >
              KEIKKAA
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontSize="5rem">
              <CountUp start={0} end={21} duration={2.5} />
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              fontSize="1.5rem"
            >
              VUOTTA
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary" fontSize="5rem">
              <CountUp start={0} end={201} duration={2.5} />
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              fontSize="1.5rem"
            >
              ASIAKKAITA
            </Typography>
          </Box>
        </>
      )}
    </Box>
  )
}

export default CounterSection
