import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/92 backdrop-blur-xl">
      <Container size="wide" className="flex min-h-[5.5rem] items-center justify-between gap-6">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          id="nav-logo"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src={logo}
            alt="The Higher Life Podcast"
            className="h-12 w-12 rounded-full border border-white/15 object-cover"
          />
          <div className="min-w-0">
            <span className="block font-heading text-xl text-white">The Higher Life</span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Pastor Deola Phillips
            </span>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" id="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/66 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button
              href="https://www.youtube.com/@thehigherlifepodcast1"
              variant="primary"
              size="md"
            >
              Watch on YouTube
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white transition-colors duration-300 hover:bg-white/8 lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={`overflow-hidden border-t border-white/8 bg-ink-900/98 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <Container size="wide" className="py-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/6 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              href="https://www.youtube.com/@thehigherlifepodcast1"
              variant="primary"
              size="md"
              className="mt-3 w-full"
            >
              Watch on YouTube
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
