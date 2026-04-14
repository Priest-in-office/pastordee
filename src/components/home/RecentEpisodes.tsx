import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { episodes } from '../../data/episodes';
import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionIntro from '../ui/SectionIntro';
import Button from '../ui/Button';
import EpisodeCard from '../youtube/EpisodeCard';

export default function RecentEpisodes() {
  const featureShelf = episodes.slice(1, 2);
  const recentEps = episodes.slice(2, 6);

  return (
    <Section tone="transparent" spacing="default" id="recent-episodes">
      <Container size="wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Episode shelf"
            title="Recent conversations worth catching up on."
            copy="An editorial grid for latest releases, spotlight episodes, and shareable conversations from the archive."
          />

          <Link to="/episodes">
            <Button variant="ghost" size="md">
              Browse all episodes
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 space-y-6">
          {featureShelf.map((episode, index) => (
            <Link to={`/episodes?play=${episode.videoId}`} key={episode.id}>
              <EpisodeCard episode={episode} index={index} variant="featured" />
            </Link>
          ))}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {recentEps.map((episode, index) => (
              <Link to={`/episodes?play=${episode.videoId}`} key={episode.id}>
                <EpisodeCard episode={episode} index={index} variant="standard" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
