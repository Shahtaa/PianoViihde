import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Gigs from './components/Gigs/Gigs'
import Pianists from './components/Pianists/Pianists'
import PianistPage from './components/Pianists/PianistPage'
import Services from './components/Services/Services'
import ServicePage from './components/Services/ServicesPage'
import Artists from './components/Artists/Artists'
import ArtistPage from './components/Artists/ArtistPage'
import Contact from './components/Contact/Contact'

const theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display, serif',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/pianists" element={<Pianists />} />
          <Route path="/pianists/:id" element={<PianistPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
