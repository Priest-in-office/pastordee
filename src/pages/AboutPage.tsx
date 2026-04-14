import { ArrowRight, Award, BookOpen, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router';
import pastorDeola from '../assets/pastordeola.webp';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionIntro from '../components/ui/SectionIntro';
import SurfaceCard from '../components/ui/SurfaceCard';

const highlights = [
  {
    icon: Heart,
    title: 'Pastoral warmth',
    description:
      'Every teaching is designed to encourage spiritual maturity without losing tenderness or clarity.',
  },
  {
    icon: BookOpen,
    title: 'Scripture-first teaching',
    description:
      'The ministry remains rooted in biblical truth translated into practical wisdom for everyday life.',
  },
  {
    icon: Globe,
    title: 'Global reach',
    description:
      'The site now presents the podcast as a world-class listening experience for believers everywhere.',
  },
  {
    icon: Award,
    title: 'Editorial excellence',
    description:
      'Typography, hierarchy, and spacing now support the message with stronger polish and presence.',
  },
];

export default function AboutPage() {
  return (
    <main id="about-page">
      <PageHero
        eyebrow="About the host"
        title="A voice shaped by conviction, clarity, and a call to help believers live the higher life."
        copy="Pastor Deola Phillips teaches with pastoral warmth and biblical depth, helping listeners translate truth into daily living, stronger families, and deeper confidence in Christ."
        actions={
          <>
            <Link to="/episodes">
              <Button variant="primary" size="lg">
                Watch Episodes
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/ask">
              <Button
                variant="outline"
                size="lg"
                className="border-white/14 bg-white/6 text-white hover:border-white/30 hover:bg-white/10"
              >
                Ask a Question
              </Button>
            </Link>
          </>
        }
        media={
          <div className="mx-auto max-w-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 shadow-[var(--shadow-card)]">
            <img
              src={pastorDeola}
              alt="Pastor Deola Phillips"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        }
      />

      <Section tone="paper" spacing="default">
        <Container size="wide">
          <SectionIntro
            eyebrow="The mission"
            title="The Higher Life is more than a podcast feed."
            copy="It is a teaching platform for faith, purpose, family, and spiritual maturity, designed to bring biblical wisdom into the rhythm of everyday life."
            align="center"
          />

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center text-base leading-8 text-ink-600 sm:text-lg">
            <p>
              Through weekly episodes, Pastor Deola Phillips creates a space where profound
              truths feel both spiritually rich and practically useful.
            </p>
            <p>
              The redesign reframes that mission with stronger editorial pacing, better
              typography, and a world-class media presentation that matches the caliber of
              the message.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="transparent" spacing="default">
        <Container size="wide">
          <SectionIntro
            eyebrow="Why listeners stay"
            title="A ministry profile with more confidence and depth."
            copy="The highlights below replace generic cards with a more refined editorial rhythm and clearer value proposition."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <SurfaceCard key={item.title} tone="paper" padding="lg" className="h-full">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gold-500/12 text-gold-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl text-ink-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-600">{item.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
