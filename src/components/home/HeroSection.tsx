import { Play, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router';
import PageHero from '../ui/PageHero';
import Button from '../ui/Button';
import pastorDeola from '../../assets/pastordeola.webp';

export default function HeroSection() {
  return (
    <PageHero
      eyebrow="Welcome to"
      title={
        <>
         The <span className="text-gold-500">Higher Life Podcast</span> with Pastor Deola Phillips.
        </>
      }
      copy="Join Pastor Deola Phillips for beautifully presented conversations on faith, spiritual maturity, family, and the fullness of life in Christ."
      actions={
        <>
          <Link to="/episodes">
            <Button variant="primary" size="lg">
              <Play className="h-5 w-5" />
              Watch Episodes
            </Button>
          </Link>
          <Link to="/ask">
            <Button variant="outline" size="lg" className="border-white/14 bg-white/6 text-white hover:border-white/30 hover:bg-white/10">
              <MessageCircleQuestion className="h-5 w-5" />
              Ask a Question
            </Button>
          </Link>
        </>
      }
      media={
        <div className="relative mx-auto max-w-[30rem]">
          <div className="absolute -right-8 top-10 hidden h-32 w-32 rounded-full border border-white/12 lg:block" />
          <div className="absolute -left-10 bottom-12 hidden h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(64,224,208,0.38),transparent_70%)] lg:block" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 shadow-[var(--shadow-card)]">
            <div className="border-b border-white/8 px-6 py-4">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
                Pastor Deola Phillips
              </span>
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={pastorDeola}
                alt="Pastor Deola Phillips"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      }
    />
  );
}
