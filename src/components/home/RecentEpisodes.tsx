import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import EpisodeCard from '../youtube/EpisodeCard';
import Button from '../ui/Button';
import { episodes } from '../../data/episodes';

export default function RecentEpisodes() {
  // Skip the first (featured) episode, show next 6
  const recentEps = episodes.slice(1, 7);

  return (
    <section id="recent-episodes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Recent Episodes"
          subtitle="Catch up on the latest conversations from The Higher Life Podcast"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recentEps.map((ep, i) => (
            <Link to={`/episodes?play=${ep.videoId}`} key={ep.id}>
              <EpisodeCard episode={ep} index={i} />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/episodes">
            <Button variant="outline" size="lg">
              View All Episodes
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
