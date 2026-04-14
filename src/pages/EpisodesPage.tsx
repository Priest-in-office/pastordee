import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Search, X } from 'lucide-react';
import type { Episode } from '../types';
import { categories, episodes } from '../data/episodes';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import SectionIntro from '../components/ui/SectionIntro';
import SurfaceCard from '../components/ui/SurfaceCard';
import EpisodeCard from '../components/youtube/EpisodeCard';
import YouTubePlayer from '../components/youtube/YouTubePlayer';

export default function EpisodesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(() => {
    const playId = searchParams.get('play');
    return playId ? episodes.find((episode) => episode.videoId === playId) || null : null;
  });

  const filteredEpisodes = useMemo(
    () =>
      episodes.filter((episode) => {
        const matchesSearch =
          !search ||
          episode.title.toLowerCase().includes(search.toLowerCase()) ||
          episode.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
          activeCategory === 'All' || episode.category === activeCategory;
        return matchesSearch && matchesCategory;
      }),
    [search, activeCategory]
  );

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
    setSearchParams({ play: episode.videoId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePlayer = () => {
    setSelectedEpisode(null);
    setSearchParams({});
  };

  return (
    <main id="episodes-page">
      <PageHero
        eyebrow="Episode library"
        title="A cleaner archive for discovering, replaying, and sharing the message."
        copy="The archive now carries the same editorial hierarchy as the homepage, with a featured player, improved filters, and a premium card system for every episode."
      />

      <Section tone="paper" spacing="default">
        <Container size="wide">
          <AnimatePresence>
            {selectedEpisode && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="mb-10"
              >
                <SurfaceCard tone="paper" padding="lg">
                  <div className="flex flex-col gap-5 border-b border-ink-950/8 pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <span className="eyebrow">Now playing</span>
                      <h2 className="mt-4 text-3xl text-ink-950 sm:text-4xl">
                        {selectedEpisode.title}
                      </h2>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleClosePlayer}>
                      <X className="h-4 w-4" />
                      Close player
                    </Button>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
                    <YouTubePlayer
                      videoId={selectedEpisode.videoId}
                      title={selectedEpisode.title}
                    />

                    <div>
                      {selectedEpisode.category && (
                        <span className="inline-flex rounded-full bg-gold-500/14 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
                          {selectedEpisode.category}
                        </span>
                      )}
                      <p className="mt-5 text-base leading-7 text-ink-600">
                        {selectedEpisode.description}
                      </p>

                      {selectedEpisode.resources && selectedEpisode.resources.length > 0 && (
                        <div className="mt-8 rounded-[1.25rem] border border-ink-950/8 bg-sand-50 p-5">
                          <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                            <BookOpen className="h-4 w-4 text-gold-600" />
                            Episode references
                          </p>
                          <ul className="mt-4 space-y-3">
                            {selectedEpisode.resources.map((resource, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3 text-sm leading-6 text-ink-600"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                                {resource.reference || resource.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:items-end">
            <SectionIntro
              eyebrow="Browse the library"
              title="Search and filter without losing the premium feel."
              copy={`${episodes.length} episodes of faith, growth, family, and purpose.`}
            />

            <SurfaceCard tone="warm" padding="md">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-500" />
                <input
                  id="episode-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title or theme"
                  className="min-h-13 w-full rounded-full border border-ink-950/10 bg-white pl-12 pr-12 text-base text-ink-950 placeholder:text-ink-500 focus:border-gold-500 focus:outline-none"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-500 transition-colors duration-300 hover:text-ink-950"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                      activeCategory === category
                        ? 'bg-ink-950 text-white'
                        : 'bg-white text-ink-600 hover:bg-ink-950/8 hover:text-ink-950'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </SurfaceCard>
          </div>

          <div className="mt-12">
            {filteredEpisodes.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredEpisodes.map((episode, index) => (
                  <EpisodeCard
                    key={episode.id}
                    episode={episode}
                    index={index}
                    onClick={handleEpisodeClick}
                  />
                ))}
              </div>
            ) : (
              <SurfaceCard tone="paper" padding="lg" className="text-center">
                <h3 className="text-3xl text-ink-950">No episodes match your filters.</h3>
                <p className="mt-4 text-base leading-7 text-ink-600">
                  Try clearing the search term or selecting a broader category.
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => {
                    setSearch('');
                    setActiveCategory('All');
                  }}
                >
                  Reset filters
                </Button>
              </SurfaceCard>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
