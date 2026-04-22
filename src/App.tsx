import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Adjusters from './pages/Adjusters';
import Process from './pages/Process';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/adjusters" element={<Adjusters />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
