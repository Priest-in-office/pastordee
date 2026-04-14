import type { HTMLAttributes, ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tone?: 'paper' | 'warm' | 'dark' | 'transparent';
  spacing?: 'compact' | 'default' | 'hero';
}

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  paper: 'bg-white/70',
  warm: 'bg-sand-100/80',
  dark: 'bg-ink-950 text-white',
  transparent: 'bg-transparent',
};

const spacing: Record<NonNullable<SectionProps['spacing']>, string> = {
  compact: 'py-14 sm:py-16 lg:py-20',
  default: 'py-18 sm:py-20 lg:py-28',
  hero: 'py-16 sm:py-20 lg:py-24',
};

export default function Section({
  children,
  tone = 'transparent',
  spacing: sectionSpacing = 'default',
  className = '',
  ...props
}: SectionProps) {
  return (
    <section className={`${tones[tone]} ${spacing[sectionSpacing]} ${className}`} {...props}>
      {children}
    </section>
  );
}
