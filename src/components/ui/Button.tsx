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
  const base =
    'inline-flex items-center justify-center font-sans font-semibold rounded-lg transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-teal';

  const variants: Record<string, string> = {
    primary:
      'bg-brand-teal text-dark hover:bg-brand-teal-dark hover:shadow-lg hover:shadow-brand-teal/25 active:scale-[0.97]',
    secondary:
      'bg-dark text-white hover:bg-dark-secondary hover:shadow-lg active:scale-[0.97]',
    outline:
      'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-dark active:scale-[0.97]',
    ghost:
      'text-gray-600 hover:text-brand-teal hover:bg-brand-teal/10 active:scale-[0.97]',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} id={id} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} id={id}>
      {children}
    </button>
  );
}
