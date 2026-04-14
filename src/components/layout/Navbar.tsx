import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../assets/logo.jpg';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Episodes', to: '/episodes' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Ask a Question', to: '/ask' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group" id="nav-logo">
          <img
            src={logo}
            alt="The Higher Life Podcast"
            className="h-10 w-auto rounded-md"
          />
          <div className="hidden sm:block">
            <span className={`font-heading text-lg font-bold leading-tight block transition-colors duration-300 ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}>
              The Higher Life
            </span>
            <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
              isScrolled ? 'text-brand-teal-dark' : 'text-brand-teal-light'
            }`}>
              Podcast
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-brand-teal bg-brand-teal/10'
                    : isScrolled
                    ? 'text-gray-600 hover:text-brand-teal hover:bg-brand-teal/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button
              href="https://www.youtube.com/@thehigherlifepodcast1"
              variant="primary"
              size="sm"
            >
              Watch on YouTube
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-brand-teal bg-brand-teal/10'
                    : 'text-gray-700 hover:text-brand-teal hover:bg-brand-teal/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 px-4">
            <Button
              href="https://www.youtube.com/@thehigherlifepodcast1"
              variant="primary"
              size="md"
              className="w-full"
            >
              Watch on YouTube
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
