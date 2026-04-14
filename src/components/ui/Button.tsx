import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  id?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full border text-center font-semibold transition-all duration-300 focus-visible:outline-none';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'border-gold-500 bg-gold-500 text-ink-950 hover:border-gold-400 hover:bg-gold-400',
  secondary:
    'border-ink-950 bg-ink-950 text-white hover:border-ink-800 hover:bg-ink-800',
  outline:
    'border-ink-950/15 bg-white/40 text-ink-950 hover:border-ink-950 hover:bg-white',
  ghost:
    'border-transparent bg-transparent text-ink-700 hover:bg-ink-950/6 hover:text-ink-950',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-5 text-sm sm:text-[0.95rem]',
  lg: 'min-h-13 px-6 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  id,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'pointer-events-none opacity-50' : ''
  } ${className}`;

  if (href) {
    const external = href.startsWith('http');

    return (
      <a
        href={href}
        className={classes}
        id={id}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
}
