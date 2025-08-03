import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Donation from './pages/Donation';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/footer';
import Scrolltop from './components/ScrollToTop';
import CategoryProjects from './components/CategoryProjects';
import VolunteerForm from './components/VolunteerForm';
import './index.css';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          {/* <AnimatePresence mode="wait" initial={true}>   */}
            <Scrolltop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:category" element={<CategoryProjects />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/volunteer" element={<VolunteerForm />} />
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
            <Footer />
          {/* </AnimatePresence> */}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;