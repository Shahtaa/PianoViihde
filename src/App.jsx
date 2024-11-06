import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Pianists from './components/Pianists';
import Services from './components/Services'; // Add services page
import Artists from './components/Artists'; // Add artists page
import Media from './components/Media'; // Add media page
import Contact from './components/Contact'; // Add contact page

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pianists" element={<Pianists />} />
            <Route path="/services" element={<Services />} /> {/* Add Services route */}
            <Route path="/artists" element={<Artists />} /> {/* Add Artists route */}
            <Route path="/media" element={<Media />} /> {/* Add Media route */}
            <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;