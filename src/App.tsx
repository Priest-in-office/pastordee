import { BrowserRouter, Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import EpisodesPage from './pages/EpisodesPage';
import AboutPage from './pages/AboutPage';
import AskPage from './pages/AskPage';
import EventsPage from './pages/EventsPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
