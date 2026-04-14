import { motion } from 'framer-motion';
import { Play, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router';
import Button from '../ui/Button';
import pastorDeola from '../../assets/pastordeola.webp';

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark-surface" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Teal glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-teal/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 border border-brand-teal/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-brand-teal text-sm font-medium tracking-wide">
                Living The Higher Life in Christ
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              The Higher{' '}
              <span className="text-brand-teal">Life</span>{' '}
              <span className="block mt-2">Podcast</span>
            </h1>

            <p className="text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Join <span className="text-white font-medium">Pastor Deola Phillips</span> for
              transformative conversations about faith, purpose, and walking in the fullness
              of God's blessing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/episodes" variant="primary" size="lg">
                <Play className="w-5 h-5" />
                Watch Episodes
              </Button>
              <Link to="/ask">
                <Button variant="outline" size="lg">
                  <MessageCircleQuestion className="w-5 h-5" />
                  Ask a Question
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">13+</span>
                <span>Episodes</span>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">70K+</span>
                <span>Views</span>
              </div>
              <div className="w-px h-8 bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">Global</span>
                <span>Audience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-teal/20 to-brand-gold/10 rounded-3xl blur-2xl" />

              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={pastorDeola}
                  alt="Pastor Deola Phillips — Host of The Higher Life Podcast"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay on photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-brand-teal/30 rounded-3xl" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 border-2 border-brand-gold/20 rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-brand-teal"
          />
        </div>
      </motion.div>
    </section>
  );
}
