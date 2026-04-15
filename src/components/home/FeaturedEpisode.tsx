import { Calendar, Eye } from 'lucide-react';
import { episodes } from '../../data/episodes';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionIntro from '../ui/SectionIntro';
import SurfaceCard from '../ui/SurfaceCard';
import YouTubePlayer from '../youtube/YouTubePlayer';

export default function FeaturedEpisode() {
  const featured = episodes[0];

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <Section tone="warm" spacing="default" id="featured-episode">
      <Container size="wide">
        <SectionIntro
          eyebrow="Latest episode"
          title="Now playing"
          copy="Catch the latest episode in The Higher Life Podcast with Pastor Deola Phillips."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.85fr)] lg:items-start">
          <YouTubePlayer videoId={featured.videoId} title={featured.title} />

          <SurfaceCard tone="paper" padding="lg">
            {featured.category && (
              <span className="inline-flex rounded-full bg-gold-500/14 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
                {featured.category}
              </span>
            )}
            <h3 className="mt-5 text-3xl text-ink-950 sm:text-4xl">{featured.title}</h3>
            <p className="mt-5 text-base leading-7 text-ink-600 sm:text-lg">
              {featured.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold-600" />
                {formatDate(featured.date)}
              </span>
              {featured.views && (
                <span className="inline-flex items-center gap-2">
                  <Eye className="h-4 w-4 text-gold-600" />
                  {featured.views} views
                </span>
              )}
            </div>

            {featured.resources && featured.resources.length > 0 && (
              <div className="mt-8 rounded-[1.25rem] border border-ink-950/8 bg-sand-50 px-5 py-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Episode references
                </p>
                <ul className="mt-4 space-y-3">
                  {featured.resources.map((resource, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-6 text-ink-600">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                      {resource.reference || resource.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </SurfaceCard>
        </div>
      </Container>
    </Section>
  );
}
