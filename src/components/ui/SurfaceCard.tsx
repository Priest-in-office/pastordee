import type { HTMLAttributes, ReactNode } from 'react';

interface SurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: 'paper' | 'warm' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

const tones: Record<NonNullable<SurfaceCardProps['tone']>, string> = {
  paper: 'bg-white/90 border border-ink-950/8 text-ink-700 shadow-[var(--shadow-soft)]',
  warm: 'bg-sand-100 border border-ink-950/8 text-ink-700 shadow-[var(--shadow-soft)]',
  dark: 'bg-ink-900 border border-white/10 text-white shadow-[var(--shadow-card)]',
};

const padding: Record<NonNullable<SurfaceCardProps['padding']>, string> = {
  sm: 'p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-8 lg:p-10',
};

export default function SurfaceCard({
  children,
  tone = 'paper',
  padding: cardPadding = 'md',
  className = '',
  ...props
}: SurfaceCardProps) {
  return (
    <div
      className={`rounded-[1.5rem] ${tones[tone]} ${padding[cardPadding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
