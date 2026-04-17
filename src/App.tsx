import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import { HelmetProvider } from 'react-helmet-async';
import GalleryPage from './pages/GalleryPage';
import EventCalendar from './pages/EventCalendar';
import FutureSparksHome from './pages/Fund_donation';
import StudentDetail from './components/StudentDetail';
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:category" element={<CategoryProjects />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/events" element={<EventCalendar />} />
        <Route path="/event-calendar" element={<EventCalendar />} />
        <Route path="/emergency" element={<Home />} />
        <Route path="/fund_donation" element={<FutureSparksHome />} />
        <Route path="/student/:studentSlug" element={<StudentDetail />} />
        
        {/* Or if you specifically want it to be /fund_donation/ */}
        {/* <Route path="/fund_donation/:studentSlug" element={<StudentDetail />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Scrolltop />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;