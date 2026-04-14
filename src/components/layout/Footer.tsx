import { NavLink } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import logo from '../../assets/logo.jpg';

const quickLinks = [
  { label: 'Episodes', to: '/episodes' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Ask a Question', to: '/ask' },
];

const socialLinks = [
  { label: 'YouTube', href: 'https://www.youtube.com/@thehigherlifepodcast1' },
  { label: 'Apple Podcasts', href: 'https://podcasts.apple.com' },
  { label: 'Spotify', href: 'https://open.spotify.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white">
      <Container size="wide" className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)]">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="The Higher Life Podcast"
                className="h-14 w-14 rounded-full border border-white/12 object-cover"
              />
              <div>
                <span className="block font-heading text-2xl text-white">
                  The Higher Life
                </span>
                <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold-400">
                  World-class conversations for growth in Christ
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/68 sm:text-base">
              Thoughtful biblical conversations on faith, family, purpose, and spiritual
              maturity with Pastor Deola Phillips.
            </p>

            <div className="mt-8">
              <Button
                href="https://www.youtube.com/@thehigherlifepodcast1"
                variant="primary"
                size="md"
              >
                Watch the Latest Episode
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">
              Explore
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">
              Listen & Follow
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {social.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Higher Life Podcast. All rights reserved.</p>
          <p>Designed for thoughtful listening, deeper faith, and lasting impact.</p>
        </div>
      </Container>
    </footer>
  );
}
