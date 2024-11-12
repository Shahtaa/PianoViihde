import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Pianists from './components/Pianists/Pianists'
import Services from './components/Services/Services' // Add services page
import Artists from './components/Artists/Artists' // Add artists page
import Media from './components/Media/Media' // Add media page
import Contact from './components/Contact/Contact' // Add contact page

const theme = createTheme({
  typography: {
    fontFamily: 'Playfair Display, serif', // Глобальный шрифт
  },
  palette: {
    primary: {
      main: '#1976d2', // Пример настройки цвета
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pianists" element={<Pianists />} />
              <Route path="/services" element={<Services />} />{' '}
              {/* Add Services route */}
              <Route path="/artists" element={<Artists />} />{' '}
              {/* Add Artists route */}
              <Route path="/media" element={<Media />} />{' '}
              {/* Add Media route */}
              <Route path="/contact" element={<Contact />} />{' '}
              {/* Add Contact route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;