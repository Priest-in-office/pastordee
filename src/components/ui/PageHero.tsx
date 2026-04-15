import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Container from './Container';
import Section from './Section';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  copy: string;
  actions?: ReactNode;
  media?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  copy,
  actions,
  media,
}: PageHeroProps) {
  return (
    <Section tone="dark" spacing="hero" className="site-grain overflow-hidden">
      <Container size="wide" className="relative">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(210,180,118,0.25),transparent_65%)]" />
        <div
          className={`relative grid gap-12 lg:gap-16 ${
            media
              ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.8fr)] lg:items-center'
              : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="mt-5 text-[clamp(3rem,7vw,5.5rem)] text-white">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              {copy}
            </p>
            {actions && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
            )}
          </motion.div>

          {media && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
              className="relative"
            >
              {media}
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
}
