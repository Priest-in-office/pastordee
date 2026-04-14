import { motion } from 'framer-motion';

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export default function SectionIntro({
  eyebrow,
  title,
  copy,
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionIntroProps) {
  const isCentered = align === 'center';
  const titleTone = tone === 'light' ? 'text-white' : 'text-ink-950';
  const copyTone = tone === 'light' ? 'text-white/70' : 'text-ink-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`${isCentered ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 text-4xl sm:text-5xl ${titleTone}`}>{title}</h2>
      {copy && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${copyTone} ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {copy}
        </p>
      )}
    </motion.div>
  );
}
