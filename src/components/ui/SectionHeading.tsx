import SectionIntro from './SectionIntro';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <SectionIntro
      title={title}
      copy={subtitle}
      align={align}
      tone={light ? 'light' : 'dark'}
    />
  );
}
