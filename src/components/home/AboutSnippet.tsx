import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import pastorDeola from '../../assets/pastordeola.webp';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionIntro from '../ui/SectionIntro';
import Button from '../ui/Button';

const hostPoints = [
  'Practical biblical teaching rooted in spiritual maturity',
  'Warm, intelligible guidance for faith, family, and purpose',
  'A voice shaped for both the church audience and global listeners',
];

export default function AboutSnippet() {
  return (
    <Section tone="paper" spacing="default" id="about-snippet">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative mx-auto max-w-[28rem]">
            <div className="absolute -bottom-8 -left-8 hidden h-36 w-36 rounded-[2rem] border border-ink-950/10 bg-sand-100 lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-ink-950/8 bg-white shadow-[var(--shadow-card)]">
              <img
                src={pastorDeola}
                alt="Pastor Deola Phillips"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Meet the host"
              title="Pastor Deola Phillips brings clarity, warmth, and conviction to every conversation."
              copy="The site now treats her story like an editorial profile rather than a generic bio block, giving the ministry a stronger sense of credibility and presence."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hostPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.25rem] border border-ink-950/8 bg-white px-5 py-5 text-sm leading-6 text-ink-600 shadow-[var(--shadow-soft)]"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary" size="md">
                  Read Pastor Deola&apos;s Story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
