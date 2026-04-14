import type { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'narrow' | 'default' | 'wide' | 'full';
}

const sizes: Record<NonNullable<ContainerProps['size']>, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  full: 'max-w-[88rem]',
};

export default function Container({
  children,
  size = 'default',
  className = '',
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
